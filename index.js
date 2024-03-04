function dice()
{
        var randomNumber = Math.floor((Math.random() * 6) + 1);
        if(randomNumber===1){
            document.querySelector(".img1").src="dice1.png";
        }else if(randomNumber===2){
            document.querySelector(".img1").src="dice2.png";
        }else if(randomNumber===3){
            document.querySelector(".img1").src="dice3.png";
        }else if(randomNumber===4){
            document.querySelector(".img1").src="dice4.png";
        }else if(randomNumber===5){
            document.querySelector(".img1").src="dice5.png";
        }else if(randomNumber===6){
            document.querySelector(".img1").src="dice6.png";
        }
        randomNumber = Math.floor((Math.random() * 6) + 1);
        if(randomNumber===1){
            document.querySelector(".img2").src="dice1.png";
        }else if(randomNumber===2){
            document.querySelector(".img2").src="dice2.png";
        }else if(randomNumber===3){
            document.querySelector(".img2").src="dice3.png";
        }else if(randomNumber===4){
            document.querySelector(".img2").src="dice4.png";
        }else if(randomNumber===5){
            document.querySelector(".img2").src="dice5.png";
        }else if(randomNumber===6){
            document.querySelector(".img2").src="dice6.png";
        }
}

function selectDie(value) 
{
    if (value === "1") {
        Die_1();
    } else if (value === "2") {
        Die_2();
    }
}

function Die_1()
{
    document.querySelector(".dice_no_2").classList.add("hidden");
}

function Die_2()
{
    document.querySelector(".dice_no_2").classList.remove("hidden");

}