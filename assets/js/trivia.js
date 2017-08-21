$(document).ready(function () {

//**************** Variable Arrays & Counter Section ***************************>

var randomizer = [];
var sloganArray = [];
var choicesArray = [];
var answers = [];
var currentQuestion = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var counter = 1;
var selectedAnswer;
var wrongNoNoNo = $('audio')[0];

//**************** End Variables etc. ******************************************>


//**************** Random loop script ******************************************>

function letsBegin() {
for (var i = 0; i < 6; i++) {
var randomNumber = Math.floor(Math.random() * 52 + 1);

//**************** End script **************************************************>

//**************** Slogan & Choices Display ************************************>

randomizer.push(randomNumber);
sloganArray.push(questions[randomNumber].slogan);
choicesArray.push(questions[randomNumber].choices);	
answers.push(questions[randomNumber].correctAnswer);

}

// End Display Section ********************************************************> 

// Start Game Button Action ***************************************************> 

$('.hideMe').hide();
$('.nextBtn-1').click(function(event){
	$(this).hide();
	$(".hideMe").show();
loadRecords();

});

}


// Timer Countdown **********************************************> 
    
    	var timeLeft = 8;
    	var downloadTimer = setInterval(function(){
    	timeLeft--;
    	// $("countdowntimer").text(timeleft);
    	if(timeLeft <= 0)
    		clearInterval(downloadTimer);
    	    	currentQuestion++;
        loadRecords();
    }, 8000);

// Select Choice ************************************************> 

function loadRecords() {
	  
// **************************************************************> 
// **************************************************************> 


	   if (counter > 6) {

	   	$(".hideMe").hide();
		setTimeout(resetGame, 2000);

} else {

		$("#slogan1").text('"' + sloganArray[currentQuestion] + '"');
		$("#choice_0").text(choicesArray[currentQuestion][0]);
		$("#choice_1").text(choicesArray[currentQuestion][1]);
		$("#choice_2").text(choicesArray[currentQuestion][2]);

}

$("#current-question").text(counter++);

}
// **************************************************************> 
// **************************************************************> 

$('button').click(function(event) {

if (this.id == "choice_0") {

	selectedAnswer = 0;
} else if (this.id == "choice_1") {

	selectedAnswer = 1;
} else if (this.id == "choice_2") {

	selectedAnswer = 2;
} else {}

checkAnswers();

});

// **************************************************************> 
// **************************************************************> 

function checkAnswers()  {

	if (selectedAnswer == answers[currentQuestion]) {
		rightAnswers++;
		$("#messageright").text("Right Answers " + rightAnswers).show();
		$("#yessssssss").get(0).play();
	
	} else {
		wrongAnswers++;
		$("#messagewrong").text("Wrong Answers " + wrongAnswers).show();
		$('#nooooooooo').get(0).play();
	}
		currentQuestion++;

loadRecords();

}

// **************************************************************> 
// **************************************************************>


function resetGame() { alert("RESET GAME?");
location.reload();

letsBegin();

}

letsBegin();

});

//**************** Slogan Section ******************************************>
//**************** Slogan Section ******************************************>

