function showHeart(){
    let heartContainer = document.getElementById("heartContainer");
    heartContainer.innerHTML = "<span class='heart'>&#10084;</span><p>爱沐衍</p><img class='mumu' src='mumu.jpg' height='850px' weight='850px' alt='mumu'>";
    let heart = document.getElementsByClassName("heart")[0];
    heart.style.display = "inline-block";
}