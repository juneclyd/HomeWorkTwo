const a = document.querySelector(".link")
let value = false;


a.addEventListener("mousedown", () => a.style.color = "blue")
a.addEventListener("mouseover", () => {
    a.style.color = "green" 
    a.style.textDecoration = "underline"
})
a.addEventListener("mouseout", () => {
    a.style.color = "black"
    a.style.textDecoration = "none" 
})
a.addEventListener("click", (e) => {
    a.style.color = "gray"
})



