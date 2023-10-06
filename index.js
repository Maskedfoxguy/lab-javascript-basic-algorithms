// Iteration 1: Names and Input
let hacker1 = "Amarillo";
 console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Hippopatamus";
 console.log(`The navigators's name is ${hacker2}.`);

// Iteration 2: 

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else  {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

// Iteration 3;

str = "";
for (i = 0 ; i < hacker1.length ; i++) {
    str += hacker1[i].toUpperCase() + " ";
}
console.log(str);

// Iteration 3.2

revNav = ""
for (i = hacker2.length - 1 ; i > -1 ; i--) {
    revNav += hacker2[i];
}
console.log(revNav);

// Inter 3.3

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    }
    else if ( hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.");
    }
    else {
    console.log("Yo, the navigator goes first, definitely.");
    }

