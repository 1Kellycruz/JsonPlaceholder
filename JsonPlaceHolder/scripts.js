const toDoInputBoxEl = document.getElementById("todoInput")
const sumbitBtnEl = document.getElementById("sumbitBtn")
const messageEl = document.getElementById("message")

// sumbitBtnEl.onclick = onSubmitBtnClicked

// function onSubmitBtnClicked() {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//     .then(response => response.json())
//     .then(todos => {
//         console.log(todos)
//         // document.getElementById("message").innerHTML = data.title
//         document.querySelector('input').value;
//     })
// }

// const todoId = toDoInputBoxEl.value
// console.log(todoId)

sumbitBtnEl.addEventListener('click', () => {
    const todoId = toDoInputBoxEl.value;
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    fetch(url)
        .then(response => response.json())
        .then((todo) => {
            console.log(todo);
            messageEl.innerHTML = todo.title;
        })
});
