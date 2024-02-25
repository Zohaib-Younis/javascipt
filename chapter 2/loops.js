for(let i=1;i<=5;i++){
    console.log("Zohaib");
}
let sum=0;
for (let i =0;i<=5;i++){
    sum=sum+i;
}
console.log("Sum from 0 to 5 is = ",sum);

let result=0;
let n=15;
for(let i=0;i<=n;i++){
    result=result+i;
}
console.log("Sum of 0 to n is =",result);

//never use infinite loop in your code 


//While loop
let i=1;
while(i<=10){
    console.log("Zohaib");
    i++;
}

//do while loop

let j=20;
do{
    console.log("Zohaib");
    j++;
} while(j<=10);

//For-of loop   kuch alag nhi ker rahay hotay bus help kertay hn kuch spacial data types per loop laganay k lia object k lia use ni kerna bus string or array k lia use kerna ha


let str="Zohaib";
for(let i of str){
    console.log("i=",i);
}
           // output
/*
i= Z
i= o
i= h
i= a
i= i
i= b */




//for-in loop

let stu={
    name:"Shahzaib",
    age:21,
    cgpa:2.85,
    ispass:true
}
for(let key in stu){
    console.log("key=",key," value=",stu[key]);
}