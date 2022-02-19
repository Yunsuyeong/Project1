const todaytime=document.querySelector(".time");

function GetTime(){
    const date=new Date();

    const hours=date.getHours();
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");

    if(Number(hours)>=0 && Number(hours)<12){
        todaytime.innerHTML=`${hours}:${minutes}:${seconds} AM`;
    } else{
        todaytime.innerHTML=`${hours-12}:${minutes}:${seconds}  PM`;
    }
}

GetTime();

setInterval(GetTime,1000);