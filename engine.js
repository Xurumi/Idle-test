/**********************************************************************
	PART TWO: CREATING AN IDLE GENERATOR
	
	Note: Only new code is commented.
	
	This section is about making a timed counter that will be used
	to increment the count as time passes. This counter will also 
	run even if the user is in another tab within the browser.
	
	We'll be using "Meditation" as our "Energy" currency in game.
	So that's what the variables are named.
**********************************************************************/
/**********************************************************************
	PART THREE: ADVANCED PAGE OUTPUT
	
	Note: Only new code is commented.
	
	This section is about making a new element in HTML and basic 
	styling in CSS. Also how to access that element from Javascript.
**********************************************************************/
/**********************************************************************
	PART FOUR: CREATING A DICE ROLLER
	
	Note: Only new code is commented.
	
	This section is about making a random dice generator. There's a
	little bit of work involed but it's worth it. 
	
	For loops can be daunting, just paste mine if you get confused.
	All it says is "run this piece of code n times".
	
	We'll also cover pushing into Arrays here. To store multiple sets
	of data.
**********************************************************************/
/**********************************************************************
	PART FIVE: CREATING CLICKABLE ELEMENTS
	
	Note: Only new code is commented.
	
	This section is about creating buttons (and other elements) that
	are clickable. 
**********************************************************************/
/**********************************************************************
	PART SIX: CREATING A CHARACTER
	
	Note: Only new code is commented.
	
	This section is about creating buttons (and other elements) that
	are clickable. 
**********************************************************************/
/**********************************************************************
	CODE REVIEW:
	Code should always be neat and readable. 
	I'm crap at keeping my code neat, but I'll try.
**********************************************************************/
/**********************************************************************
	CHAPTER 2.
	PART 1: SAVING AND LOADING USING LOCAL STORAGE
	
	Note: Only new code is commented.
	
	This will add 3 buttons to your code: Save, Load and Delete
	As well as an auto-load function when the game starts up.
	
	It should also give you a basic idea on how to use localStorage
	for saving information.
	
	We'll touch all three files here:
		index.html
		styles.css
		engine.js
**********************************************************************/
/**********************************************************************
	CHAPTER 2.
	PART 2: CREATING PROGRESS BARS
	
	Note: Only new code is commented.
	
	There's a lot going on here peeps. Bear with me.
	
	CHANGES IN HTML FILE:
	- Added a container around everything
	- Added an outer and inner progress bar
	- Added a call to load jQuery for animations
	
	CHANGES IN CSS:
	- New styles for new elements:
		container, progress bars, 
	- Changes to styles for everything to make it look nicer
	  (also added some nice shadows to the text)
	  
	CHANGES IN JAVASCRIPT:
	- New progress bar animation for every idle "tick". This is 
	  done using jQuery because it's a *lot* easier than writing
	  your own animation routine.
	- Loading now updates display straight away.
	
	In this part you'll learn how to animate something using jQuery
	and a lot more CSS and HTML.
	
**********************************************************************/
/**********************************************************************
	CHAPTER 2.
	PART 3: BUYABLES
	
	Note: Only new code is commented.
	
	Right. This one is a massive change.
	Again - Bear with me.
	
	HTML CHANGES:
	- Splitting the HTML into two sides. Left and Right.
	- Adding in new Levelling and Items list elements.
	
	CSS CHANGES:
	- New styles for leftside, rightside, levelling and items 
	
	JAVASCRIPT CHANGES:
	- New Buyables object with Levelling and Item objects
	- New Display variables
	- Removal of Engine.Player.Speed as it's unused
	- Creation of Engine.IdleTimePiece to stop the timer
	- New UpdateBuyable function
	- New BuyLevelling function
	- New BuyItems function
	- Updated Save and Load to incorporate buyables
	- Added element variable assignments during Engine.Init()
	- Added UpdateBuyables call to Engine.Init()
**********************************************************************/
/**********************************************************************
	CHAPTER 2.
	PART 4: ACHIEVEMENTS
	
	Note: Only new code is commented.
	
	Learn how to check for achievements. This isn't the best way of doing
	it, but it's complete and will work.
	
	HTML CHANGES: 
	- Nothing
	
	CSS CHANGES: 
	- Nothing
	
	JAVASCRIPT CHANGES:
	- New Achievements Array
	- New Player variable for TotalIdle
	- New Achievements checking function
	- Updated Save and Load for Achievements
	- Updated the IdleTimer to increment TotalIdle 
	  and check for Achievements
**********************************************************************/
/**********************************************************************
	CHAPTER 2.
	PART 4: PAUSING THE GAME
	
	Note: Only new code is commented.
	
	How to pause stuff, I've done this with a <div> overlay which
	stops the user from interacting with the rest of the page.
	
	It's not hack-proof. But for now, it'll do.
	
	HTML CHANGES:
	- New paused overlay with text
	- New pause button
	
	CSS CHANGES:
	- New styles for the paused overlay and text
	
	JAVASCRIPT CHANGES:
	- Two new clickables for pause button and overlay.
	- One new display for overlay.
	- New generic variable Engine.Paused to keep track
	  of whether the game is paused or not.
	- New pause function to actually pause and unpause.
	- Bunch of new assignments in the Engine.Init function.
**********************************************************************/
/**********************************************************************
	CHAPTER 2.
	PART 4: PAUSING THE GAME
	
	Note: Only new code is commented.
	
	How to pause stuff, I've done this with a <div> overlay which
	stops the user from interacting with the rest of the page.
	
	It's not hack-proof. But for now, it'll do.
	
	HTML CHANGES:
	- New paused overlay with text
	- New pause button
	
	CSS CHANGES:
	- New styles for the paused overlay and text
	
	JAVASCRIPT CHANGES:
	- Two new clickables for pause button and overlay.
	- One new display for overlay.
	- New generic variable Engine.Paused to keep track
	  of whether the game is paused or not.
	- New pause function to actually pause and unpause.
	- Bunch of new assignments in the Engine.Init function.
**********************************************************************/
/**********************************************************************
	END OF CHAPTER 2	
**********************************************************************/

