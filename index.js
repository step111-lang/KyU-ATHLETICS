
const navbar=document.querySelector(".navbar");
const del=document.querySelector(".del");
const tt=document.querySelector(".tt");
const add=document.querySelector(".add");
const inp=document.getElementById("inp").value.toLowerCase();
const long=document.querySelector(".long");
const longc=document.querySelector(".longc");
const short=document.querySelector(".short");
const ext=document.querySelector(".ext");
const sendbtn=document.querySelector(".sendbtn");

var log=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"kennedy pitter",
 time:"3:50"
},
{
position:"2",
 relay:"long",
 name:"jammy nat",
 time:"3:50"
},
{
 position:"3",
 name:"peter",
 time:"3:50"
}
,
{
 position:"3",
 name:"Timothy brian",
 time:"3:50"
},
{
 position:"4",
 name:"alfred janes",
 time:"3:50"
},
{
position:"6",
 relay:"long",
 name:"lucus joc",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
}
];
var shot=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
}
];
var relay=[
 {
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"Stephen",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"2",
 name:"james kuria",
 time:"3:50"
},
{
 position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
},
{
 position:"1",
 name:"james",
 time:"3:50"
},
{
position:"1",
 relay:"long",
 name:"james",
 time:"3:50"
}];
function guko(arr){
let update="";
for(let i=0;i<arr.length;i++){
  update+=`   
    <div class="cont">
       <div class="position">${arr[i].position}</div> <div class="Name">${arr[i].name}</div><div class="time">${arr[i].time}</div>
    </div>
         `;
 }
return update;
}
document.querySelector(".longc").innerHTML=`${guko(log)}`;
document.querySelector(".shortc").innerHTML=`${guko(shot)}`;
document.querySelector(".relayc").innerHTML=`${guko(relay)}`;
function jump(){
var inp=document.getElementById("inp").value.toLowerCase();
var tok=document.getElementById("paret");
var cont=tok.getElementsByClassName("Name");
for(let i=0;i<cont.length;i++){
if(cont[i].innerHTML.toLowerCase().indexOf(inp) > -1){
   cont[i].parentNode.style.display="";
 }else{
cont[i].parentNode.style.display="none";
}
 }
}

del.addEventListener("click",()=>{
 navbar.style.width="0";
});
add.addEventListener("click",()=>{
 navbar.style.width="200px";
});
