// const for elements
	const mainWindow = document.getElementById("mainWindow");
	const altWindow = document.getElementById("rightPanel");
	
let registerBeep = new Audio('sounds/registerBeep.mp3');
//Lesson states
var lessonOne = false;
var lessonOneStepOne = false;
var lessonOneStepTwo = false;
var lessonOneStepThree = false;

var lessonTwo = false;
var lessonTwoStepOne = false;
var lessonTwoStepTwo = false;
var lessonTwoStepThree = false;
var lessonTwoStepFour = false;

var lessonThree = false;
var lessonThreeStepOne = false;
// Variables to check what screen is active
let normalRegisterActive = false;

// register total
let orderTotal = 0.00;

// Bool to direct the location of the number pad
let manualEntryBoxActive = false

// Not on file screen active
let notOnFileScreenActive = false;
//Startup used to load the normal register setup
	window.onload = () => {
		normalRegister();

	};

//Button click event
document.querySelector("#nextButtonAndProgressBarContainer > button").addEventListener("click",selectLession);


//Lessons
function selectLession(){
	if(lessonThree){
		if(lessonThreeStepOne){
			lessonTwo = false;
			runLessons(lessons.lessonThree.lessonThreeStepOne);
		}
	}else if(lessonTwo){
		if(lessonTwoStepTwo){
			lessonTwoStepThree = true;
			lessonTwoStepTwo = false;
			runLessons(lessons.lessonTwo.lessonTwoStepThree)

		}else{
		runLessons(lessons.lessonTwo.lessonTwoStepOne);	
		}
		
	}else{
		lessonOne = true;
		lessonOneStepOne = true;
		runLessons(lessons.lessonOne.lessonOneStepOne);
	}
}


    function normalRegister(){
		manualEntryBoxActive = false;
		normalRegisterActive = true;
		mainWindow.innerHTML = "";
		orderTotal = 0.00;
        let registerDiv = document.createElement("div");
        registerDiv.id = "registerDiv";
        mainWindow.appendChild(registerDiv);

        let grabOuterDiv = document.getElementById("registerDiv");
        let insideRegisterDivs = document.createElement("div");
		//Create the main register shell
        for(let i = 1; i < 17; i++){
            insideRegisterDivs = document.createElement("div");
            insideRegisterDivs.id = `insideRegisterGrid${i}`;
            grabOuterDiv.appendChild(insideRegisterDivs);			
        }

		// Enter item code split - InsideRegisterDiv12
		let grabEnterItemCodeDiv = document.getElementById("insideRegisterGrid12");
		let createTheItemCodeDivSplit = document.createElement("div");
		createTheItemCodeDivSplit.id = "topOfEnterItemCode";
		grabEnterItemCodeDiv.appendChild(createTheItemCodeDivSplit);
		createTheItemCodeDivSplit = document.createElement("div");
		createTheItemCodeDivSplit.id = "bottomEnterItemCode";
		grabEnterItemCodeDiv.appendChild(createTheItemCodeDivSplit);

		// Main div for the products and prices
		let grabTheOuterDivForTheMainPriceBox = document.getElementById("insideRegisterGrid16");
		let createTheOuterPriceBoxDiv = document.createElement("div");

		createTheOuterPriceBoxDiv.id = "itemDescription";
		grabTheOuterDivForTheMainPriceBox.appendChild(createTheOuterPriceBoxDiv);

		createTheOuterPriceBoxDiv = document.createElement("div");
		createTheOuterPriceBoxDiv.id = "FoodStampLogo";
		grabTheOuterDivForTheMainPriceBox.appendChild(createTheOuterPriceBoxDiv);

		createTheOuterPriceBoxDiv = document.createElement("div");
		createTheOuterPriceBoxDiv.id = "priceOfProduct";
		grabTheOuterDivForTheMainPriceBox.appendChild(createTheOuterPriceBoxDiv);

		// AdvantEdge points (upper left of register div) insideRegisterDiv15
		let grabOuterAdvantEdgeDiv = document.getElementById("insideRegisterGrid15");
		let createTheAdvantEdgeSplitDivs = document.createElement("div");
		createTheAdvantEdgeSplitDivs.id = "advantEdgeValue";
		grabOuterAdvantEdgeDiv.appendChild(createTheAdvantEdgeSplitDivs);

		createTheAdvantEdgeSplitDivs = document.createElement("div");
		createTheAdvantEdgeSplitDivs.id = "advantEdgeTitle";
		grabOuterAdvantEdgeDiv.appendChild(createTheAdvantEdgeSplitDivs);
		// Bottom bar (insideRegister14) subtotal split
		let grabTheOuterSubtotalDiv =  document.getElementById("insideRegisterGrid14");
		let createTheSubtotalSplitDiv = document.createElement("div");
		createTheSubtotalSplitDiv.id = "balanceDueDiv";
		grabTheOuterSubtotalDiv.appendChild(createTheSubtotalSplitDiv);

		createTheSubtotalSplitDiv = document.createElement("div");
		createTheSubtotalSplitDiv.id = "TotalEntryForTheRegister";
		grabTheOuterSubtotalDiv.appendChild(createTheSubtotalSplitDiv);
		// MORE and BACK div split
		let grabbackAndMoreDivOuterDiv = document.getElementById("insideRegisterGrid11");
		let createInsideDiv = document.createElement("div");
		createInsideDiv.id = "backDiv";
		grabbackAndMoreDivOuterDiv.appendChild(createInsideDiv);

		createInsideDiv = document.createElement("div");
		createInsideDiv.id = "moreDiv";
		grabbackAndMoreDivOuterDiv.appendChild(createInsideDiv);
		//Create Number pad
		let grabNumberPadDiv = document.querySelector("#insideRegisterGrid13")	
		for(let j = 1; j < 16; j++){
			let createNumpadDiv = document.createElement("div");
			createNumpadDiv.id = `numpadDiv${j}`;
			grabNumberPadDiv.appendChild(createNumpadDiv);
		}
		//Add text to divs
		document.getElementById("insideRegisterGrid2").innerHTML = "Produce";
		document.getElementById("insideRegisterGrid3").innerHTML = "Void";
		document.getElementById("insideRegisterGrid4").innerHTML = "PLU'S For Dept";
		document.getElementById("insideRegisterGrid5").innerHTML = "Price Inquiry";
		document.getElementById("insideRegisterGrid6").innerHTML = "AdvantEdge";
		document.getElementById("insideRegisterGrid7").innerHTML = "Manager Menu";
		document.getElementById("insideRegisterGrid8").innerHTML = "Alt ID";
		document.getElementById("insideRegisterGrid9").innerHTML = "Subtotal";
		document.getElementById("insideRegisterGrid10").innerHTML = "Special Functions";
		document.getElementById("topOfEnterItemCode").innerHTML = "Enter Item Code";
		document.getElementById("advantEdgeValue").innerHTML = `$${orderTotal}`;
		document.getElementById("advantEdgeTitle").innerHTML = "AdvantEdge Rewards";
		document.getElementById("balanceDueDiv").innerHTML = "Balance Due";
		document.getElementById("TotalEntryForTheRegister").innerHTML = "$0.00";
		document.getElementById("backDiv").innerHTML = "BACK<br>&nbsp;&nbsp;<<";
		document.getElementById("moreDiv").innerHTML = "MORE<br>&nbsp;&nbsp;>>";      
		document.getElementById("numpadDiv1").innerHTML = "7";
		document.getElementById("numpadDiv2").innerHTML = "8";
		document.getElementById("numpadDiv3").innerHTML = "9";
		document.getElementById("numpadDiv4").innerHTML = "@";
		document.getElementById("numpadDiv5").innerHTML = "4";
		document.getElementById("numpadDiv6").innerHTML = "5";
		document.getElementById("numpadDiv7").innerHTML = "6";
		document.getElementById("numpadDiv8").innerHTML = "<";
		document.getElementById("numpadDiv9").innerHTML = "1";
		document.getElementById("numpadDiv10").innerHTML = "2";
		document.getElementById("numpadDiv11").innerHTML = "3";
		document.getElementById("numpadDiv12").innerHTML = "C";
		document.getElementById("numpadDiv13").innerHTML = ".";
		document.getElementById("numpadDiv14").innerHTML = "0";
		document.getElementById("numpadDiv15").innerHTML = "ENTER";
		//Add event for more and back div
		document.getElementById("moreDiv").addEventListener("click", MoreScreenOnNormalRegister);
		document.getElementById("backDiv").addEventListener("click", MoreScreenOnNormalRegister);
		document.getElementById("numpadDiv12").addEventListener("click", clear);

		//Event listeners for number keys
		document.getElementById("numpadDiv1").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv2").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv3").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv4").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv5").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv6").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv7").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv8").addEventListener("click", backbutton);		
		document.getElementById("numpadDiv9").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv10").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv11").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv14").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv15").addEventListener("click", enterButtonPressPLULookup);
		document.getElementById("insideRegisterGrid3").addEventListener("dblclick", normalRegister);

    }


	//Number Pad Functions
	function numberPadButtonPress(){
		//registerBeep.load();
		//registerBeep.play();
		if(!notOnFileScreenActive){
			if(manualEntryBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML,this.innerHTML);
			else
				document.getElementById("bottomEnterItemCode").innerHTML += this.innerHTML;
		}
	}

	//Handle the manual entry input
	function addToManualEntryPrice(currentPrice,NewDigit){
		if(currentPrice.lastIndexOf("0") == 3){
			return `0.0${NewDigit}`;
		}else if(currentPrice.lastIndexOf("0") == 2){
			return `0.${currentPrice[3]}${NewDigit}`;
		}else if(currentPrice.lastIndexOf("0") == 0){
			return `${currentPrice[2]}.${currentPrice[3]}${NewDigit}`;
		}else if(currentPrice.length == 4){
			return `${currentPrice[0]}${currentPrice[2]}.${currentPrice[3]}${NewDigit}`;
		}else if(currentPrice.length == 5){
			return `${currentPrice[0]}${currentPrice[1]}${currentPrice[3]}.${currentPrice[4]}${NewDigit}`;
		}else{
			alert("TODO - Value is greater than the allowed amount of 999.99");
			return currentPrice;
		}

	
	}

	function backbutton(){
		if(manualEntryBoxActive){
			document.querySelector("#priceInputInManualEntry").innerHTML = backspaceManualEntry(document.querySelector("#priceInputInManualEntry").innerHTML);
		}else{
			document.getElementById("bottomEnterItemCode").innerHTML = document.getElementById("bottomEnterItemCode").innerHTML.slice(0, -1);
		}
	}

	function backspaceManualEntry(price){
		price = price.replace(".", "");
		price = price.slice(0, -1);
		price = price.padStart(3, "0");
		price = price.slice(0, 2) + "." + price.slice(2, 4);
		return price;
		
	}

	// Change text when the more or back button is clicked
	function MoreScreenOnNormalRegister(){
		if(normalRegisterActive){
		document.getElementById("insideRegisterGrid2").innerHTML = "Manual Adjust";
		document.getElementById("insideRegisterGrid3").innerHTML = "Sign Off";
		document.getElementById("insideRegisterGrid4").innerHTML = "Dept";
		document.getElementById("insideRegisterGrid5").innerHTML = "Lock Station";
		document.getElementById("insideRegisterGrid6").innerHTML = "Item Discounts";
		document.getElementById("insideRegisterGrid7").innerHTML = "Tax Exempt";
		document.getElementById("insideRegisterGrid8").innerHTML = "No Sale";
		document.getElementById("insideRegisterGrid9").innerHTML = "Manual <br> Redemption";
		document.getElementById("insideRegisterGrid10").innerHTML = "Vendor Coupon";
		document.getElementById("insideRegisterGrid4").addEventListener("click", showDepartments);
		normalRegisterActive = false;
		}else{
		document.getElementById("insideRegisterGrid2").innerHTML = "Produce";
		document.getElementById("insideRegisterGrid3").innerHTML = "Void";
		document.getElementById("insideRegisterGrid4").innerHTML = "PLU'S For Dept";
		document.getElementById("insideRegisterGrid5").innerHTML = "Price Inquiry";
		document.getElementById("insideRegisterGrid6").innerHTML = "AdvantEdge";
		document.getElementById("insideRegisterGrid7").innerHTML = "Manager Menu";
		document.getElementById("insideRegisterGrid8").innerHTML = "Alt ID";
		document.getElementById("insideRegisterGrid9").innerHTML = "Subtotal";
		document.getElementById("insideRegisterGrid10").innerHTML = "Special Functions";
		normalRegisterActive = true;
		}
	}


	// dept div click event to change the register and add the departments
	function showDepartments(){
		//document.querySelector("#insideRegisterGrid15").classList.add("hideDisplay");
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");

		
		for(let i = 1; i < 26; i++){
			let createDiv = document.createElement("div");
			createDiv.id = `departmentKeys${i}`;
			createDiv.value = i;
			createDiv.addEventListener("click",keyEntryForDepartmentsPopOut);
			grabRegisterMainScreenDiv.appendChild(createDiv);
		}

		let grocery = document.getElementById("departmentKeys1");
		let produce = document.getElementById("departmentKeys2");
		let floral = document.getElementById("departmentKeys3");
		let beer = document.getElementById("departmentKeys4");
		let telein = document.getElementById("departmentKeys5");
		let groceryTax = document.getElementById("departmentKeys6");
		let meat = document.getElementById("departmentKeys7");
		let kosherMeat = document.getElementById("departmentKeys8");
		let bottleDeposit = document.getElementById("departmentKeys9");
		let hdIn = document.getElementById("departmentKeys10");
		let generalmdse = document.getElementById("departmentKeys11");
		let seafood = document.getElementById("departmentKeys12");
		let sushi = document.getElementById("departmentKeys13");
		let charity = document.getElementById("departmentKeys14");
		let teleOut = document.getElementById("departmentKeys15");
		let hbc = document.getElementById("departmentKeys16");
		let bakery = document.getElementById("departmentKeys17");
		let kosherDeli = document.getElementById("departmentKeys18");
		let starbucks = document.getElementById("departmentKeys19");
		let hdout = document.getElementById("departmentKeys20");
		let deli = document.getElementById("departmentKeys21");
		let prepfood = document.getElementById("departmentKeys22");
		let tobacco = document.getElementById("departmentKeys23");
		let rx = document.getElementById("departmentKeys24");
		let empty = document.getElementById("departmentKeys25");


		grocery.innerHTML ="Grocery";
		produce.innerHTML ="Produce";
		floral.innerHTML ="Floral";
		beer.innerHTML ="Beer/Wine";
		telein.innerHTML ="Tele In";
		groceryTax.innerHTML ="Grocery <br> Taxable";
		meat.innerHTML ="Meat";
		kosherMeat.innerHTML ="Kosher Meat";
		bottleDeposit.innerHTML ="Bottle Deposit";
		hdIn.innerHTML ="H/D In";
		generalmdse.innerHTML ="General Mdse";
		seafood.innerHTML ="Seafood";
		sushi.innerHTML ="Sushi";
		charity.innerHTML ="Charity";
		teleOut.innerHTML ="Tele Out";
		hbc.innerHTML ="HBC";
		bakery.innerHTML ="Bakery";
		kosherDeli.innerHTML ="Kosher Deli";
		starbucks.innerHTML ="Starbucks";
		hdout.innerHTML ="H/D Out";
		deli.innerHTML ="Deli";
		prepfood.innerHTML ="Prepaired Food";
		tobacco.innerHTML ="Tobacco";
		rx.innerHTML ="RX";
		empty.innerHTML ="";
	
/*
		grocery.value = "1";
		produce
		floral
		beer
		telein
		groceryTax
		meat
		kosherMeat
		bottleDeposit
		hdIn
		generalmdse
		seafood
		sushi
		charity
		teleOut
		hbc
		bakery
		kosherDeli
		starbucks
		hdout
		deli
		prepfood
		tobacco
		rx
		empty

		grocery.addEventListener("click",keyEntryForDepartmentsPopOut);
		produce
		floral
		beer
		telein
		groceryTax
		meat
		kosherMeat
		bottleDeposit
		hdIn
		generalmdse
		seafood
		sushi
		charity
		teleOut
		hbc
		bakery
		kosherDeli
		starbucks
		hdout
		deli
		prepfood
		tobacco
		rx
		empty
*/
	}
	// function to clear the main div for menus. Does not reset the register price list.
	function clear(){
		//registerBeep.load();
		//registerBeep.play();
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
		grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
		document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";
		manualEntryBoxActive = false;
		notOnFileScreenActive = false;
		document.querySelector("#bottomEnterItemCode").innerHTML = "";
	}

	//Manual Entry Box popout
	function keyEntryForDepartmentsPopOut(){
		manualEntryBoxActive = true;
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
		grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
		let createTheOutsideSectionForPopOut = document.createElement("section");
		createTheOutsideSectionForPopOut.id = "departmentInputPopout";

		createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Manual Entry</div>
													  <div id="departmentNumberDivInManualEntry">Department # ${this.value}</div>
													  <div id="departmentNameDivInManualEntry">${this.innerHTML}</div>
													  <div id="OuterDivForManualEntry">
													  	<div id="enterAmountDivInManualEntry">Enter Amount</div>
														<div id="priceInputInManualEntry">0.00</div>
													  </div>`;

		grabRegisterMainScreenDiv.appendChild(createTheOutsideSectionForPopOut);
		document.querySelector("#insideRegisterGrid1").style.backgroundColor = "gray";
	}
		function notOnFileScreen(){
			notOnFileScreenActive = true;
			let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
			grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
			let createTheOutsideSectionForPopOut = document.createElement("section");
			createTheOutsideSectionForPopOut.id = "departmentInputPopout";

			createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Not Found</div>
													  <div id="departmentNumberDivInManualEntry">Enter price / department</div>
													  <div id="departmentNameDivInManualEntry"></div>
													  <div id="OuterDivForManualEntry">
													  	<div id="enterAmountDivInManualEntry"></div>
														<div id="priceInputInManualEntry"></div>
													  </div>`;

			grabRegisterMainScreenDiv.appendChild(createTheOutsideSectionForPopOut);
			document.querySelector("#insideRegisterGrid1").style.backgroundColor = "gray";
	}










	// item lookup from enter button -----------------NEED TO FIX HOW THE LOOKUP OCCURS--------------










	function enterButtonPressPLULookup(){
		//registerBeep.load();
		//registerBeep.play();
		let itemNumber;
		let itemfound = false;
		//Manual Entry box is currently being displayed
		if(manualEntryBoxActive){
			itemNumber = document.querySelector("#priceInputInManualEntry");
			let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;
			document.querySelector("#itemDescription").innerHTML += departmentName + "<br>";
			document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
			document.querySelector("#priceOfProduct").innerHTML += "$" + itemNumber.innerHTML + "<br>";
			orderTotal += parseFloat(itemNumber.innerHTML);
			document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
			itemfound = true;
			manualEntryBoxActive = false;
			let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
			grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
			document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";

		}else{
			itemNumber = document.querySelector("#bottomEnterItemCode").innerHTML;
			let product = listOfProducts.product;
			for (const item of product) {
				if(itemNumber == item.PLU){
					document.querySelector("#itemDescription").innerHTML += `${item.description}<br>`;
					document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
					document.querySelector("#priceOfProduct").innerHTML += `$${item.price}<br>`;
					orderTotal += item.price;
					document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
					document.querySelector("#bottomEnterItemCode").innerHTML = "";
					itemfound = true;
				}	
			}

			
		}
		
	
		if(itemfound == false){
			notOnFileScreen();
		}

		if(lessonOne){
			lessonOneEnterButton(itemNumber);
		}else if(lessonTwo){
			lessonTwoEnterButton(itemNumber);
		}

		
	}











