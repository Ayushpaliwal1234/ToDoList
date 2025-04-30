let inputbox = document.querySelector("#input-box");
let click_button = document.querySelector(".button");
let addList = document.querySelector("#toDoListPara");

const addToDO =() =>{
    // console.log(inputbox.value);
    // addWork.innerText =inputbox.value;
    let pElm = document.createElement("p");
    pElm.textContent = inputbox.value;
    console.log(pElm);
    addList.append(pElm);
    inputbox.value = " ";   
}

click_button.addEventListener("click", () =>{
    addToDO();
});

addList.addEventListener("click" , (event) =>{
    console.log(event.target);  
    let currClick = event.target;
    currClick.remove();
}) 