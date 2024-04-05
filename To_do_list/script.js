const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");


function addTask()
{
    if(input.value === "")
    {
        alert("Invalid Task");
    }
    else
    {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        li.innerHTML += "<i class='bx bx-x-circle' ></i>";
    }
    input.value = "";
    saveData();
}

list.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")   
    e.target.classList.toggle("checked");
    else if(e.target.tagName === "I")
        e.target.parentElement.remove();  
    saveData(); 
}, false);


function saveData()
{
    console.log(list.innerHTML);
    localStorage.setItem("to-do-list", list.innerHTML);
}

function showTask()
{
    list.innerHTML = localStorage.getItem("to-do-list");
}

showTask();