import { useState } from "react";

const App = () => {
	const [color, setColor] = useState("black");

	const colors = [
		{ name: "Red", value: "red" },
		{ name: "Green", value: "green" },
		{ name: "Blue", value: "blue" },
		{ name: "Olive", value: "olive" },
		{ name: "Gray", value: "gray" },
		{ name: "Yellow", value: "yellow" },
		{ name: "Pink", value: "pink" },
		{ name: "Purple", value: "purple" },
		{ name: "Lavender", value: "lavender" },
		{ name: "Black", value: "black" },
	];

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
					{/* Use Map instead of hard coded values*/}
					{colors.map((colValue) => {
						return (
							<button
								onClick={() => setColor(colValue.value)}
								className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
								style={{ backgroundColor: colValue.value }}
							>
								{colValue.name}
							</button>
						);
					})}

					{/* <button
						onClick={() => setColor("white")}
						className="px-4 py-1 rounded-full outline-none text-black shadow-lg"
						style={{ backgroundColor: "white" }}
					>
						White
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default App;
