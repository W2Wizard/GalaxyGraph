/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   canvas2D.ts                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/05 22:15:08 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/05 22:15:08 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Apparently doing pan and zooming is a massive pain in the ass ...
// This was the only good source I found which used the deprecated SVGMatrix.
// See: http://phrogz.net/tmp/canvas_zoom_to_cursor.html

////////////////////////////////////////////////////////////////////////////////
// Globals
////////////////////////////////////////////////////////////////////////////////

interface CanvasRenderingContextBackup {
	backupSave: any,
	backupRestore: any,
	backupScale: any,
	backupRotate: any,
	backupTranslate: any,
	backupTransform: any,
	backupSetTransform: any,
}

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

/**
 * Inject overwritten functions to the canvas context.
 * @param ctx The context object.
 */
function trackTransforms(ctx: CanvasRenderingContext2D): CanvasRenderingContextBackup {

	const savedTransforms = [];
	let matrix = new DOMMatrix();
	
	ctx.getTransform = () =>  { return matrix; };

	const save = ctx.save;
	ctx.save = () =>  {
		savedTransforms.push(matrix.translate(0, 0));
		return save.call(ctx);
	};

	const restore = ctx.restore;
	ctx.restore = () =>  {
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
	(ctx as any).setTransform = (a, b, c, d, e, f) => {
		matrix.a = a;
		matrix.b = b;
		matrix.c = c;
		matrix.d = d;
		matrix.e = e;
		matrix.f = f;
		return (setTransform as any).call(ctx, a, b, c, d, e, f);
	};

	const pt = new DOMPoint();
	(ctx as any).transformPoint = (x, y) => {
		pt.x = x; pt.y = y;
		return pt.matrixTransform(matrix.inverse());
	}

	return {
		backupRestore: restore,
		backupRotate: rotate,
		backupSave: save,
		backupScale: scale,
		backupSetTransform: setTransform,
		backupTransform: transform,
		backupTranslate: translate
	}
}

function untrackTransforms(ctx: CanvasRenderingContext2D, backup: CanvasRenderingContextBackup) {
	ctx.restore = backup.backupRestore
	ctx.rotate = backup.backupRotate
	ctx.save = backup.backupSave
	ctx.scale = backup.backupScale
	ctx.setTransform = backup.backupSetTransform
	ctx.transform = backup.backupTransform
	ctx.translate = backup.backupTranslate
}