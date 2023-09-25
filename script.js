// console.log('hii');
 let btn=document.querySelector(".btn");
  let Name=document.querySelector("#name");
  let address=document.querySelector("#address");
  let TenthPerage=document.querySelector("#TenthPerage");
  let  twethPerage=document.querySelector('#twethPerage')

let Mobilenumber=document.querySelector('#Mobilenumber')
  // var tabLE=document.getElementsByTagName("table")
  var Table_row=document.querySelector(".Table-row")
  // console.log(tabLE)

btn.addEventListener("click",function(){

  let CreateTable=` <td>${Name.value}</td>
  <td>${address.value}</td>
  <td>${TenthPerage.value}</td>
  <td>${twethPerage.value}</td>
  <td>${Mobilenumber.value}</td>
`

Table_row.innerHTML=CreateTable
  

})