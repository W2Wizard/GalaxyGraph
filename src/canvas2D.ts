/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   canvas2D.ts                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/05 22:15:08 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 11:50:07 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Apparently doing pan and zooming is a massive pain in the ass ...
// This was the only good source I found which used the deprecated SVGMatrix.
// See: http://phrogz.net/tmp/canvas_zoom_to_cursor.html

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

/**
 * Inject overwritten functions to the canvas context.
 * @param ctx The context object.
 */
function injectTransOverrides(ctx: CanvasRenderingContext2D) {

	const savedTransforms = [];
	let matrix = new DOMMatrix();

	ctx.getTransform = () => { return matrix; };

	const save = ctx.save;
	ctx.save = function () {
		savedTransforms.push(matrix.translate(0, 0));
		return save.call(ctx);
	};

	const restore = ctx.restore;
	ctx.restore = function () {
		matrix = savedTransforms.pop();
		return restore.call(ctx);
	};

	const scale = ctx.scale;
	ctx.scale = function (sx, sy) {
		matrix = matrix.scale(sx, sy);
		return scale.call(ctx, sx, sy);
	};

	const rotate = ctx.rotate;
	ctx.rotate = function (radians) {
		matrix = matrix.rotate(radians * 180 / Math.PI);
		return rotate.call(ctx, radians);
	};

	const translate = ctx.translate;
	ctx.translate = function (dx, dy) {
		matrix = matrix.translate(dx, dy);
		return translate.call(ctx, dx, dy);
	};

	const transform = ctx.transform;
	ctx.transform = function (a, b, c, d, e, f) {
		const m2 = new DOMMatrix();
		m2.a = a; m2.b = b; m2.c = c; m2.d = d; m2.e = e; m2.f = f;
		matrix = matrix.multiply(m2);
		return transform.call(ctx, a, b, c, d, e, f);
	};

	const setTransform = ctx.setTransform;
	(ctx as any).setTransform = function (a, b, c, d, e, f) {
		matrix.a = a; matrix.b = b; matrix.c = c; matrix.d = d; matrix.e = e; matrix.f = f;
		return (setTransform as any).call(ctx, a, b, c, d, e, f);
	};

	(ctx as any).getScale = function () {
		return {
			scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
			scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d)
		};
	}

	const pt = new DOMPoint();
	(ctx as any).transformPoint = function (x, y): DOMPoint {
		pt.x = x;
		pt.y = y;
		return pt.matrixTransform(matrix.inverse());
	}
}

function setCanvasTranslationOffsets(x: number, y: number) {
	const trans = ctx.getTransform();
	trans.m41 = x;
	trans.m42 = y;
	ctx.setTransform(trans.a, trans.b, trans.c, trans.d, trans.e, trans.f);
}

function getCanvasTranslationOffsets() {
	const trans = ctx.getTransform();

	return { x: trans.m41, y: trans.m42 };
}

////////////////////////////////////////////////////////////////////////////////
// Intersections
////////////////////////////////////////////////////////////////////////////////

function isInsideCircle(x: number, y: number, cx: number, cy: number, rad: number) {
	return ((x - cx) * (x - cx) + (y - cy) * (y - cy)) <= rad * rad;
}

function isInsideRectangle(x: number, y: number, rx: number, ry: number, width: number, height: number,) {
	const x1 = rx - width / 2;
	const y1 = ry - height / 2;

	if (x < x1 || y < y1 || x > x1 + width || y > y1 + height)
		return false;
	return true;
}