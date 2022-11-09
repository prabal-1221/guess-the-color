color =[
    [
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1
    ],
    [
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1
    ],
    [
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1
    ],
    [
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1
    ],
    [
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1
    ],
    [
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1,
        Math.floor(Math.random()*255)+1
    ]
]


boxes = document.getElementsByClassName("box")
for (let i=0; i<boxes.length; i++) {
    strColor = "rgb("+color[i][0]+","+color[i][1]+","+color[i][2]+")";
    boxes[i].style.backgroundColor = strColor;
}

wci = Math.floor(Math.random()*5)+1;
wstrColor = "rgb("+color[wci][0]+","+color[wci][1]+","+color[wci][2]+")";

pickedColor = document.getElementById("colorPicked")
pickedColor.innerText = wstrColor

for (let i=0; i<boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        resultmsg = document.getElementsByClassName("resultmsg")
        if (i == wci) {
            resultmsg[0].classList.add("win");
            resultmsg[0].innerText = "You Won the Game"
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }
        else {
            resultmsg[0].classList.add("lose");
            resultmsg[0].innerText = "You Lost the Game"
            setTimeout(()=>{
                window.location.reload()
            },1000)
        }
    })
}