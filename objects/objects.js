function sayHello(){
	alert("It's working.")
}

var friend={
	//properties//
	firstName:"Benjamin",
	lastName:"Harcourt",
	age: 24
};

document.getElementById("demo").innerHTML= friend.firstName +" "+friend.lastName+ friend.age;

document.getElementById("name").innerHTML= friend.firstName;

var houseOfCards={
	showname: "House of Cards",
	episodeNo: 1,
	episodeDesc: "The viewer is introduced to the nefarious ways of Mr. Frank Underwood"

}

document.getElementById("show-name").innerHTML=houseOfCards.showname;
document.getElementById("episode-number").innerHTML=houseOfCards.episodeNo;
document.getElementById("episode-description").innerHTML=houseOfCards.episodeDesc;

var netflixShow = {
	showName: "",
	epNumber: 1,
	epDescription: ""
}

var drWho = Object.create(netflixShow);
drWho.showName = "Dr. Who";
drWho.epNumber = 1; 
drWho.epDescription = "Mannequins come alive.";

document.getElementById("showName").innerHTML=drWho.showName;
document.getElementById("episodeNumber").innerHTML=drWho.epNumber;
document.getElementById("episodeDescription").innerHTML=drWho.epDescription;

/*******************More Complex Object Literals******************************/

var amazonPrimeShow = {
	showId		: 1,
	name 		:"Ben's Happies Times",
	description : "This is the happiest show on the planet", 
	seasonInfo	: {
		seasonNumber: 1,

	//METHODS
	printDetails: function(){
		document.write(description);
		},
	

	episode 	: [
		{episodeNumber: 1, episodeName: "Happy Stuff"}, 
		{episodeNumber: 2, episodeName: "The Real Happy Story of Ben"},
		{episodeNumber: 3, episodeName: "Even Happier than Before"},

	

	]
	},
};
		//document.write(amazonPrimeShow.seasonInfo.episode[0].episodeName);//

	for (info in amazonPrimeShow.seasonInfo.episode){
		document.write((parseInt(info) +1) + " - " +amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
	}