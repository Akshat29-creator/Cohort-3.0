ctr=1
function deleteTodo(index){
  const element=document.getElementById(index);
  if (element){
    element.parentNode.removeChild(element);
  }
}
function addTodo(){
  const inputEl= document.getElementById("input");
  const value= inputEl.value.trim();

  if (value === "") {
    alert("Please enter a todo before adding!");
    return;
  }
  const newDivEl=document.createElement("div");
  newDivEl.setAttribute("id",ctr );

  newDivEl.innerHTML=`<div>${ctr}.${value}</div><button onclick="deleteTodo(${ctr})">delete</button>`;
  document.getElementById("todos").appendChild(newDivEl);
  ctr++;
  
}