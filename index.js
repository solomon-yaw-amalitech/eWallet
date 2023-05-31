"use strict";

document.querySelector("#ewallet-form").addEventListener("submit",function(event){

    event.preventDefault();// Prevent page from reloading 

const type = document.querySelector(".add__type").value;
const description = document.querySelector(".add__description").value;
const moneyValue = document.querySelector(".add__value").value;

const htmlItems = `<div class="item">
<div class="item-description-time">
  <div class="item-description">
    <p>${description}</p>
  </div>
  <div class="item-time">
    <p>25 Feb, 06:45 PM</p>
  </div>
</div>
<div class="item-amount expense-amount">
  <p>${type}$${moneyValue}</p>
</div>
</div>`;

const collection = document.querySelector(".collection");
collection.insertAdjacentHTML("afterbegin",htmlItems); //The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. 


});