var questions = [
{slogan:"Think Small.",
choices:["Mini","Volkswagen","Fiat"],
correctAnswer:1},

{slogan:"Make Believe.",
choices:["Sony","Panasonic","Samsung"],
correctAnswer:0},

{slogan:"Keeps going and going and going.",
choices:["Duracell","Energizer","Rayovac"],
correctAnswer:1},

{slogan:"Impossible is Nothing.",
choices:["Puma","Adidas","Under Armour"],
correctAnswer:1},

{slogan:"There is no substitute.",
choices:["Porsche","BMW","Mercedes"],
correctAnswer:0},

{slogan:"Your vision. Our future.",
choices:["Canon","Pentax","Olympus"],
correctAnswer:2},

{slogan:"Save Money. Live Better.",
choices:["Target","Costco","Walmart"],
correctAnswer:2},

{slogan:"The miracles of science.",
choices:["Merck","DuPont","Johnson & Johnson"],
correctAnswer:1},

{slogan:"When there is no tomorrow.",
choices:["UPS","DSL","FedEx"],
correctAnswer:2},

{slogan:"Pleasing people the world over.",
choices:["Marriott","Holiday Inn","Hampton Inn"],
correctAnswer:1},

{slogan:"Stronger than dirt.",
choices:["Ajax","Soft Scrub","Scrubbing Bubbles"],
correctAnswer:0},

{slogan:"It’s Style.",
choices:["Cannondale","Solex","North Face"],
correctAnswer:1},

{slogan:"The greatest tragedy is indifference.",
choices:["Wounded Warriors Project","Sloan-Kettering","Red Cross"],
correctAnswer:2},

{slogan:"Between love and madness lies obsession.",
choices:["Calvin Klein","Loreal","Gloria Vanderbilt"],
correctAnswer:0},

{slogan:"Power, beauty and soul.",
choices:["Aston Martin","Maserati","Ferrari"],
correctAnswer:0},

{slogan:"See what we mean.",
choices:["Canon","Fuji","Epson"],
correctAnswer:0},

{slogan:"At the heart of the image.",
choices:["Sony","Zeiss","Nikon"],
correctAnswer:2},

{slogan:"Success. It’s a Mind Game.",
choices:["Tag Heuer","Rolex","Oris"],
correctAnswer:0},

{slogan:"The happiest place on earth.",
choices:["Las Vegas","Disneyland","New York City"],
correctAnswer:1},

{slogan:"I’m loving it.",
choices:["Starbuck's","McDonald's","Chipotle"],
correctAnswer:1},

{slogan:"Make the most of now.",
choices:["Vodafone","T-Mobile","Verizon"],
correctAnswer:0},

{slogan:"When you care enough to send the very best.",
choices:["American Greetings Corporation","Pacific Brands","Hallmark"],
correctAnswer:2},

{slogan:"Challenge everything.",
choices:["Activision","EA","Nintendo"],
correctAnswer:1},

{slogan:"Solutions for a smart planet.",
choices:["Xerox","Accenture","IBM"],
correctAnswer:2},

{slogan:"American by Birth. Rebel by Choice.",
choices:["Victory","Harley Davidson","Indian"],
correctAnswer:1},

{slogan:"I am what I am.",
choices:["Asics","Keds","Reebok"],
correctAnswer:2},

{slogan:"Share moments. Share life.",
choices:["Kodak","Hewlett-Packard","Shutterfly"],
correctAnswer:0},

{slogan:"Melts in your mouth, not in your hands.",
choices:["Pop-Fizz","M&Ms","Ricola"],
correctAnswer:1},

{slogan:"No battery is stronger longer",
choices:["Energizer","Duracell Batteries","Rayovac"],
correctAnswer:1},

{slogan:"Nothin’ says lovin’ like something from the oven",
choices:["Pillsbury","Betty Crocker","Bake-N-Serv"],
correctAnswer:0},

{slogan:"For the men incharge of change.",
choices:["Inc.","Fast Company","Fortune"],
correctAnswer:2},

{slogan:"Quality never goes out of style.",
choices:["Levis","Polo","The Gap"],
correctAnswer:0},

{slogan:"Get N or get out",
choices:["Xbox","Nintendo 64","PlayStation"],
correctAnswer:1},

{slogan:"A diamond is forever.",
choices:["Zales","DeBeers","Shane Jewelers"],
correctAnswer:1},

{slogan:"Every bubble’s passed its fizzical.",
choices:["Fat Tire","Shock Top","Corona"],
correctAnswer:2},

{slogan:"Life is short. Stay awake for it!",
choices:["Peet's Coffee","Seven-Eleven","Caribou Coffee"],
correctAnswer:2},

{slogan:"The snack that smiles back.",
choices:["Doritos","Lays Potato Chips","Goldfish"],
correctAnswer:2},

{slogan:"So easy a caveman can do it.",
choices:["GEICO","State Farm","Farmer's Insuranct"],
correctAnswer:0},

{slogan:"The Best Place for Cartoons.",
choices:["Warner Bros.","Cartoon Network","Comedy Central"],
correctAnswer:1},

{slogan:"Taking Care of Business.",
choices:["Office Depot","Staples","Office Max"],
correctAnswer:0},

{slogan:"The Coke Side of Life.",
choices:["Pepsi Cola","Coca-Cola","Vitamin Water"],
correctAnswer:1},

{slogan:"The mint with the hole.",
choices:["Polo","Calvin Klein","Banana Republic"],
correctAnswer:0},

{slogan:"The way a sandwich should be.",
choices:["Subway","Firehouse Subs","Jersey Mike's"],
correctAnswer:0},

{slogan:"You got 30 minutes.",
choices:["Domino’s Pizza","Pizza Hut","Little Caesars"],
correctAnswer:0},

{slogan:"Think outside the bun.",
choices:["McDonald's","Arby's","Taco Bell"],
correctAnswer:2},

{slogan:"Oh, what a feeling!",
choices:["Nissan","Toyota","Honda"],
correctAnswer:1},

{slogan:"Obey your thirst.",
choices:["Sprite","Coke","Dr. Pepper"],
correctAnswer:0},

{slogan:"Makin’ it great!",
choices:["Domino’s Pizza","Pizza Hut","Papa John's"],
correctAnswer:1},

{slogan:"Imagination at Work.",
choices:["General Electric","Black & Decker","LG"],
correctAnswer:0},

{slogan:"Just Do It.",
choices:["The United States Marines Corp.","Weight Watchers","Nike"],
correctAnswer:2},

{slogan:"Playing what we want.",
choices:["Sony","Jack FM","Pandora"],
correctAnswer:1},

{slogan:"You can’t top the copper top.",
choices:["Duracell","Energizer","Rayovac"],
correctAnswer:0}
];

//**************** End Slogan Section ******************************************>