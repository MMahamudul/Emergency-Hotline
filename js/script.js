
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


  for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
      
      let cardBody = callButton.parentElement.parentElement;

      
      let service = cardBody.querySelector(".service-name").innerText;
      let number = cardBody.querySelector(".service-number").innerText;

      
      alert('Calling ' + service + "\n" + number);

        let coins= parseInt(document.getElementById("available-coin").innerText);

        if(coins >= 20){
            let currentCoins = coins - 20;
            let currentBalance = document.getElementById("available-coin").innerText = currentCoins;
            currentBalance.innerText = currentCoins;
        }else{
            alert("You account balance is running low. Please recharge coins")
            return;
        }
        
       

        
    });
  }