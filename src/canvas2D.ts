/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   canvas2D.ts                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/12 13:37:48 by lde-la-h      #+#    #+#                 */
/*   Updated: 2023/01/11 15:31:16 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * 2D Canvas implementation for pan, zoom and other controls.
 * @Reference https://bit.ly/3Dy0er8
 * @Reference https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
 */
class Canvas2D {

	//= Properties =//

	/** Reference to the canvas element. */
	public canvas: HTMLCanvasElement;
	/** The rendering context. */
	public ctx: CanvasRenderingContext2D;
	/** The current transformed mouse pos */
	public transformedPos: DOMPoint;
	/** The current amount of zoom. */
	public zoomAmount: number = 0;

	private isDragging: boolean = false;
	private dragPosition = { x: 0, y: 0 };
	private frameID: number | null = null;
	private canvasScale = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 1 : 2;
	
	//= Constructor =//

	/**
	 * Initializes a new Canvas2D object.
	 * @param inCanvas The canvas HTML element to user for rendering.
	 * @param width The desired width of the canvas.
	 * @param height The desired height of the canvas
	 */
	constructor(inCanvas: HTMLCanvasElement, width: number, height: number) {

		this.canvas = inCanvas;
		const context = this.canvas.getContext('2d');
		if (!context) throw new Error("Failed to create context")
		this.ctx = context;

		this.ctx.lineCap = "round";
		this.ctx.imageSmoothingEnabled = true;
		this.ctx.imageSmoothingQuality = "high";
		this.canvas.width = width * this.canvasScale;
		this.canvas.height = height * this.canvasScale;

		// Start in the middle
		this.transformedPos = new DOMPoint(this.canvas.width / 2, this.canvas.height / 2);
		this.ctx.translate(this.transformedPos.x, this.transformedPos.y);
	
		//= Mouse events =//

		this.canvas.addEventListener("mouseleave", (e: MouseEvent) => {
			this.isDragging = false;
		});

		this.canvas.addEventListener("mousedown", (e: MouseEvent) => {
			this.isDragging = true;
			this.dragPosition = this.getTransformedPoint({ x: e.offsetX, y: e.offsetY });
		});

		this.canvas.addEventListener("mouseup", (e: MouseEvent) => {
			this.isDragging = false;
		});

		this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
			this.transformedPos = this.getTransformedPoint({ x: e.offsetX, y: e.offsetY })

			if (this.isDragging)
				this.ctx.translate(this.transformedPos.x - this.dragPosition.x, this.transformedPos.y - this.dragPosition.y);
		});

		this.canvas.addEventListener("mouseup", (e: MouseEvent) => {
			this.transformedPos = this.getTransformedPoint({ x: e.offsetX, y: e.offsetY })
		});

		this.canvas.addEventListener("wheel", (e: WheelEvent) => {
			e.preventDefault();
			
			let zoom = e.deltaY < 0 ? 1.1 : 0.9;
			
			// Either A or D component will work, since scaling is uniform.
			this.zoomAmount = this.ctx.getTransform().a;
			if (this.zoomAmount < 0.1 && zoom < 1) return;
			if (this.zoomAmount > 10 && zoom > 1) return;

			this.ctx.translate(this.transformedPos.x, this.transformedPos.y);
			this.ctx.scale(zoom, zoom);
			this.ctx.translate(-this.transformedPos.x, -this.transformedPos.y);
		});
	}

	//= Methods =//

	/**
	 * Function that starts to render to graph onto the canvas.
	 * @param renderFunc The function callback to render your content with.
	 */
	public render(renderFunc: (ctx: CanvasRenderingContext2D) => void): void {
		const animate = () => {
			if (!this.canvas && this.frameID != null) return cancelAnimationFrame(this.frameID);

			this.ctx.save();
			this.ctx.setTransform(1, 0, 0, 1, 0, 0);
			this.ctx.clearRect(0, 0, this.canvas.width * this.canvasScale, this.canvas.height * this.canvasScale);
			this.ctx.restore();

			renderFunc.call(this, this.ctx);
			this.frameID = requestAnimationFrame(animate);
		}
		animate();
	}

	/** Stops the rendering, clears the canvas as well. */
	public stopRender(): void {
		this.ctx.save();
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.canvas.width * this.canvasScale, this.canvas.height * this.canvasScale);
		this.ctx.restore();
		if (this.frameID != null)
			cancelAnimationFrame(this.frameID);
	}

	/**
	 * Converts a given x, y coordinate into a transformed canvas coordinate.
	 * 
	 * For instance you might want to set the 'camera' position to be on a certain
	 * object specified on X, Y untis. This function converts those coordinates into
	 * the actual transform required to translate to that given point.
	 * 
	 * @param point The X & Y coordinate to convert.
	 * @returns The transformed coordinate position.
	 */
	public getTransformedPoint(point: { x: number, y: number }): DOMPoint {
		return this.ctx.getTransform().invertSelf().transformPoint(new DOMPoint(point.x * this.canvasScale, point.y * this.canvasScale));
	}

	/**
	 * Sets the canvas dimensions / width & height. Preserves the matrix while doing so.
	 * @param dimensions The desired dimensions to scale the canvas to.
	 */
	public setDimensions(width: number, height: number): void {
		const temp = this.ctx.getTransform();
		this.canvas.width = width * this.canvasScale;
		this.canvas.height = height * this.canvasScale;
		this.ctx.setTransform(temp);
	}

	/**
	 * Sets the view position onto a given coordinate.
	 * @param pos The position to move to.
	 */
	public setViewPosition(pos: { x: number, y: number }): void {
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.transformedPos = new DOMPoint(((this.canvas.width) / 2) - pos.x, ((this.canvas.height) / 2) - pos.y);
		this.ctx.translate(this.transformedPos.x, this.transformedPos.y);
	}
}
