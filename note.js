var text=document.querySelector('#text'),
file=document.querySelector('#file')
btn=document.querySelector('#btn'),
select=document.querySelector('#select');









btn.addEventListener("click",()=>{

const blob=new Blob([text.value],{type:select.value});
//URL.createURL creates a url that represent passed object
const FileUrl=URL.createObjectURL(blob);
const link=document.createElement("a");//creating <a> tag
link.download=file.value;//passig filename as download
link.href=FileUrl;//passing fileUrl as href value of link
link.click();//clicking link so the file download
text.value="";
select.value="select";
file.value="";
});
