const today=document.querySelector(".day");

function GetDay(){
    const date=new Date();

    let weeks=['월','화','수','목','금','토','일'];

    const year=date.getFullYear();
    const month=String(date.getMonth()+1).padStart(2,"0");
    const day=String(date.getDate()).padStart(2,"0");
    const weekday=weeks[Math.floor(Math.random()) * weeks.length];

    today.innerHTML=`${year}년 ${month}월 ${day}일 (${weekday})`;
}

GetDay();

setInterval(GetDay,1000);