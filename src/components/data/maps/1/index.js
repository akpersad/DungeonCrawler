// const tiles = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// export const tiles = [
// 	Array(20).fill(0),
// 	Array(20).fill(0),
// 	Array(20).fill(0),
// 	// Array(20).fill(6),
// 	[0, 0, 0, 0, 0, 0, 6, 6, 0, 6, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0],
// 	Array(20).fill(0),
// 	Array(20).fill(0),
// 	Array(20).fill(5),
// 	Array(20).fill(0),
// 	Array(20).fill(0),
// 	Array(20).fill(0)
// ];

const generateRandomGrid = () => {
	const rowCount = 10;
	const columnCount = 20;
	const gridArray = [];

	for (let i = 0; i < rowCount; i++) {
		const tempRowArray = [];
		for (let j = 0; j < columnCount; j++) {
			tempRowArray.push(Math.floor(Math.random() * 10));
		}
		gridArray.push(tempRowArray);
	}
	return gridArray;
};

export const tiles = generateRandomGrid();
