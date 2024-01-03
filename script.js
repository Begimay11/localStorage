const createMenu = document.querySelector('.createMenu')
const menublock1 = document.querySelector('.menu-block1')
const menuBlocks = document.querySelector('.menu-block')
const imgFood = document.querySelector('.img')
const foodName = document.querySelector('.food-name')
const price = document.querySelector('.price')
const list = document.querySelector('.list')
const blocks = document.querySelector('.blocks')
const listBlock = document.createElement('div')
const arrList = document.querySelector('.arrList')
const images = document.querySelector('.images')
const orderBtn = document.querySelector('.orderBtn')
const foodNameList = document.querySelector('.foodName')
const newList = document.querySelector('.newList')

let arr = []
const addMenu = ()=> {
     let addList = {
        imgFood: imgFood.value,
        foodName: foodName.value,
        price: price.value
    }

    let arr = JSON.parse(localStorage.getItem('local')) || []
    arr.push(addList)
    localStorage.setItem('local',JSON.stringify(arr))
    getData()


    function getData(){
        let newList = document.createElement('div')
        newList = JSON.parse(localStorage.getItem('local')) || []
        newList.className = 'newList'
        newList.forEach(el => {
            list.innerHTML += `<img class='images' src='${el.imgFood}'/> <h2 class='foodName'>${el.foodName}</h2>  <h3>${el.price}$</h3> <button class='orderBtn'>to order</button>`
        });
    }
}
createMenu.addEventListener('click',()=> {
    addMenu()
    menublock1.style.display = 'block'
    menuBlocks.style.display = 'none'
})
// newLists.addEventListener('click',()=> {
//     menublock1.style.display = 'none'
//     menuBlocks.style.display = 'block'
// })
