//JS File

function add(x,y){
	console.log(x+y);
}
function multiply(w,z){
	console.log(w*z);
}


//Array

var classmates = ["Matt", "Tara", "Danielle", "Evan"];

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);


/*cLen=(classmates.length);
text ="<ul>";
for(i=0;i<cLen;i++){
	text +="<li>"+classmates[i] + "</li>"
}

for(var j = 0; j <classmates.length; j++){
	console.log(classmates[j]);
}*/

for(var i in classmates){
	console.log(classmates[i]);
}
//****^conventionally used from Arrays


var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffee", "Duck"];

//BRONZE:

var favoriteAnimals = ["Sadie", "Middy", "Tigers", "Dragons"]
	for(var animals in favoriteAnimals){
		console.log(favoriteAnimals[animals])
	}
console.log(favoriteAnimals);

for(var i=0;i<favoriteAnimals.lenth;i++){
	console.log(i);
}

















/***********************DO NOT GO ABOVE THIS LINE RIGHT NOW******************************
/***********************THERE IS TO MUCH "FUN" ABOVE*******************************


//OBJECT LITERAL**/

var friend={

	//Properties
	fullname		: "",
	age				: 0,
	married			: true,
	vocation		: "",
	closeLikeABro	: true,
	yearsKnown		: 0,

	//Method
	printVocation	: function(){
		return this.vocation;
	},
	goCamping	: function(){
		if(this.yearsKnown >= 5 && this.closeLikeABro == true && this.married==false){
			return "Fishing trip!."
		}else{
			return "Looooser"
		}
	}
}

var stephenMcCune = Object.create(friend);
stephenMcCune.fullname = "Stephen McCune";
stephenMcCune.age = 23;
stephenMcCune.married = false;
stephenMcCune.vocation = "Student at Purdue University";
stephenMcCune.yearsKnown = 20;

var kevinGrabert = Object.create(friend);
kevinGrabert.fullname = "Kevin Grabert"; 
kevinGrabert.age = 21;
kevinGrabert.married = false;
kevinGrabert.vocation = "Triple OG";
kevinGrabert.yearsKnown = 9;

var benShurina = Object.create(friend);
benShurina.fullname = "Ben Shurina";
benShurina.age = 23;
benShurina.married = false;
benShurina.vocation = "Mad Scientist";
benShurina.yearsKnown = 15; 

var macleanMurt = Object.create(friend);
macleanMurt.fullname = "Maclean Murt";
macleanMurt.age = 22;
macleanMurt.married = false;
macleanMurt.vocation = "Professional Dimwit";
macleanMurt.yearsKnown = 7;

var daltonTishner = Object.create(friend);
daltonTishner.fullname = "Daltina Tishner";
daltonTishner.age = 19;
daltonTishner.married = false;
daltonTishner.vocation = "Donkey-Show Performer";
daltonTishner.yearsKnown = 7;












