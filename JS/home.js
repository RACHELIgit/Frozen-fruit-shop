
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  window.onload = function() {
    debugger
    sessionStorage.setItem("mail","guss@gmail.com")

    // sessionStorage.setItem("countproduct",mycount)
    let person1 = {
      "paaword": "000",
      "name": "אורח",
      "mail": "guss@gmail.com",
      "colorpage": "",
      "font": ""
  };
  
  let json = JSON.stringify(person1);
  localStorage.setItem("guss@gmail.com", json);   
  let arr = new Array()
  sessionStorage.setItem("sal", JSON.stringify(arr))
};

// עיצוב הרקע לפי הצבע של המשתמש 
  let mybody1 = document.getElementsByTagName("body")[0]
let mycust=sessionStorage.getItem("mail")
// alert(mycust)
let str=localStorage.getItem(mycust)//מחרוזת שאפשר להמיר אותה לJSON
let person1=JSON.parse(str)//את הJSON בעצמו
let bc=person1.colorpage
let nn="שלום "+person1.name;
let f=person1.font
mybody1.style.backgroundColor=bc

mybody1.style.fontFamily=f

//----------------------------------------------------------------

let hello=document.getElementById("hello")
hello.innerHTML=nn

let countcart=document.getElementById("countcart")
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))