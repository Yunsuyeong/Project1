const TodoForm=document.querySelector("#todo-form");
const TodoList=document.querySelector("#todo-list");
const TodoInput=document.querySelector("#todo-form input");

const TODO="Todo";

let Todosed=[];

function SaveTodo(){
    localStorage.setItem(TODO,JSON.stringify(Todosed));
}

function DeleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
    Todosed=Todosed.filter(Todo => Todo.id !== parseInt(li.id));
    SaveTodo();
}

function PaintTodo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",DeleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);
}

function TodoSubmit(event){
    event.preventDefault();
    const newTodo=TodoInput.value;
    TodoInput.value="";
    const newTodoOBJ={
        id:Date.now(),
        text:newTodo,
    };
    Todosed.push(newTodoOBJ);
    PaintTodo(newTodoOBJ);
    SaveTodo();
}

TodoForm.addEventListener("submit", TodoSubmit);

const SavedTodo=localStorage.getItem(TODO);

if(SavedTodo !== null){
    const ParsedTodo=JSON.parse(SavedTodo);
    Todosed=ParsedTodo;
    ParsedTodo.forEach(PaintTodo);
}