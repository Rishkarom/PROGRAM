console.log("Hello World");
import "./styles.css";
import { para } from "./home.js";
import { para2 } from "./menu.js";
import { para3 } from "./contact.js";
para.id="para";
para2.id="para2";
para3.id="para3";
const content=document.getElementById("content");
const homebtn=document.getElementById("home");
const menubtn=document.getElementById("menu");
const contactbtn=document.getElementById("contact");
window.onload=function(){
    homebtn.click();
}
homebtn.addEventListener("click",function(){
     content.innerHTML="";
content.append(para);
})
menubtn.addEventListener("click",function(){
    content.innerHTML="";
content.append(para2);
})

contactbtn.addEventListener("click",function(){
     content.innerHTML="";
content.append(para3);
})


