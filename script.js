// Study Tips
function showTip(){
let tips = [
"Study in small focused sessions.",
"Revise your notes daily.",
"Practice active recall.",
"Take short breaks while studying."
];

let randomTip = tips[Math.floor(Math.random()*tips.length)];

document.getElementById("tip").innerText = randomTip;
}


// Task List
function addTask(){
let taskInput = document.getElementById("taskInput");
let task = taskInput.value;

let li = document.createElement("li");
li.innerText = task;

document.getElementById("taskList").appendChild(li);

taskInput.value = "";
}


// Pomodoro Timer
let time = 1500;

function startTimer(){

let timer = setInterval(function(){

let minutes = Math.floor(time/60);
let seconds = time%60;

document.getElementById("timer").innerText =
minutes + ":" + (seconds < 10 ? "0"+seconds : seconds);

time--;

if(time < 0){
clearInterval(timer);
alert("Study session complete! Take a break.");
}

},1000);

}