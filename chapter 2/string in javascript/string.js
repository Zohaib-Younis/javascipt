       //we can write in both way
let str="Zohaib";
let str1='Zohaib';
console.log(str);
console.log(str);
        //To print individual character
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
           //to print length str.length

           //Spacial str
let sentence=`This is a template literal`;

console.log(sentence);


let obj={
    item:"Pen",
    price:10,
};
let output=`The cost of ${obj.item} is ${obj.price} rupuees`;
let escapechar=
console.log(output);
// console.log("The cost of",obj.item,"is",obj.price,"Rupees");

//not affect original str in javascript;

let strr="Zohaib Younis";
strr=strr.toUpperCase();
console.log(strr);
let newStr=strr.toLowerCase();
console.log(newStr);


// trim string ignore white space

let strrr="    Zoahib   Younis        ";
strrr=strrr.trim();
console.log(strrr);


// slice method return part of string

let slice_str="abcdef";
slice_str=slice_str.slice(1,3);
console.log(slice_str);

//concatination of two string
 let stri1="Zohaib";
 let stri2="Younis";

 let result= stri1.concat(stri2);
 // also we can stri1 + stri2
 // "Hello " +123          // output will be Hello 123
 console.log(result);


 // replace method
 let strings="Zohaib";
 console.log(strings.replace("Z","R"));