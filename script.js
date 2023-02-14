




const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const ul = document.querySelector(".list")
const h4 = document.querySelector(".text-end")


input.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key === "Enter") {
        task()
    }
})



function task() {
    if (input.value === "" )    {
        h4.innerHTML = "404"
        h4.style.justifyContent = "center"
        h4.style.display = "flex"
        h4.style.fontSize = "40px"
        li.innerHTML = ""
    } else {
        h4.innerHTML = ""
    }
    ul.innerHTML += `<li class="list-group-item d-flex align-items-end justify-content-between mb-1">
    <span>
    <input type="checkbox" class="check">
    ${input.value}
    </span>
    <button class="del-btn btn btn-danger">Delete</button>
    </li>`
    input.value = ""
    h4.innerHTML = ""
}

btn.addEventListener("click", () => {
    task()
})

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("check")) {
        if (e.target.parentNode.classList.contains("line")) {
            e.target.parentNode.classList.remove("line")
        } else {
            e.target.parentNode.classList.add("line")
        }
    }
})
    