var Engine = {

	/** achievements **/
	achievements: [
		{ name: "Idle for x10", toGet: ["totalidle", 10], bonus: 10, achieved: false },
		{ name: "Idle for x100", toGet: ["totalidle", 100], bonus: 100, achieved: false },
		{ name: "500 meditation", toGet: ["meditation", 100], bonus: 100, achieved: false }
	],

	/** buyables **/
	buyables: {
		levelling: [
			{ name: "Small Speed boost", cost: 10, effect: ["speed", 250], purchased: false },
			{ name: "Fast Speed boost", cost: 20, effect: ["speed", 500], purchased: false },
			{ name: "Very Fast Speed boost", cost: 30, effect: ["speed", 1000], purchased: false }
		],
		items: [
			{ name: "Small Knife", cost: 10, effect: ["weapon", 1.5], purchased: false },
			{ name: "Hunting Knife", cost: 20, effect: ["weapon", 2], purchased: false },
			{ name: "Machete", cost: 30, effect: ["weapon", 2.5], purchased: false }
		]
	},

	/** display and Interactions **/
	clickables: {
		pause: null,
		paused: null,
		rollD6: null,
		save: null,
		load: null,
		deleteSave: null
	},
	display: {
		paused: null,

		levelling: null,
		items: null,

		progress: null,
		status: null,
		meditation: null
	},

	/** player Stats **/
	player: {
		meditation: 0,
		health: 100,
		strength: 1,
		level: 1,
		totalIdle: 0,
		weapon: 0,
		inventory: []
	},

	/** Variables **/
	paused: false,
	idleTimePiece: null,
	timeThen: new Date().getTime(),
	timeNow: new Date().getTime(),
	ticks: 0,
	idleSpeed: 3000,

	/** pause **/
	pause: function () {
		if (Engine.paused == false) {
			clearTimeout(Engine.idleTimePiece);
			$('#progressvalue').stop();
			Engine.display.paused.style.display = "block";
			Engine.paused = true;
		} else {
			Engine.idleTimer();
			Engine.display.paused.style.display = "none";
			Engine.paused = false;
		}
	},

	/** Check achievements **/
	checkAchievements: function () {
		for (var a = 0; a < Engine.achievements.length; a++) {
			if (Engine.achievements[a].achieved == false) {
				switch (Engine.achievements[a].toGet[0]) {
					case "totalidle":
						if (Engine.player.totalIdle == Engine.achievements[a].toGet[1]) {
							Engine.status("Achievement Gained: " + Engine.achievements[a].name);
							Engine.achievements[a].achieved = true;
							Engine.player.meditation += Engine.achievements[a].bonus;
							Engine.display.meditation.innerHTML = Engine.player.meditation;
						}
						break;
					case "meditation":
						if (Engine.player.meditation == Engine.achievements[a].toGet[1]) {
							Engine.status("Achievement Gained: " + Engine.achievements[a].name);
							Engine.achievements[a].achieved = true;
							Engine.player.meditation += Engine.achievements[a].bonus;
							Engine.display.meditation.innerHTML = Engine.player.meditation;
						}
						break;
					default:
						alert("ERROR");
						break;
				}
			}
		}
	},

	/** Update Shop **/
	updateBuyables: function () {
		Engine.display.levelling.innerHTML = "";
		Engine.display.items.innerHTML = "";
		var levellingHTML = "";
		for (var l = 0; l < Engine.buyables.levelling.length; l++) {
			if (Engine.buyables.levelling[l].purchased == false) {
				levellingHTML += '<li name="' + l + '">'
					+ Engine.buyables.levelling[l].name
					+ ' - cost: ' + Engine.buyables.levelling[l].cost
					+ '</li>';
			}
		}
		Engine.display.levelling.innerHTML = levellingHTML;
		var itemsHTML = "";
		for (var l = 0; l < Engine.buyables.items.length; l++) {
			if (Engine.buyables.items[l].purchased == false) {
				itemsHTML += '<li name="' + l + '">'
					+ Engine.buyables.items[l].name
					+ ' - cost: ' + Engine.buyables.items[l].cost
					+ '</li>';
			}
		}
		Engine.display.items.innerHTML = itemsHTML;
		var levellingChildren = Engine.display.levelling.childNodes;
		for (var lc = 0; lc < levellingChildren.length; lc++) {
			levellingChildren[lc].addEventListener("click", function () {
				var thisIndex = parseInt(this.getAttribute("name"));
				Engine.buyLevelling(thisIndex);
				return false;
			});
		}
		itemsChildren = Engine.display.items.childNodes;
		for (var lc = 0; lc < itemsChildren.length; lc++) {
			itemsChildren[lc].addEventListener("click", function () {
				var thisIndex = parseInt(this.getAttribute("name"));
				Engine.buyItems(thisIndex);
				return false;
			});
		}

	},

	/** Buy a level **/
	buyLevelling: function (index) {
		if (Engine.player.meditation >= Engine.buyables.levelling[index].cost) {
			Engine.player.meditation -= Engine.buyables.levelling[index].cost;
			Engine.buyables.levelling[index].purchased = true;
			switch (Engine.buyables.levelling[index].effect[0]) {
				case "speed":
					clearTimeout(Engine.idleTimePiece);
					$('#progressvalue').stop().css("width", "0%");
					Engine.idleSpeed -= Engine.buyables.levelling[index].effect[1];
					Engine.idleTimer();
					break;
				default:
					alert("ERROR");
					break;
			}
			Engine.updateBuyables();
			Engine.display.meditation.innerHTML = Engine.player.meditation;
		} else {
			Engine.status("Not enough meditation!");
		}

	},

	/** Buy an Item **/
	buyItems: function (index) {
		if (Engine.player.meditation >= Engine.buyables.items[index].cost) {
			Engine.player.meditation -= Engine.buyables.items[index].cost;
			Engine.buyables.items[index].purchased = true;
			switch (Engine.buyables.items[index].effect[0]) {
				case "weapon":
					Engine.player.weapon = Engine.buyables.items[index].effect[1];
					break;
				default:
					break;
			}
			Engine.updateBuyables();
			Engine.display.meditation.innerHTML = Engine.player.meditation;
		} else {
			Engine.status("Not enough meditation!");
		}
	},

	/** Show a status **/
	status: function (text) {
		Engine.clickables.status.innerHTML = text;
		setTimeout(function () {
			Engine.clickables.status.innerHTML = "";
		}, 3000);
	},

	/** save **/
	save: function () {
		var tmpsavefile = JSON.stringify(Engine.player);
		window.localStorage.setItem("savefile", tmpsavefile);
		var tmpidleSpeed = JSON.stringify(Engine.idleSpeed);
		window.localStorage.setItem("saveidlespeed", tmpidleSpeed);
		var tmpbuyables = JSON.stringify(Engine.buyables);
		window.localStorage.setItem("savebuyables", tmpbuyables);
		var tmpachievements = JSON.stringify(Engine.achievements);
		window.localStorage.setItem("saveachievements", tmpachievements);
		Engine.status("saved!");
	},

	/** load **/
	load: function () {
		if (!window.localStorage.getItem("savefile")) {
			Engine.status("No save file present for load!");
		} else {
			var tmpsavefile = window.localStorage.getItem("savefile");
			Engine.player = JSON.parse(tmpsavefile);
			Engine.idleSpeed = JSON.parse(window.localStorage.getItem("saveidlespeed"));
			Engine.buyables = JSON.parse(window.localStorage.getItem("savebuyables"));
			Engine.achievements = JSON.parse(window.localStorage.getItem("saveachievements"));
			Engine.status("loaded successfully!");
			Engine.display.meditation.innerHTML = Engine.player.meditation;
		}
	},

	/** deleteSave **/
	deleteSave: function () {
		if (!window.localStorage.getItem("savefile")) {
			Engine.status("No save file present for deletion");
		} else {
			window.localStorage.removeItem("savefile");
			Engine.status("deleteSaved successfully!");
		}
	},

	/** Roll a Dice **/
	rollDice: function (numTimes, numSides) {
		var result = [];
		if (numTimes > 1) {
			for (var diceRollNum = 0; diceRollNum < numTimes; diceRollNum++) {
				result.push(Math.floor(Math.random() * numSides) + 1);
			}
		} else {
			result.push(Math.floor(Math.random() * numSides) + 1);
		}
		return result;
	},

	/** Start Idle Timer **/
	idleTimer: function () {
		Engine.timeNow = new Date().getTime();
		var timeDifference = Engine.timeNow - Engine.timeThen - Engine.ticks;
		while (timeDifference >= Engine.idleSpeed) {
			Engine.player.meditation++;
			Engine.display.meditation.innerHTML = Engine.player.meditation;
			timeDifference -= Engine.idleSpeed;
			Engine.ticks += Engine.idleSpeed;
			Engine.player.totalIdle++;
			Engine.checkAchievements();
		}

		var idleTime = Engine.idleSpeed - timeDifference;

		$("#progressvalue").animate({
			width: "100%"
		}, idleTime, function () {
			$(this).css("width", "0%");
		});

		Engine.idleTimePiece = setTimeout(Engine.idleTimer, idleTime);
	},

	/** initialisation **/
	init: function () {
		Engine.display.paused = document.getElementById("paused");

		Engine.clickables.pause = document.getElementById("pause");
		Engine.clickables.pause.addEventListener("click", function () {
			Engine.pause();
			return false;
		});

		Engine.clickables.paused = document.getElementById("paused");
		Engine.clickables.paused.addEventListener("click", function () {
			Engine.pause();
			return false;
		});

		Engine.display.levelling = document.getElementById("levelling");
		Engine.display.items = document.getElementById("items");

		Engine.display.progress = document.getElementById("progressvalue");
		Engine.clickables.status = document.getElementById("status");

		Engine.clickables.save = document.getElementById("save");
		Engine.clickables.save.addEventListener("click", function () {
			Engine.save();
			return false;
		});

		Engine.clickables.load = document.getElementById("load");
		Engine.clickables.load.addEventListener("click", function () {
			Engine.load();
			return false;
		});

		Engine.clickables.deleteSave = document.getElementById("delete");
		Engine.clickables.deleteSave.addEventListener("click", function () {
			Engine.deleteSave();
			return false;
		});

		Engine.clickables.rollD6 = document.getElementById("rolld6");
		Engine.clickables.rollD6.addEventListener("click", function () {
			var thisRoll = Engine.rollDice(1, 6);
			alert(thisRoll);
			return false;
		});

		Engine.display.meditation = document.getElementById("meditation");
		Engine.idleTimer();

		if (window.localStorage.getItem("savefile")) {
			Engine.load();
		}

		Engine.updateBuyables();
	}

};

/** Start Already! **/
window.onload = function () {
	Engine.init();
};
