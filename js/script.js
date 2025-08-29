
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

    let coins = parseInt(document.getElementById("available-coin").innerText);

    if (coins >= 20) {
      alert("Calling " + service + "\n" + number);

      let currentCoins = coins - 20;
      document.getElementById("available-coin").innerText = currentCoins;

      // Get current local time (12-hour format with AM/PM)
      let now = new Date();
      let timeString = now.toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: true 
      });

      /* Create call history card */
      const callHistoryElement = document.createElement("div");
      callHistoryElement.classList.add("history-card");

     /* service name + time inline */

      const serviceRow = document.createElement("div");
      serviceRow.style.display = "flex";
      serviceRow.style.justifyContent = "space-between";
      serviceRow.style.alignItems = "center"; 

      const historyServiceName = document.createElement("h1");
      historyServiceName.innerText = service;

      const historyTime = document.createElement("span");
      historyTime.innerText = timeString;
     

      serviceRow.appendChild(historyServiceName);
      serviceRow.appendChild(historyTime);

      /* Service number  */
      const historyServiceNum = document.createElement("h3");
      historyServiceNum.innerText = number;

      /* Append to card */
      
      callHistoryElement.appendChild(serviceRow);
      callHistoryElement.appendChild(historyServiceNum);

      callHistory.appendChild(callHistoryElement);
    } else {
      alert("Your account balance is running low. Please recharge coins");
      return;
    }
  });
}


  /* clear button feature */ 

  document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("call-history").innerHTML = "";
  })

  
/* Copy button feature  */
let totalCopy = 2;

let copyHits = document.querySelectorAll(".copy-button");

for(const copyHit of copyHits){
    copyHit.addEventListener("click", function(){
        totalCopy++;
        document.getElementById("copy-count").innerText = totalCopy;

    })
}

/* copy the service number feature */



  const copyButtons = document.querySelectorAll(".copy-button");

  // Loop through each button
 /*  copyButtons.forEach(button => {
    
  }); */

  for (const copyButton of copyButtons){
    copyButton.addEventListener("click", function () {
      
      let element = copyButton.parentElement.parentElement;

     
      let number = element.querySelector(".service-number").innerText;

      
      let container = document.createElement("textarea");
      container.value = number;
      document.body.appendChild(container);

      container.select();
      document.execCommand("copy");

      document.body.removeChild(container);

      
      alert("Copied: " + number);
    });

  }
 

  /* -----------------*/
  