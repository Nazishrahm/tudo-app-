const taskinput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");
 
// task input save btn 

 addbtn.addEventListener("click", addtask);

// task adding 

 function addtask() {
const text = taskinput.value;
if (text === "") return;

const li = document.createElement("li");
    li.className = " flex justify-between items-center bg-gray-50 px-3 py-2 rounded";

    li.innerHTML = ` <span>${text}</span> 

    

<button class = "text-yellow-500 font-bolded" id = "edit">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
</button>

<button class = "text-red-500 font-bold" id = "delete">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
</svg>
</button>


<button class = "text-green-500 font-bolded" id = "complete"> 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg>
</button>

`;
// edit portion

li.querySelector("#edit").addEventListener("click" , () => {
  const span = li.querySelector("span");
  const editbtn = li.querySelector("#edit");
const deletebtn = li.querySelector("#delete");
const completebtn = li.querySelector("#complete");

// hide buttons

editbtn.style.display = "none";
deletebtn.style.display = "none";
completebtn.style.display = "none";

// create input

const input = document.createElement("input");
   input.type ="text";
   input.value = span.innerText;
   input.className ="border px-2 py-1 rounded flex-1 ";
   
//    replace span with input
   li.replaceChild(input , span);
   input.focus();

//    create save btn
;  const savebtn = document.createElement("button");
savebtn.innerText = "Save";
savebtn.className = "bg-blue-500 text-white px-2 py-1 rounded ml-2";
    
li.appendChild(savebtn);

// save logic 

savebtn.addEventListener("click" , () => {
    const newtext = input.value.trim();
    if (newtext !== ""){
        span.textContent = newtext;
    }

    // replace input back with span

li.replaceChild(span,input);

// remove savebtn

savebtn.remove();

 editbtn.style.display = "";
    deletebtn.style.display = "";
    completebtn.style.display = "";


})


});

// delete btn 

li.querySelector("#delete").addEventListener("click" , () => {
    li.remove();
});

// complete btn

li.querySelector("#complete").addEventListener("click" , () => {
    li.classList.toggle("line-through");
     li.classList.toggle("opacity-60");
});

 tasklist.appendChild(li);
 taskinput.value = "";
 }









