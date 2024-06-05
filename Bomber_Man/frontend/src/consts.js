let ITEM_WIDTH = window.innerWidth / 11, ITEM_HEIGHT = window.innerWidth / 11
console.log(ITEM_WIDTH)
console.log(ITEM_HEIGHT)
const MILLISEC_TO_SEC = 1000
const MAP_HEIGHT = 11, MAP_WIDTH = 11
const FIRE_TIME = 0.8, BOMB_TIME = 3
const SPEED_UP_RATE = 0.2, BOMB_ADD_RATE = 0.3, FIREPLUS_RATE = 0.3
const SCALE_SIZE = 1
const BRICK_GRASS_RATIO = 0.6

function getDynamicSizes() {
	const sliceWidth = window.innerWidth / 11;
	ITEM_WIDTH = sliceWidth,
		ITEM_HEIGHT = sliceWidth
}

export { getDynamicSizes, ITEM_WIDTH, ITEM_HEIGHT, MILLISEC_TO_SEC, MAP_WIDTH, MAP_HEIGHT, FIRE_TIME, BOMB_TIME, SPEED_UP_RATE, BOMB_ADD_RATE, FIREPLUS_RATE, SCALE_SIZE, BRICK_GRASS_RATIO }
