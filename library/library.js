document.addEventListener("DOMContentLoaded",function(){
const mybutton=document.getElementById("button");
 const preview=document.getElementById("preview");
mybutton.addEventListener("click",function(){
   const para=document.createElement("p");
   para.textContent="Hello";
   para.classList.add('highlight');
   const line=document.createElement('br');
   const title=document.getElementById("title").value;
   const author=document.getElementById("author").value;
   const pages=document.getElementById("pages").value;
  if(document.getElementById("read").checked){
   para.append(title);
   para.append(line);
   para.append(author);
  }
  else{
    para.append(title,"\n"+author,"\n",pages,"\n"+"Not Read")
  }
  preview.append(para);
  preview.append(line);
})
})