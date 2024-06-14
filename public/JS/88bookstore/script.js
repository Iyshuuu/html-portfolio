var popupButton=document.getElementById("add-popup-btn");
var popupOverlay=document.querySelector(".popup-overlay");
var popupBox=document.querySelector(".popup-box");

popupButton.addEventListener('click',function(){
    popupOverlay.style.display="block";
    popupBox.style.display="block";
})

var cancelPopup=document.getElementById("cancel-popup");

cancelPopup.addEventListener("click" ,function (event){
    event.preventDefault();
    popupOverlay.style.display="none";
    popupBox.style.display="none";
})

//selecting container

var container=document.querySelector(".maindivv");
var addbook=document.getElementById("add-book");
var title=document.getElementById("book-title-input");
var author=document.getElementById("book-author-input");
var shortdescription=document.getElementById("book-description");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class",".maindivv");
    div.innerHTML=`<h3 id="h1">${title.value}</h3>
    <h5 id="head">${author.value}</h5>
    <p id="para">${shortdescription.value}</p>
    <button id="btn" onclick="deleteBook(event)">Delete</button>`
    container.append(div);
    popupOverlay.style.display="none";
    popupBox.style.display="none";
});

function deleteBook(event){
    event.target.parentElement.remove()
}