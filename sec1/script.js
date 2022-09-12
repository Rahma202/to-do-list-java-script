var userInput=document.getElementById("userInput"),
addDiv=document.getElementById("addDiv"),
 newDiv,
// define array to store inputs of remove and done
arrRemove=[],
arrDone=[];


function addList(){
   
    if(!userInput.value){
 
    }
    else{
            
           var  removebutton=document.createElement("button"),
            doneButton=document.createElement("button");
            newDiv=document.createElement("div");
          //    push buttons in array
                    arrRemove.push(removebutton);
                    arrDone.push(doneButton);
                  newDiv.innerHTML=`${userInput.value}`;
               doneButton.innerHTML=" done";
               removebutton.innerHTML="remove";
          //   add class in div and button
               newDiv.classList.add("changeStyle");
     
               removebutton.classList.add("styleButton1","commonStyle");
               doneButton.classList.add("styleButton2","commonStyle");
               newDiv.append(removebutton);
               newDiv.append(doneButton);
                    addDiv.append(newDiv);
                    userInput.value="";
        
                    changeColor();
                
    }
     // function remove element and change style
    
    for(var i=0;i<arrRemove.length;i++){
      arrRemove[i].onclick=function(){
             var div1=this.parentElement;
           div1.classList.add("removeEleement");
      }} 
      for(var i=0;i<arrDone.length;i++){
            arrDone[i].onclick=function(){
                 var div1=this.parentElement;
                 stopToggle();
                 div1.style.background="#a0deec";
                 div1.classList.add("changeAction");
            } 
            arrDone[i].ondblclick =function (){
               var div1=this.parentElement;
               div1.classList.remove("changeAction");
               changeColor();

            }
    }
}

var setInter;
function  changeColor(){
     setInter= setInterval(function(){
    
          newDiv.style.background=newDiv.style.backgroundColor == "plum" ? "pink" : "plum"
     
     
     },1000)
}

function stopToggle(){
     clearInterval(setInter)
}


    
  
     
  
 