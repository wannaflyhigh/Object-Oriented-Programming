export function randomInt(floor: number, ceil: number): number {
	return Math.ceil(Math.random() * (ceil - floor + 1)) + floor - 1
}
