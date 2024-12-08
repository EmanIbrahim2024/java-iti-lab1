///////////ex1////////////

alert('Welcome to my site');
let useName=prompt("Please Enter your name");
document.write("<h1> Welcome "+useName+" ");

////////////ex2///////////

let tempToday=prompt("Enter the tempreture of the day");

let tempState= tempValue =>{
tempValue>=30?console.log("Hot"):console.log("Cold")
}

tempState(tempToday);

//////////////ex3////////


let nameOfUser=prompt("Please Enter your name");

while(parseInt(nameOfUser)){
    nameOfUser=prompt("Please Enter your name");  
}

let BirthOfUser=prompt("Enter you Birthyear :");
BirthOfUser=parseInt(BirthOfUser);
console.log(BirthOfUser);


while( !parseInt(BirthOfUser) || parseInt(BirthOfUser) >= 2010){
BirthOfUser=prompt("Enter you Birthyear :");
}
userAge = 2024-BirthOfUser;
console.log("The age of user is: "+userAge+" years old");

document.write("<p> <b><u> Name </u></b>: "+nameOfUser+" </p> ");
document.write("<p> <b><u> BirthYear </u></b>: "+BirthOfUser+" </p> ");
document.write("<p> <b><u> Age </u></b>: "+userAge+" years-old </p> ");

//////////////ex4////////////////

for (var i=1;i<7;i++){
    document.write(" <h"+i+"> Welcome to my site </h"+i+">  ")
}