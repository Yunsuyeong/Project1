const ScheduleForm=document.querySelector("#schedule-form");
const ScheduleList=document.querySelector("#schedule-list");
const ScheduleInput=document.querySelector("#schedule-form input");

const SCHEDULE="Schedule";

let Scheduled=[];

function SaveSchedule(){
    localStorage.setItem(SCHEDULE,JSON.stringify(Scheduled));
}

function DeleteSchedule(event){
    const li=event.target.parentElement;
    li.remove();
    Scheduled=Scheduled.filter(Schedule => Schedule.id !== parseInt(li.id));
    SaveSchedule();
}

function PaintSchedule(newSchedule){
    const li=document.createElement("li");
    li.id=newSchedule.id;
    const span=document.createElement("span");
    span.innerText=newSchedule.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",DeleteSchedule);
    li.appendChild(span);
    li.appendChild(button);
    ScheduleList.appendChild(li);
}

function ScheduleSubmit(event){
    event.preventDefault();
    const newSchedule=ScheduleInput.value;
    ScheduleInput.value="";
    const newScheduleOBJ={
        id:Date.now(),
        text:newSchedule,
    };
    Scheduled.push(newScheduleOBJ);
    PaintSchedule(newScheduleOBJ);
    SaveSchedule();
}

ScheduleForm.addEventListener("submit", ScheduleSubmit);

const SavedSchedule=localStorage.getItem(SCHEDULE);

if(SavedSchedule !== null){
    const ParsedSchedule=JSON.parse(SavedSchedule);
    Scheduled=ParsedSchedule;
    ParsedSchedule.forEach(PaintSchedule);
}