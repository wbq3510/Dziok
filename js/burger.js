const burger1 = document.querySelector(".burger");
const menu = document.querySelector("aside");

burger1.addEventListener("click", function()  {
    menu.classList.toggle("active_burger");

})

const portfolio = document.querySelector(".portfolio");
const hidePortfolio = document.querySelector(".hidePortfolio");


portfolio.addEventListener("click", function(){
hidePortfolio.classList.toggle("showPortfolio");
})
