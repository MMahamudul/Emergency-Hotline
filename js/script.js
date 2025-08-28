
/* Love icon count feature  */
let totalClick = 0;

let iconHits = document.querySelectorAll(".love-button");

for(const iconHit of iconHits){
    iconHit.addEventListener("click", function(){
        totalClick++;
        document.getElementById("heart-count").innerText = totalClick;

    })
}


/* Call button feature  */

let callButtons = document.querySelectorAll(".call-button");
let callHistory = document.getElementById("call-history");


  for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
      
      let cardBody = callButton.parentElement.parentElement;

      
      let service = cardBody.querySelector(".service-name").innerText;
      let number = cardBody.querySelector(".service-number").innerText;
      

      
        
       
        let coins= parseInt(document.getElementById("available-coin").innerText);

        if(coins >= 20){
            alert('Calling ' + service + "\n" + number);
            let currentCoins = coins - 20;
            let currentBalance = document.getElementById("available-coin").innerText = currentCoins;
            currentBalance.innerText = currentCoins;
            
            const callHistoryElement = document.createElement("div");
    /* adding style to the container */
            callHistoryElement.classList.add("history-card");

    /* creating elements */
            const historyServiceName = document.createElement("h1")
            historyServiceName.innerText = service;
            const historyServiceNum = document.createElement("h3")
            historyServiceNum.innerText = number;
    /* appended created elements */
            callHistoryElement.appendChild(historyServiceName);
            callHistoryElement.appendChild(historyServiceNum);
            callHistory.appendChild(callHistoryElement);

        }else{
            alert("You account balance is running low. Please recharge coins")
            return;
        }
        document.querySelector(".history-content").innerText = service;
       

        
    });
  }

  /* clear button feature */ 

  document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("call-history").innerHTML = "";
  })

  
