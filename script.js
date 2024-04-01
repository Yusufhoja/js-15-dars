// let a=document.getElementById("example");
// let b=Math.round(Math.random()*99+1);
// a.textContent=b;

// if(b>50){
//     b.style.color="red";
// }
// else{
//     b.style.color="blue";
// };



let text =document.getElementById ('text')
let a =Math.round(Math.random() * 99 + 1)
text.textContent = a;
if(a>50){
    text.style.color="red"
}
else if (a<50){
    text.style.color="blue"
}