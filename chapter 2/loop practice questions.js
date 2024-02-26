/**let num=2;
for(let i=0;i<=100;i++){
    if(i%num==0){
        console.log("Even =",i);
    }
}

let i=0;
while(i<=100){
    if(i%2==0){
        console.log("Even is =",i);
    }
    i++;
} */


let gamenumber=25;
let usernumber=prompt("Enter the correct number");
while(usernumber!=gamenumber){
    usernumber=prompt("You enter wrong please try again") 
}
console.log("You won");