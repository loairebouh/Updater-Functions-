import { useState } from "react";

function MyComponent() {
	const [food, setFood] = useState(["bannana", "burger", "oats", "eggs"]);
	function handleAddFood() {
		const newFood = document.getElementById("foodInput").value;
		document.getElementById("foodInput").value = "";
		setFood((f) => [...f, newFood]);
	}
	function handleRemoveFood(index) {
		setFood(food.filter((_, i) => i !== index));
	}
	return (
		<div>
			<h2>List of Food</h2>
			<ul>
				{food.map((food, index) => (
					<li key={index} onClick={() => handleRemoveFood(index)}>
						{food}
					</li>
				))}
			</ul>
			<input type="text" id="foodInput" placeholder="Enter food name"></input>
			<button onClick={handleAddFood}>Add Food </button>
		</div>
	);
}
export default MyComponent;
