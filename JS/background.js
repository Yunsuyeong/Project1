const backgrounds=[
    "background1.jpg", "background2.jpg"
];

const currentImage=backgrounds[Math.floor(Math.random()*backgrounds.length)];

const background=document.createElement("img");

background.src=`img/${currentImage}`;

document.body.appendChild(background);