const listOfProducts = {
	"product": [
		{
			"PLU": 4173512345,
			"description": "PICS Pasta",
			"price": 1.25
		},
		{
			"PLU": 4173598765,
			"description": "PICS Candy",
			"price": 2.00
		},
		{
			"PLU": 4173511111,
			"description": "PICS Cheese",
			"price": 3.79
		},
		{
			"PLU":5002099902,
			"description": "Wild Good Ice Cream",
			"price": 5.99
		},
		{
			"PLU":2930701394,
			"description": "Trident Gum",
			"price": 1.39
		},
		{
			"PLU":72277600232,
			"description": "Applesauce",
			"price": 2.99
		},
		{
			"PLU":21065630373,
			"description": "Ground Beef",
			"price": 3.73
		},
		{
			"PLU": 21696900674,
			"description": "GNG DW Cheese",
			"price": 6.74
		}
	]
}



const lessons = {
	"lessonOne": {
		"lessonOneStepOne": {
			"steps": {
				"stepHeader": ["<h3>First we will learn how to enter a product by its UPC code when it won't scan.</h3>", 0],
				"image": ["<img class='imageW50H350' src='images/wildgoodUPC.jpeg'>",0],
				"stepOne": ["<p class='panimate'>1) Find the barcode on the product.</p>",500],
				"stepTwo": ["<p class='panimate'>2) Use the number pad to enter the UPC found on the barcode.</p>",2500],
				"stepThree": ["<p class='panimate'>3) Press the <span class='enterButtonStyle'>ENTER</span> button to complete the lookup.</p>",5500],
				"stepFour": ["<p class='panimate'>4) If the product is not found, press the <span class='cButtonStyle'>C</span> button to try again.</p>",8500]
			},
			"progressTimer": {
				"time":"11s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 11000
			}
		},
		"lessonOneStepTwo": {
			"steps":{
				"stepHeader": ["<h3>Great Work!</h3>",0],
				"stepOne": ["<p class='panimate'>Wild Good Ice Cream was added to your order.</p>",1000],
				"stepTwo": ["<p class='panimate'>lets try another one!</p>",4000],
				"image": ["<img class='imageW50H350' src='images/applesaucePLU.jpeg'>",5012],
				"stepThree": ["<p class='panimate'>Same as last time, use the number pad to enter the UPC and press <span class='enterButtonStyle'>ENTER</span>.</p>",6500],
				"stepFour": ["<p class='panimate'>If the product is not found, click the <span class='cButtonStyle'>C</span> button to clear your screen and try again.</p>",9500]
			},
			"progressTimer": {
				"time":"12.5s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 12500
			}
		},
		"lessonOneStepTwoFail": {
			"steps":{
				"stepHeader": ["<h3>Oops!</h3>",0],
				"stepOne": ["<p class='panimate'>The UPC you entered was not found.</p>",1000],
				"stepTwo": ["<p class='panimate'>Lets try again!</p>",4000], 
				"stepThree": ["<p class='panimate'>But remember, when the center digits do not work, include the leading digit.",5000],
				"image": ["<img class='imageW50H350' src='images/applesaucePLU.jpeg'>",8000],
				"stepFour": ["<p class='panimate'>First, click the <span class='cButtonStyle'>C</span> button to clear that Not Found box.</p>",9000],
				"stepFive": ["<p class='panimate'>After it's gone, use the number pad to enter the UPC and click <span class='enterButtonStyle'>ENTER</span>.</p>",12000]
			},
			"progressTimer": {
				"time":"14s",
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 14000
			}
		},
		"lessonOneStepThree": {
			"steps":{
				"stepHeader": ["<h3>Great Work!</h3>",0],
				"stepOne": ["<p class='panimate'>Applesauce was added to your order.</p>",1000],
				"stepTwo": ["<p class='panimate'><strong>Remember...</strong></p>",3000],
				"stepThree": ["<p class='panimate'>If the center digits do not work, try it again with the leading number.</p>",4500],
				"image": ["<img  src='images/keyEnterNormalUPC.jpg' height='300' width='90%'>",7500],
				"stepFour": ["<p class='panimate'>There are times when both methods will result in a Not Found error box.</p>",8000],
				"stepFive": ["<p class='panimate'>In this case, you will need to ask your supervisor for help.</p>",11000],
				"stepSix": ["<p class='panimate'>Press the <span class='continueButtonStyle'>Continue</span> button to proceed to the next lesson.</p>",13500]
			},
			"progressTimer": {
				"time":"15.5s"
			},
			"button": {
				"status": false,
				"time": 15500
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		}
	},
	"lessonTwo": {
		"lessonTwoStepOne": {
			"steps": {
				"stepHeader": ["<h3>Now we will learn how to enter a product with a scale label.</h3>", 0],
				"image": ["<img height='360' width='90%' src='images/keyInScaleLabel.jpg'>",0],
				"stepOne": ["<p class='panimate'>This is a Meat, Seafood, or Deli product that has a random weight.</p>",1000],
				"stepTwo": ["<p class='panimate'>In order to enter this UPC </p>",3500],
				"stepThree": ["<p class='panimate'>You need to enter in all but the last digit and click <span class='enterButtonStyle'>ENTER</span>.</p>",5000],
				"stepFour": ["<p class='panimate'>Give it a try with the UPC in the above picture.</p>",7200]

			},
			"progressTimer": {
				"time":"9.2s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 9200
			}
		},
		"lessonTwoStepTwo": {
			"steps": {
				"stepHeader": ["<h3>Great work!.</h3>", 0],
				"stepOne": ["<p class='panimate'>Ground Beef for $3.73 was added to the order.</p>",0],
				"image": ["<img height='300' width='90%' src='images/keyInScaleLabel.jpg'>",3000],
				"stepTwo": ["<p class='panimate'>Look closely at the last digits of this UPC, notice anything similar?</p>",4000],
				"stepThree": ["<p class='panimate'>If you exclude the very last digit, the final numbers are the price of the item!</p>",7000],
				"stepFour": ["<p class='panimate'>Now that we can identify a scale label, we know when to skip the last digit.</p>",10000],
				"stepFive": ["<p class='panimate'>Click the <span class='continueButtonStyle'>Continue</span> button to proceed.</p>",13000]
			},	

			"progressTimer": {
				"time":"15s",
			},
			"button": {
				"status": false,
				"time": 13000
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		},
		"lessonTwoStepThree":{
			"steps": {
				"stepHeader": ["<h3>What if...</h3>", 0],
				"stepOne": ["<p class='panimate'>Why are we keying in items that should normally scan?</p>",0],
				"stepTwo": ["<p class='panimate'>Practice!</p>",3000],
				"stepThree": ["<p class='panimate'>Because sooner or later you will encounter items like this:</p>",4000],
				"image": ["<img height='350' width='60%' src='images/brokenCheeseLabel.jpeg'>",5000],
				"stepFour": ["<p class='panimate'>Now that we know how to enter these UPC's, we are ready!</p>",8000],
				"stepFive": ["<p class='panimate'>Try it now!</p>",11000]
			},
			"progressTimer":{
				"time": "12s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 12000
			}
		},
		"lessonTwoStepFour":{
			"steps": {
				"stepHeader": ["<h3>Wonderful Job!</h3>", 0],
				"stepOne": ["<p class='panimate'>GNG DW Cheese for $6.74 is now added to the order.</p>",0],
				"stepTwo": ["<p class='panimate'>Remember, scale labels are used for random weight items</p>",3000],
				"stepThree": ["<p class='panimate'>and they can be from the Meat, Seafood, or Deli.</p>",5500],
				"stepFour": ["<p class='panimate'>Don't forget to skip the last digit when entering the UPC.</p>",8000],
				"image": ["<img height='280' width='80%' src='images/keyInScaleLabel.jpg'>",11000],
				"stepFive": ["<p class='panimate'>Click the <span class='continueButtonStyle'>Continue</span> button to proceed to the next lesson.</p>",12000]
			},
			"progressTimer":{
				"time": "15s",
			},
			"button": {
				"status": false,
				"time": 15000
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		}
		
	},
	"lessonThree": {
		"lessonThreeStepOne":{
			"steps": {
				"stepHeader": ["<h3>Meat products over $99.99.</h3>", 0],
				"stepOne": ["<p class='panimate'>Now that you are familer with scale labels</p>",0],
				"stepTwo": ["<p class='panimate'>we will look at very expense products from those departments.</p>",2500],
				"stepThree": ["<p class='panimate'>In store department scales are unable to print a barcode if the</p>",5500],
				"stepFour": ["<p class='panimate'>price of the item is $100.00 or more.</p>",8000],
				"image": ["<img height='280' width='80%' src='images/keyInMeatOver100.jpg'>",11000],
				"stepFive": ["<p class='panimate'></p>",12000]
			},
			"progressTimer":{
				"time": "14s",
			},
			"button": {
				"status": false,
				"time": 14000
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		}
	}															
}

function runLessons(lesson){
	let helpfulSection = document.querySelector("#rightPanelMainContent");
	helpfulSection.innerHTML = "";
	let progressBar = document.querySelector("#nextButtonAndProgressBarContainer > div");
	
	Object.entries(lesson.steps).forEach(([key, value]) => {

		setTimeout(() =>{ 
			let createADiv = document.createElement('div');
			createADiv.innerHTML = value[0];
			helpfulSection.appendChild(createADiv);
		}, value[1]);
	});

	setTimeout(() =>{ 
		document.querySelector("#nextButtonAndProgressBarContainer > button").disabled = lesson.button.status;
	}, lesson.button.time);

	progressBar.style.animation = `progressBar ${lesson.progressTimer.time} linear`;
	progressBar.style.removeProperty("animation");
	progressBar.offsetWidth;
	progressBar.style.animation = `progressBar ${lesson.progressTimer.time} linear`;

	document.querySelector("#numpadDiv15").style.pointerEvents = "none";
	document.querySelector("#numpadDiv15").style.opacity = "0.2";
	setTimeout(() =>{
		document.querySelector("#numpadDiv15").style.pointerEvents = lesson.enterButton.value;
		document.querySelector("#numpadDiv15").style.opacity = "1";
	}, lesson.enterButton.time);
	
}




function errorbox(title,content,image){
	let grabmain = document.querySelector("#mainWindow");
	let outerDiv = document.createElement("div");
	let register = document.querySelector("#registerDiv");
	outerDiv.id = "outerDivForErrorBox";
	outerDiv.innerHTML += `${title}`;
	outerDiv.innerHTML += `${image}`;
	outerDiv.innerHTML += `${content}`;
	outerDiv.addEventListener("click", closeErrorBox);
	grabmain.insertBefore(outerDiv,register);
}

function closeErrorBox(){
	let grabmain = document.querySelector("#mainWindow");
	let grabErrorDiv = document.querySelector("#outerDivForErrorBox");
	grabmain.removeChild(grabErrorDiv);
}



function lessonOneEnterButton(value){
			
			if(lessonOneStepOne){

				if(value == 5002099902){
					runLessons(lessons.lessonOne.lessonOneStepTwo);
					lessonOneStepTwo = true;	
					lessonOneStepOne = false;
					

				}
			}else if(lessonOneStepTwo){
				if(value == 72277600232){
					lessonOneStepTwo = false;
					lessonOneStepThree = true;
					lessonTwoStepOne = true;
					runLessons(lessons.lessonOne.lessonOneStepThree);
					lessonOne = false;
					lessonTwo = true;
				}
				else{
					runLessons(lessons.lessonOne.lessonOneStepTwoFail);
				}
			}	
		}



function lessonTwoEnterButton(value){
	if(lessonTwoStepOne){
		if(value == 21065630373){
		    lessonTwoStepOne = false;
			lessonTwoStepTwo = true;
			lessonTwoStepThree = true;
			runLessons(lessons.lessonTwo.lessonTwoStepTwo);
		}
	}else if(lessonTwoStepThree){
		if(value == 21696900674){
			lessonTwoStepOne = false;
			lessonTwoStepTwo = false;
			lessonTwoStepThree = false;
			lessonTwoStepFour = true;
			lessonThree = true;
			lessonThreeStepOne = true;
			runLessons(lessons.lessonTwo.lessonTwoStepFour)
		}
	}
}


