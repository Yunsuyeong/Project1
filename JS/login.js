const LoginForm=document.querySelector("#login-form");
const LoginInput=document.querySelector("#login-form input");
const Greeting=document.querySelector("#greeting");

const USERNAME="UserName";

function LoginSubmit(event){
    event.preventDefault();
    LoginForm.classList.add("hidden");
    localStorage.setItem(USERNAME, LoginInput.value);
    PaintLogin();
}

function PaintLogin(){
    const Username=localStorage.getItem(USERNAME);
    Greeting.innerText=`Hi, ${Username} !`;
    Greeting.classList.remove("hidden");
}

const savedUserName=localStorage.getItem(USERNAME);

if(savedUserName === null){
    LoginForm.classList.remove("hidden");
    LoginForm.addEventListener("submit",LoginSubmit);
} else{
    PaintLogin();
}

