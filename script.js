// console.log('hii');
let btn = document.querySelector(".btn");
let Name = document.querySelector("#name");
let address = document.querySelector("#address");
let TenthPerage = document.querySelector("#TenthPerage");
let twethPerage = document.querySelector('#twethPerage')
let form1 = document.querySelector('#from1')
let Mobilenumber = document.querySelector('#Mobilenumber')
// var tabLE=document.getElementsByTagName("table")
var Table_row = document.querySelector("table")
// console.log(tabLE)

btn.addEventListener("click", function (e) {
  e.preventDefault();


  let CreateTable =`
  
  <tr>
  <td>${Name.value}</td>
  <td>${address.value}</td>
  <td>${TenthPerage.value}</td>
  <td>${twethPerage.value}</td>
  <td>${Mobilenumber.value}</td>
  </tr>`

  Table_row.innerHTML = Table_row.innerHTML + CreateTable;


  console.log("jjjj")


})
