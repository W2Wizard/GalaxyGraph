/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   elements.ts                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/04 08:03:56 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/04 16:28:26 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Canvas 2D utilites, required global decl ctx of type CanvasRenderingContext2D

/**
 * A 2D element that is draw onto a canvas.
 */
class Element2D {

	pos: number[];
	color: string;
	path: Path2D;

	constructor(x: number, y: number, color: string) {
		this.path = new Path2D();
		this.pos = [x, y];
		this.color;
	}

	/**
	 * Draw the element onto the canvas.
	 */
	draw(): void { }

	/**
	 * Does the given point intersect the this shape.
	 * @returns True if the point lies within the object, else false.
	 */
	intersects(x: number, y: number): boolean { return false; }
}

/**
 * A filled circle.
 */
class Circle extends Element2D {

	radius: number;

	constructor(x: number, y: number, radius: number, color: string) {
		super(x, y, color);
		this.radius = radius;
	}

	override draw(): void {
		ctx.fillStyle = this.color;
		ctx.beginPath();
			this.path.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
			ctx.fill();
		ctx.closePath();
	}

	override intersects(x: number, y: number): boolean {
		return true;
	}
}

/**
 * A filled rectangle.
 */
class Rectangle extends Element2D {

	width: number;
	height: number;

	constructor(x: number, y: number, w: number, h: number, color: string) {
		super(x, y, color);
		this.width = w;
		this.height	= h;
	}

	override draw(): void {
		super.draw();

		ctx.beginPath();
			ctx.fillStyle = this.color;
			this.path.rect(this.pos[0], this.pos[1], this.width, this.height);
		ctx.closePath();
		ctx.fill(this.path);
	}

	override intersects(x: number, y: number): boolean {
		return ctx.isPointInPath(this.path, x, y)
	}
}

/**
 * A filled rounded rectangle.
 */
class RoundedRectangle extends Rectangle {

	radius: number;

	constructor(x: number, y: number, w: number, h: number, radius: number, color: string) {
		super(x, y, w, h, color);
		this.radius = radius;
	}

	override draw(): void {

		const x = this.pos[0];
		const y = this.pos[1];

		ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.moveTo(x + this.radius, y);

			// Top right corner
			ctx.lineTo(x + this.width - this.radius, y);
			ctx.quadraticCurveTo(x + this.width, y, x + this.width, y + this.radius);

			// Lower right corner
			ctx.lineTo(x + this.width, y + this.height - this.radius);
			ctx.quadraticCurveTo(x + this.width, y + this.height, x + this.width - this.radius, y + this.height);

			// Lower left corner
			ctx.lineTo(x + this.radius, y + this.height);
			ctx.quadraticCurveTo(x, y + this.height, x, y + this.height - this.radius);

			// Top left corner
			ctx.lineTo(x, y + this.radius);
			ctx.quadraticCurveTo(x, y, x + this.radius, y);
		ctx.closePath();
		ctx.fill();
	}

	// TODO: Make this intersection more accurate later maybe.
	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);	
	}
}

/**
 * A line from Origin to 
 */
class Line extends Element2D {

	thickness: number;
	target: number[];

	/**
	 * Draw a line from xy1 to xy2.
	 * @param origin Origin position.
	 * @param target Targt position.
	 * @param lwidth Line width / thickness.
	 * @param color Line color.
	 */
	constructor(origin: number[], target: number[], lwidth: number, color: string) {
		super(origin[0], origin[1], color); // xy1 is origin
		this.thickness = lwidth;
		this.target = target;
	}

	override draw(): void {
		ctx.lineWidth = 2;
		ctx.strokeStyle = Colors.Orange;
		ctx.beginPath();
		this.path.moveTo(this.pos[0], this.pos[1]);
		this.path.lineTo(this.target[0], this.target[1]);
		this.path.closePath()
		ctx.stroke(this.path);
	}

	override intersects(x: number, y: number): boolean {
		return ctx.isPointInPath(this.path, x, y)
	}
}
