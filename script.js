alert("Welcome to the Variables assignment!");

// Variables
let myFavoriteBoba;
boba = "Tapioca Pearls";
console.log(boba);

myFavoriteBoba = "Bubble Milk Tea" + " with" + " Boba" + " and" + " Grass Jelly";
console.log(myFavoriteBoba);

const tea = ["Jasmine", " Green", " Osmanthus Oolong", " Hojicha", " Black"," Taro"];
const typeOfDrink = ["Milk Tea", " Tea"];
const toppings = ["Honey Boba", " Agar Boba", " Grass Jelly", " Egg Pudding", " Lychee Jelly", " Coffee Jelly", " Rainbow Jelly"];
const toppingsCost = 0.75
const iceLevel = ["No Ice", " Less Ice", " Regular Ice", " More Ice"];
const sugarLevel = ["No Sugar", " Less Sugar", " Regular Ice", " More Ice"];
const drinkSize = ["Regular sized", " Large sized", " Chubby cup sized"];
const drinkSizeCost = [5.99, 6.99, 7.99];

let correctOrder = true;
let incorrectOrder = false;

console.log(correctOrder == 1);
console.log(correctOrder == 0);

let myRegularOrder = "A " + drinkSize[1] + " " + tea[0] + " " + typeOfDrink[0] + " with " + toppings[0] + " and " + toppings[2] + ", " + iceLevel[1] + " and " + sugarLevel[1];
console.log(myRegularOrder);
let myRegularOrderCost = ((drinkSizeCost[1] + toppingsCost + toppingsCost));
console.log("My regular order costs " + myRegularOrderCost);

//Document Object Model (DOM)
let text = "boba description here";

document.getElementById("title").innerHTML = "What is Bubble Milk Tea? or Boba?";
document.getElementById("description").innerHTML = "Bubble Milk Tea is a tea-based drink that originated in Taiwan back in the 1980s. Boba refers to the topping of tapioca pearls.";

document.getElementById("common tea title").innerHTML = "Common teas found in milk tea shops include:";
document.getElementById("common tea listing").innerHTML = tea;
document.getElementById("common tea listing").style.color = "green";

document.getElementById("common topping title").innerHTML = "There are other popular toppings in addition to boba such as:";
document.getElementById("common topping listing").innerHTML = toppings;
document.getElementById("common topping listing").style.color = "green";

document.getElementById("drink adjustments").innerHTML = "Your drinks can be customized by drink size, ice level, and sweetness level:";
document.getElementById("ice decription").innerHTML = iceLevel;
document.getElementById("ice decription").style.color = "green";
document.getElementById("sweetness decription").innerHTML = sugarLevel;
document.getElementById("sweetness decription").style.color = "green";
document.getElementById("size decription").innerHTML = drinkSize;
document.getElementById("size decription").style.color = "green";

document.getElementById("drink cost").innerHTML = "The cost of a boba drink varies on the shop you go to. Here are some common price points for drinks";
document.getElementById("drink cost decription").innerHTML = "$" + drinkSizeCost;
document.getElementById("drink cost decription").style.color = "green";
document.getElementById("topping cost decription").innerHTML = "$" + toppingsCost;
document.getElementById("topping cost decription").style.color = "green";

document.getElementById("hilly's order").innerHTML = "My go-to boba description and the total cost is:";
document.getElementById("hilly's order description").innerHTML = myRegularOrder;
document.getElementById("hilly's order description").style.color = "orange";
document.getElementById("hilly's order cost").innerHTML = "$" + myRegularOrderCost;
document.getElementById("hilly's order cost").style.color = "orange";

