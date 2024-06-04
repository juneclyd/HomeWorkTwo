const input = document.querySelector(".text");
const button = document.querySelector(".add");
const container = document.querySelector(".container");
let checkbox = "";
let p = ""
let number = 0;

button.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value != "") {
        container.insertAdjacentHTML("beforeend",`<div class="task">
                                                    <input class="checkbox" value = "${number}" type="checkbox"> 
                                                    <p class="taskText">${number+1}. ${input.value}</p>
                                                  </div>`);
        checkbox = document.querySelectorAll(".checkbox");
        p = document.querySelectorAll(".taskText")
        number++;
    }
    input.value = "";
})

container.addEventListener("click", (event) => {
    console.log(checkbox)
    console.log(p)
    console.log(event.target.value)
    console.log(event.target == checkbox[event.target.value])
    if(event.target == checkbox[event.target.value]) {
        if (checkbox[event.target.value].checked) {
            p[event.target.value].style.textDecoration = "line-through";
        } else {
            p[event.target.value].style.textDecoration = "none";
        }
    }
})




