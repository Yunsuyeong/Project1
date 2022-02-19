const backgrounds=[
    "background2.jpg"
];

const currentImage=backgrounds[Math.floor(Math.random()*backgrounds.length)];

const background=document.createElement("img");

background.src=`IMG/${currentImage}`;

document.body.appendChild(background);