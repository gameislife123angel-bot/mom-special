/* TYPEWRITER MESSAGE */

const message = `

Mom...

You are the reason
I learned what love feels like.

Every success I achieve
will always belong to you too.

Thank you for believing in me
when nobody else did.

You are my first home,
my safest place,
and my forever hero.

Happy Birthday ❤️
Happy Mother's Day 🌸

`;

const typewriter =
document.getElementById("typewriter");

let i = 0;

function typing(){

  if(i < message.length){

    typewriter.innerHTML +=
    message.charAt(i);

    i++;

    setTimeout(typing,40);
  }

}

typing();

/* SURPRISE BUTTON */

const button =
document.getElementById("loveBtn");

button.addEventListener("click",()=>{

  document
  .getElementById("hiddenMessage")
  .classList.add("show");

  /* REMOVE MADE BY TEXT */
  document
  .getElementById("madeBy")
  .style.display = "none";

  createHearts();

});

/* FLOATING HEARTS */

function createHearts(){

  for(let i=0;i<35;i++){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.animationDuration =
    (Math.random()*3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },6000);

  }

}

/* STARRY SKY */

const canvas =
document.getElementById("stars");

const ctx =
canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<250;i++){

  stars.push({

    x:Math.random()*canvas.width,

    y:Math.random()*canvas.height,

    radius:Math.random()*2,

    speed:Math.random()*0.5

  });

}

function animateStars(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "white";

  stars.forEach((star)=>{

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.radius,
      0,
      Math.PI*2
    );

    ctx.fill();

    star.y += star.speed;

    if(star.y > canvas.height){
      star.y = 0;
    }

  });

  requestAnimationFrame(
    animateStars
  );

}

animateStars();

/* RESPONSIVE CANVAS */

window.addEventListener(
  "resize",
  ()=>{

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

  }
);
