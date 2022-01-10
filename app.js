var hamburger_menu


// var toogle_btn = document.querySelector(".toogle_btn");
// var big_wrapper = document.querySelector(".big_wrapper");
// const main = document.querySelector("main");

function declare(){
    hamburger_menu = document.querySelector(".hamburger_menu")
    toogle_btn = document.querySelector(".toogle_btn");
    big_wrapper = document.querySelector(".big_wrapper");
}

// let dark = false;

// function toogleAnimation() {
//     dark = !dark;
//     let clone = big_wrapper.cloneNode(true);
//     if (dark){
//         clone.classList.remove("light");
//         clone.classList.add("dark");
//     }

//     else{
//         clone.classList.remove("dark");
//         clone.classList.add("light");
//     }
//     main.appendChild(clone);
// }
// toogle_btn.addEventListener("click", toogleAnimation);

function events() {
    hamburger_menu.addEventListerner("click", () => {big_wrapper.classList.toogle("active");});
}

events();