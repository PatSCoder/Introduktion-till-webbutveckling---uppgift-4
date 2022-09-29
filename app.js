// declarations of variables

const input = document.querySelector("#input1");
const uppgifterArray = [];
let klaraUppgifter = 0;

// selector for button

const btnAdd = document.querySelector("#addToList");

// button listener

btnAdd.addEventListener("click", function (){

  // get string text

  let text = input.value;

  // conditionals


  if (text.length === 0) {
    document.querySelector("#messenger").innerText =
      "Du skrev inget i textboxen! Försök igen!";
    return;
  } else {


    // add text to array

    uppgifterArray.push(text);

    // create li and span element to ul-list and add it

    const list = document.querySelector("#toDoList");
    const elementLi = document.createElement("li");
    list.appendChild(elementLi);

    const elementLiLabel = document.createElement("span");
    elementLiLabel.innerText = text;
    elementLi.appendChild(elementLiLabel);

    // etikett selector

    const etikett = document.querySelector("#klara");

    //let klaraUppgifter = 0;

    //listener for span element and get/set class completed

    elementLiLabel.addEventListener('click', function () {      
    
      if (elementLi.getAttribute('class') == 'completed') {
        elementLi.setAttribute('class', ' ');
        klaraUppgifter--;
      } else {
        elementLi.setAttribute('class', 'completed');
        klaraUppgifter++;
      }  
    
     // etikett.innerText = `${klaraUppgifter} avklarade`;

     // display to etikett
      etikett.innerHTML = klaraUppgifter + " completed";    
    
    });

    // trashcan with image
    
    const papperskorg = document.createElement("span");
     papperskorg.innerHTML = "&#x1F5D1";
     papperskorg.setAttribute("class", "papperskorg");
     elementLi.appendChild(papperskorg); 
    
     papperskorg.addEventListener("click", function(){
      elementLi.remove();
      klaraUppgifter--;
      etikett.innerHTML = klaraUppgifter + " completed"; 
      //uppgifterArray.pop(text);
     });
  } 

  // clear 

  document.querySelector("#messenger").innerText = " ";
  input.value = " ";

});










    
 

    

    
    

    




  

