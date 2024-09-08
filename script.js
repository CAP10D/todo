
const inputbox = document.querySelector('.inputbox');  // Select input element
const listtodo = document.querySelector('.list-todo'); // Select ul element

const button = document.querySelector('button');

// Function to add a task
function addtask() {
    if (inputbox.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listtodo.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML='\u00d7';
        li.appendChild(span)
        savedata()
      
    }
    inputbox.value = "";  // Reset the input value
}

// Click event for button
button.addEventListener("click", addtask);

// Keydown event for inputbox to trigger addtask when 'Enter' key is pressed
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Check if the 'Enter' key was pressed
        addtask();
    }
    
});

listtodo.addEventListener('click',function (e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("list1")
        savedata()
       
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
        
    }
},false)
function savedata() {
    localStorage.setItem("data",listtodo.innerHTML)
}
function getdata(){
    listtodo.innerHTML=localStorage.getItem("data")
}

getdata()