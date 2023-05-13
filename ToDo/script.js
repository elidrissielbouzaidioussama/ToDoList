const inputBox = document.getElementById("input-box");
const listContuner = document.getElementById("list-container");
function addTask(){
    if(inputBox.value==''){
        alert("you must write somthing");
        alert.classList.toggle("alert");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML =inputBox.value;
        listContuner.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData()
}
listContuner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false
);
function saveData(){
    localStorage.setItem("data",listContuner.innerHTML);
}
function showTask(){
    listContuner.innerHTML=localStorage.getItem("data");
}
showTask();