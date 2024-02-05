swk = document.getElementById("spalva")
color = ["red", "green", "blue"]

function sw (){
    rand = Math.floor(Math.random() * color.length)
    swk.style.color = color[rand]
}
swk.addEventListener("click", sw)
console.log("sw")