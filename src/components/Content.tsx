import React, { useState } from "react";
type none = {
	handleClick: (e: React.ChangeEventHandler) => {};
	i: number;
};

type likes =  boolean;

const Content: React.FC<none> = () => {
	const [like, setLike] = useState<likes>(true);
 const toggled = ()=>{
	 setLike(!like);
 }


	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		let body = document.querySelector("body") as HTMLElement;
		 

		body.style.background = getRandomColor();
		toggled()
		console.log(getRandomColor());
	};

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";

		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	return (
		<div>
			<h1 className="text-xl lg:text-5xl font-bold text-blue-400 my-10">
				{like ? "RANDOM TEXT GENERATION ": "pop it in___"}
			</h1>
			<div className="flex justify-center align-middle gap-8">
				<button
					className="rounded-full px-3 py-2 text-white text-lg bg-orange-400"
					onClick={(e) => handleClick(e)}
				>
					{" "}
					change A
				</button>
				<button
					className="rounded-full px-3 py-2 text-white text-lg bg-purple-400"
					onClick={handleClick}
				>
					{" "}
					change B
				</button>
				<button
					className="rounded-full px-3 py-2 text-white text-lg bg-orange-400"
					onClick={handleClick}
				>
					{" "}
					change c
				</button>
				<button
					className="rounded-full px-3 py-2 text-white text-lg bg-purple-400"
					onClick={handleClick}
				>
					{" "}
					change d
				</button>
			</div>
		</div>
	);
};

export default Content;
