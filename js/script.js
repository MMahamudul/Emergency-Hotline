let totalClick = 0;

let iconHits = document.querySelectorAll(".love-button");

for(const iconHit of iconHits){
    iconHit.addEventListener("click", function(){
        totalClick++;
        document.getElementById("heart-count").innerText = totalClick;

    })
}