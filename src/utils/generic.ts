/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   generic.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/04 22:35:58 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/04 22:35:58 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * Translates the given position to the correct one.
 * @param x The x coordinate to correctly translate.
 * @param y The y coordinate to correctly translate.
 * @returns The adjusted coordinates.
 */
function translatePos(x: number, y: number, offset: number = 3000) {
	return [(((x - offset)) + camOffset[0]) + (canvas.width / 2),
			(((y - offset)) + camOffset[1]) + (canvas.height / 2)];
}

/**
 * Clamps the given number between two values.
 * @param num 
 * @param min 
 * @param max 
 * @returns The clamped value.
 */
function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}
