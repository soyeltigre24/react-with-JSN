import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export function Home() {
	const [todoList, setTodoList] = useState([]);
	const getTodos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/JairoAriza")
			.then(response => response.json())
			.then(res => setTodoList(res));
	};
	useEffect(() => {
		getTodos();
	}, []);
	console.log(todoList);
	return (
		<div className="card bg-danger text-center mt-5">
			{todoList.map((item, index) => (
				<p key={index}>{item.label}</p>
			))}
		</div>
	);
}
