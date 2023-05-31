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

//fuction that adds items to the collection
function addItem(type,description,moneyValue)
{
    const htmlItems = `<div class="item">
<div class="item-description-time">
  <div class="item-description">
    <p>${description}</p>
  </div>
  <div class="item-time">
    <p>${getFrmattedTime()}</p>
  </div>
</div>
<div class=1item-amount ">
<div class="item-amount ${type === "+" ? "income-amount":"expense-amount"} ">
  <p>${type}$${moneyValue}</p>
</div>
</div>`;

const collection = document.querySelector(".collection");
collection.insertAdjacentHTML("afterbegin",htmlItems); //The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. 

}


//reset form function
function resetForm(){

    document.querySelector(".add__type").value ="+";
     document.querySelector(".add__description").value="";
     document.querySelector(".add__value").value="";
}

