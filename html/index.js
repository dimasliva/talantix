const city = document.getElementById('city');
const brigade = document.getElementById('brigade');
const shop = document.getElementById('shop');
const employee = document.getElementById('employee');
const hour = new Date().getHours()

const firstShopHide = shop.querySelector("option[value='first']"),
secondShopHide = shop.querySelector("option[value='second']")

const firstEmployeeHide = employee.querySelector("option[value='first']"),
secondEmployeeHide = employee.querySelector("option[value='second']")

const firstCityHide = city.querySelector("option[value='first']"),
secondCityHide = city.querySelector("option[value='second']")

if(hour >= 8 && hour < 20) {
    brigade.remove(2)
} else {
    brigade.remove(1)
}
city.onchange = (event) => {
    if(city.value !== 'null') {
        firstShopHide.style.display = 'none'
        secondShopHide.style.display = 'none'     
    } else {
        firstShopHide.style.display = 'block'
        secondShopHide.style.display = 'block'   
    }
 }
 shop.onchange = (event) => {
    if(shop.value !== 'null') {
        firstEmployeeHide.style.display = 'none'
        secondEmployeeHide.style.display = 'none'     
    } else {
        firstEmployeeHide.style.display = 'block'
        secondEmployeeHide.style.display = 'block'   
    }
 }
 employee.onchange = (event) => {
    if(employee.value !== 'null') {
        firstCityHide.style.display = 'none'
        secondCityHide.style.display = 'none'     
    } else {
        firstCityHide.style.display = 'block'
        secondCityHide.style.display = 'block'   
    }
 }