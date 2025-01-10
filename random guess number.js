const gen_Num=Math.floor(Math.random()*100)+1;
let guess;
let attempt=0;
while(true){
    guess=parseInt(prompt("Enter your guess between 1 and 100: "),10)
    attempt++;
    if(isNaN(guess)){
        alert("Please enter the valid number.")
        continue;
    }
    if(gen_Num<guess){
        console.log(`Generated Number is less than the guessed number ${guess} .`)
    }else if(gen_Num>guess){
        console.log(`Generated Number is greater than the guessed number ${guess}`)
    }else{
        if(attempt===1){
            console.log(`Congratulation !, you made it on the first attempt. the number generated was ${gen_Num}`)
        }else{
           console.log(`Congratulation !, you guessed it correctly in ${attempt} attempts , The number generated was ${gen_Num}`) 
        }
        break;
    }
}