/*const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuitem");
menuItems.forEach((item,index) =>{
item.addEventListener("click",()=>{
console.log("you clicked" +index);
});
});*/
/*let greet=function(){
    console.log("hello world");
    return 1;
    
}
console.log(greet());
let sum=function(n1,n2){
    return n1+n2
}
console.log(sum(2,3));
let mul=(a,b)=>{
    console.log("i am in arrow function");
    return a*b;
}
console.log(mul(10,9));*/
let menu=document.querySelectorAll(".menuitem");
menu.forEach((item,index)=>{
    console.log("you touched"+item);
});
