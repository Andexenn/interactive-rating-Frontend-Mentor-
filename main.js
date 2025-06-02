const ratingPointList = document.querySelectorAll("li");
const firstBGColor = "hsla(217, 12%, 63%, 0.1)";
const secondBGColor = "hsl(0, 100%, 100%)";
const button = document.querySelector(".btn");
const container = document.querySelectorAll(".container");
const point = document.querySelector(".point");
let selectedPoint = -1;
// console.log(ratingPointList);

for(let i = 0; i < ratingPointList.length; ++i){
    const currPoint = ratingPointList[i];
    currPoint.addEventListener("click", () =>{
        if(selectedPoint === -1){
            selectedPoint = i;
            currPoint.classList.add("active");
        }
        else{
            ratingPointList[selectedPoint].classList.remove("active");
            currPoint.classList.add("active");
            selectedPoint = i;
        }
    })
}

button.addEventListener("click", () =>{
    if(selectedPoint !== -1){
        //? them bo the active
        container[0].classList.remove("active");
        container[1].classList.add("active");
        point.textContent = `${selectedPoint + 1}`;
        //? lay diem de qua ben the thank you 
    }
})

