const navRight = document.querySelector(".nav-right");
console.log(navRight);
const list = document.querySelector(".icon");
console.log(list);
list.addEventListener("click", ()=>{
    console.log(navRight.classList);
    navRight.classList.toggle("active");
});