// console.log('hello')
// const myConstVar = 5


// let foo = 93
// console.log(foo)

// foo = "my string"
// console.log(foo)

// let foodArray = ["pizza","pasta","salad"]
//     console.log(foodArray)

//     let foodItem = foodArray[1]
//     console.log("foodItem:", foodItem)

//     let objectVariable ={
//         key: 'value' ,
//         foods: foodArray
//     }
//     console.log(objectVariable)
//     let foods = objectVariable ['foods']
//     console.log('foods:',foods)
//     function AddTwoNumbers(num1,num2){
//         let sum = num1 +num2
//         return sum
//     }

//     let mySum = AddTwoNumbers(6,7)
//     console.log("mySum:",mySum)

    console.log("document:",document)

let breakfastElement = document.getElementById("breakfast")
console.log(breakfastElement)

function breakfastClicked(){
    console.log('breakfast element was clicked')
    let breakfastFoodsDiv = document.getElementById('breakfastFoods')
    breakfastFoodsDiv.style.display = 'flex'
    let lunchFoodsDiv = document.getElementById('lunchFoods')
    lunchFoodsDiv.style.display = 'none'
}
function LunchClicked(){
    console.log('breakfast element was clicked')
    let breakfastFoodsDiv = document.getElementById('breakfastFoods')
    breakfastFoodsDiv.style.display = 'none'
    let lunchFoodsDiv = document.getElementById('lunchFoods')
    lunchFoodsDiv.style.display = 'flex'
}
breakfastElement.addEventListener("click",() =>breakfastClicked())

let LunchElement = document.getElementById('lunch')
LunchElement.addEventListener("click",()=>LunchClicked())

//making small comment
