const todoList = document.querySelector("#todo-list");

const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", function (e) {
	e.preventDefault();

	const todoName = document.querySelector("#add-todo-name");
	const todoDesc = document.querySelector("textarea");

	if (todoName.value === "" || todoDesc.value === "") return;

	createItem(todoName.value, todoDesc.value);
});

function createItem(n, d) {
	const div = document.createElement("div");
	const h4 = document.createElement("h4");
	const p = document.createElement("p");
	const del = document.createElement("button");

	h4.textContent = `Name: ${n}`;
	p.textContent = `Description: ${d}`;
	del.textContent = "Delete todo";

	if (!todoList.lastChild) {
		del.id = "todo-btn-1";
		div.id = "todo-1";
	} else {
		del.id = `todo-btn-${parseInt(todoList.lastChild.id.split("-")[1]) + 1}`;
		div.id = `todo-${parseInt(todoList.lastChild.id.split("-")[1]) + 1}`;
	}

	del.addEventListener("click", function (e) {
		let id = e.target.id;
		id = parseInt(id.split("-")[2]);

		const delTodoDiv = document.querySelector(`#todo-${id}`);
		delTodoDiv.parentNode.removeChild(delTodoDiv);

		if (!todoList.lastChild) document.querySelector("#no-todos").style.display = "block";
	});

	div.appendChild(h4);
	div.appendChild(p);
	div.appendChild(del);

	todoList.appendChild(div);

	document.querySelector("#no-todos").style.display = "none";
}
