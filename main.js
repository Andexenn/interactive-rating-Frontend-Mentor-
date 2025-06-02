const ratingPointList = document.querySelectorAll("li");
const firstBGColor = "hsla(217, 12%, 63%, 0.1)";
const secondBGColor = "hsl(0, 100%, 100%)";
const button = document.querySelector(".btn");
let selectedPoint = -1;

for(let i = 0; i < ratingPointList.length; ++i){
    const currPoint = ratingPointList[i];
    currPoint.addEventListener("click", () =>{
        if(currPoint.style.backgroundColor === firstBGColor){
            currPoint.style.backgroundColor = secondBGColor;
            if(selectedPoint !== -1){
                ratingPointList[selectedPoint].style.backgroundColor = firstBGColor;
            }
            selectedPoint = i;
        }
        else{
            currPoint.style.backgroundColor = firstBGColor;
            selectedPoint = -1;
        }
    })
}

button.addEventListener("click", () =>{
    if(selectedPoint !== -1){
        //? them bo the active
        //? lay diem de qua ben the thank you 
    }
})

