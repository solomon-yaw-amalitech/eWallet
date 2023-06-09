"use strict";

function getFrmattedTime()
{
    const datetime = new Date().toLocaleTimeString("en-us",{
        month:"short",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit" ,
    }); // Getting current daytime  

    return datetime;
    
}




//25 Feb, 06:45 PM


document.querySelector("#ewallet-form").addEventListener("submit",function(event){

    event.preventDefault();// Prevent page from reloading 


const type = document.querySelector(".add__type").value;
const description = document.querySelector(".add__description").value;
const moneyValue = document.querySelector(".add__value").value;






if(description.length>0 && moneyValue.length>0)
{
    addItem(type,description,moneyValue);
    resetForm();
}


});

function showItems(){
let items = getItemsFromLocalStorage();
const collection = document.querySelector(".collection");

for(let item of items){
  const htmlItems = `<div class="item">
<div class="item-description-time">
  <div class="item-description">
    <p>${item.description}</p>
  </div>
  <div class="item-time">
    <p>${item.time}</p>
  </div>
</div>
<div class=1item-amount ">
<div class="item-amount ${item.type === "+" ? "income-amount":"expense-amount"} ">
  <p>${item.type}$${item.moneyValue}</p>
</div>
</div>`;

collection.insertAdjacentHTML("afterbegin",htmlItems); //The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

showTotalIncome();
showTotalExpenses();
totalBalance();
}
}

//fuction that adds items to the collection
function addItem(type,description,moneyValue)
{

    const time = getFrmattedTime();
   

addItemToLocalStorage(type,description,moneyValue,time) ;
 showItems();

}

function getItemsFromLocalStorage(){
let items = localStorage.getItem("items");


   if(items)
   {
    items = JSON.parse(items);
   }

   else{
    items = [];
   }
   
   return items;

   
   
}

function addItemToLocalStorage(type,description,moneyValue,time)
{
  let items = getItemsFromLocalStorage();

   items.push({
    description:description,
    time:time,
     type:type,
    moneyValue:moneyValue,

   });

   localStorage.setItem("items",JSON.stringify(items));

}


//reset form function
function resetForm(){

    document.querySelector(".add__type").value ="+";
     document.querySelector(".add__description").value="";
     document.querySelector(".add__value").value="";
}

function showTotalIncome()
{
  let items = getItemsFromLocalStorage();
  let totalIncome =0;
  for(let item of items){
    if( item.type==="+")
    {
    totalIncome+= parseInt(item.moneyValue);
    }
  }
}

function showTotalIncome()
{
  let items = getItemsFromLocalStorage();
  let totalIncome =0;
  for(let item of items){
    
    if( item.type==="+")
    {
    totalIncome += parseInt(item.moneyValue);

    }
  }
   document.querySelector(".income__amount p").innerText = `$${totalIncome}`;

   
}
  

function showTotalExpenses()
{
  let items = getItemsFromLocalStorage();
  let totalExpenses =0;
  for(let item of items){
    if( item.type==="-")
    {
    totalExpenses += parseInt(item.moneyValue);
    }
  }
  console.log(totalExpenses);
  
  document.querySelector(".expense__amount p").innerText= `$${totalExpenses}`;
}

function totalBalance(){
let items = getItemsFromLocalStorage();
let totalBalance = 0;

for(let item of items)
{
  if(item.type === "+")
  {
    totalBalance += parseInt(item.moneyValue );
  }
  else if(item.type === "-")
  {
    totalBalance -= parseInt(item.moneyValue );
  }
  }
document.querySelector(".balance__amount p").innerText = `${totalBalance}`;

}
