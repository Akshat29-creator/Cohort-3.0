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
  const spanEl=document.createElement("div");
  const buttonEl=document.createElement("button")
  spanEl.innerHTML= value;
  buttonEl.innerHTML= "Delete";

  const newDivEl=document.createElement("div");
  newDivEl.setAttribute("id",ctr );

  document.querySelector("body").appendChild(spanEl);
  document.querySelector("body").appendChild(buttonEl);
  ctr++;
  
}
