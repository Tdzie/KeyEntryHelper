//Variables for the landing page(s)

const lessonOneLandingPage = ``;


// const for elements
	const mainWindow = document.getElementById("mainWindow");
	const altWindow = document.getElementById("rightPanel");

// sounds
let registerBeep = new Audio('sounds/registerBeep.mp3');
const lessonOneStepOneAudio = new Audio('sounds/LessonOneStepOne.mp3');
const lessonOneStepTwoAudio = new Audio('sounds/LessonOneStepTwo.mp3');
const lessonOneStepThreeAudio = new Audio('sounds/LessonOneStepThree.mp3');
const lessonOneStepTwoFailAudio = new Audio('sounds/LessonOneStepTwoFail.mp3');
const lessonTwoStepOneAudio = new Audio('sounds/LessonTwoStepOne.mp3');
const lessonTwoStepTwoAudio = new Audio('sounds/LessonTwoStepTwo.mp3');
const lessonTwoStepThreeAudio = new Audio('sounds/LessonTwoStepThree.mp3');
const lessonTwoStepFourAudio = new Audio('sounds/LessonTwoStepFour.mp3');
const lessonThreeStepOneAudio = new Audio('sounds/LessonThreeStepOne.mp3');
const lessonThreeStepTwoAudio = new Audio('sounds/LessonThreeStepTwo.mp3');
const lessonThreeStepThreeAudio = new Audio('sounds/LessonThreeStepThree.mp3');
const lessonThreeStepFourAudio = new Audio('sounds/LessonThreeStepFour.mp3');

//Lesson states
var stepFailCounter = 0;
var stepsPassed = 0;

var LessonCurrentStep = 1;

var lessonOne = true;
var lessonTwo = false;
var lessonThree = false;
var lessonFour = false;
var lessonFive = false;
var lessonSix = false;


// timing variables
var startTime, endTime, timeDiff;

// Tablet layout

function tabletCss(){
	document.querySelector("body > header").classList.add("hideDisplay");
	document.querySelector("body > div > aside").classList.add("hideDisplay");

	document.querySelector("body > div").classList.remove("containerDiv");
	document.querySelector("body > div").classList.add("containerDivTablet");

}
// Variables to check what screen is active
let normalRegisterActive = false;

// register total
let orderTotal = 0.00;

// Bool to direct the location of the number pad
let manualEntryBoxActive = false
let pluItemBoxActive = false;
// Not on file screen active
let notOnFileScreenActive = false;



//Bool for zoomed image
let zoomedImageActive = false;
//Startup used to load the normal register setup
	window.onload = () => {
		normalRegister();
		//landingPage("Informaiton Title", "images/keyEnterNormalUPC.jpg", "Helpful Information");

	};




//Lessons
function selectLesson(){
	if(zoomedImageActive){
		closeHelpBox();
	}
	if(lessonSix){
		if(lessonSixStepOne){
			lessonSixStepOne = false;
			lessonSix = false;
			lessonSeven = true;
			lessonSevenStepOne = true;
			runLessons(lessons.lessonSeven.lessonSevenStepOne);
		}	
	}else if(lessonFive){
	
		if(lessonFiveStepTwo){
			lessonFiveStepOne = false;
			lessonFiveStepTwo = false;
			lessonFive = false;
			lessonSix = true;
			lessonSixStepOne = true;
			runLessons(lessons.lessonSix.lessonSixStepOne);
		}
	}else if(lessonFour){
	
		if(lessonFourStepOne){
			lessonFourStepOne = false;
			lessonFourStepTwo = true;
			runLessons(lessons.lessonFour.lessonFourStepOne);
		}else if(lessonFourStepTwo){
			runLessons(lessons.lessonFour.lessonFourStepTwo);
		}else if(lessonFourStepFour){
			lessonFourStepFour = false;
			lessonFour = false;
			lessonFive = true;
			lessonFiveStepOne = true;
			runLessons(lessons.lessonFive.lessonFiveStepOne);
		}
    }else if(lessonThree){
		if(lessonThreeStepTwo){
			lessonThreeStepOne = false;
			runLessons(lessons.lessonThree.lessonThreeStepTwo)
		}else if(lessonThreeStepOne){
			lessonTwo = false;
			
			lessonThreeStepTwo = true;
			runLessons(lessons.lessonThree.lessonThreeStepOne);

		}else if(lessonThreeStepFour){
			lessonThreeStepFour = false;
			lessonFourStepOne = true;
			lessonFour = true;
			runLessons(lessons.lessonFour.lessonFourStepOne);
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
		startTime = Date.now();
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
			if(manualEntryBoxActive || pluItemBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML,this.innerHTML);
			else
				document.getElementById("bottomEnterItemCode").innerHTML += this.innerHTML;
		}
	}

	//Handle the manual entry input
	function addToManualEntryPrice(currentPrice,NewDigit){
		currentPrice = currentPrice.replace(".", "");
		currentPrice = currentPrice += NewDigit;
		if(currentPrice[0] == "0"){
			currentPrice = currentPrice.slice(1);
		}
		currentPrice = currentPrice.padStart(3, "0");
		if(currentPrice.length > 4){
			currentPrice = currentPrice.slice(0, 3) + "." + currentPrice.slice(3, 5);
		}else if(currentPrice.length == 4){
			currentPrice = currentPrice.slice(0, 2) + "." + currentPrice.slice(2, 4);
		}else if(currentPrice.length == 3){
			currentPrice = currentPrice.slice(0, 1) + "." + currentPrice.slice(1, 3);
		}else{
			currentPrice = currentPrice.slice(0, 0) + "." + currentPrice.slice(0, 2);
		}

		if(currentPrice <= 999.99){
			return currentPrice;
		}else{
			alert("TODO - Value is greater than the allowed amount of 999.99");
		}

	
	}

	function backbutton(){
		if(manualEntryBoxActive || pluItemBoxActive){
			document.querySelector("#priceInputInManualEntry").innerHTML = backspaceManualEntry(document.querySelector("#priceInputInManualEntry").innerHTML);
		}else{
			document.getElementById("bottomEnterItemCode").innerHTML = document.getElementById("bottomEnterItemCode").innerHTML.slice(0, -1);
		}
	}

	function backspaceManualEntry(price){
		price = price.replace(".", "");
		price = price.slice(0, -1);
		price = price.padStart(3, "0");
		if(price.length > 4){
			price = price.slice(0, 3) + "." + price.slice(3, 5);
		}else if(price.length == 4){
			price = price.slice(0, 2) + "." + price.slice(2, 4);
		}else if(price.length == 3){
			price = price.slice(0, 1) + "." + price.slice(1, 3);
		}else{
			price = price.slice(0, 0) + "." + price.slice(0, 2);
		}
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
		pluItemBoxActive = false;
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



function pluItemBox(desc){
	pluItemBoxActive = true;
	let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
	grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
	let createTheOutsideSectionForPopOut = document.createElement("section");
	createTheOutsideSectionForPopOut.id = "departmentInputPopout";

	createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Manual Price</div>
													<div id="departmentNumberDivInManualEntry"></div>
													<div id="departmentNameDivInManualEntry">${desc}</div>
													<div id="OuterDivForManualEntry">
													<div id="enterAmountDivInManualEntry">New Price</div>
													<div id="priceInputInManualEntry">0.00</div>
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

		}else if(pluItemBoxActive){
			itemNumber = document.querySelector("#priceInputInManualEntry");
			let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;
			document.querySelector("#itemDescription").innerHTML += departmentName + "<br>";
			document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
			document.querySelector("#priceOfProduct").innerHTML += "$" + itemNumber.innerHTML + "<br>";
			orderTotal += parseFloat(itemNumber.innerHTML);
			document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
			itemfound = true;
			pluItemBoxActive = false;
			let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
			grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
			document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";
			document.querySelector("#bottomEnterItemCode").innerHTML = "";

			if(lessonThreeStepThree = true){
				if(itemNumber.innerHTML == "140.14"){
				lessonThreeStepThree = false;
				lessonThree = false;
				lessonFour = true;
				lessonFourStepOne = true;
				if(zoomedImageActive){
				closeHelpBox();
				}
				runLessons(lessons.lessonThree.lessonThreeStepFour);
				}
			}

			if(lessonFourStepThree){
				if(itemNumber.innerHTML == "2.91"){
					lessonFourStepThree = false;
					lessonFourStepFour = true;
				if(zoomedImageActive){
					closeHelpBox();
				}
				runLessons(lessons.lessonFour.lessonFourStepFour);
				}
			}
		}else{
			itemNumber = document.querySelector("#bottomEnterItemCode").innerHTML;
			let product = listOfProducts.product;
			for (const item of product) {
				if(itemNumber == item.PLU){
					if(!item.manualPrice){
						document.querySelector("#itemDescription").innerHTML += `${item.description}<br>`;
						document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
						document.querySelector("#priceOfProduct").innerHTML += `$${item.price}<br>`;
						orderTotal += item.price;
						document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
						document.querySelector("#bottomEnterItemCode").innerHTML = "";
					}else{
						pluItemBox(item.description);
					}

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
		}else if(lessonThree){
			lessonThreeEnterButton(itemNumber);
		}else if(lessonFour){
			lessonFourEnterButton(itemNumber);
		}else if(lessonFive){
			lessonFiveEnterButton(itemNumber);
		}
		
	}

// Lesson One Enter Button Function
function lessonOneEnterButton(value) {
	
	switch (LessonCurrentStep) {
		case 1:
			if(value == 85002099902){
				if(zoomedImageActive){
					closeHelpBox();
				}
				runLessons(lessons.lessonOne.lessonOneStepTwo);
				LessonCurrentStep = 2;
				stepsPassed++;
			}else{
				stepFailCounter++;
				document.querySelector("#rightHeader > h3").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
				if(stepFailCounter == 3){
					if(zoomedImageActive){
						closeHelpBox();
					}
					stepFailCounter = 0;
					LessonCurrentStep = 2;
					runLessons(lessons.lessonOne.lessonOneStepTwo);
				}
			}	
			break;
		case 2:
			if(value == 72277600232){
				if(zoomedImageActive){
					closeHelpBox();
				}
				runLessons(lessons.lessonOne.lessonOneStepThree);
				LessonCurrentStep = 3;
				stepsPassed++;
			}else{
				stepFailCounter++;
				document.querySelector("#rightHeader > h3").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
				if(stepFailCounter == 3){
					if(zoomedImageActive){
						closeHelpBox();
					}
					stepFailCounter = 0;
					LessonCurrentStep = 3;
					runLessons(lessons.lessonOne.lessonOneStepThree);
				}
			}
			break;
		case 3:
			if (value == 4173558745){
				if(zoomedImageActive){
					closeHelpBox();
				}
				runLessons(lessons.lessonOne.lessonOneStepFour);
				LessonCurrentStep = 4;
				stepsPassed++;
			}else{
				stepFailCounter++;
				document.querySelector("#rightHeader > h3").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
				if(stepFailCounter == 3){
					if(zoomedImageActive){
						closeHelpBox();
					}
					stepFailCounter = 0;
					LessonCurrentStep = 4;
					runLessons(lessons.lessonOne.lessonOneStepFour);
				}
			}
			break;
		case 4:
			if (value == 4173525469){
				if(zoomedImageActive){
					closeHelpBox();
				}
				runLessons(lessons.lessonOne.lessonOneStepFive);
				LessonCurrentStep = 5;
				stepsPassed++;
			}else{
				stepFailCounter++;
				document.querySelector("#rightHeader > h3").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
				if(stepFailCounter == 3){
					if(zoomedImageActive){
						closeHelpBox();
					}
					stepFailCounter = 0;
					LessonCurrentStep = 5;
					runLessons(lessons.lessonOne.lessonOneStepFive);
				}
			}
			break;
		case 5:
			if (value == 62930701394){
				if(zoomedImageActive){
					closeHelpBox();
				}
				endTime = Date.now();
				stepsPassed++;

				lessonOneRecap("One");
				lessonOne = false;
			}else{
				stepFailCounter++;
				document.querySelector("#rightHeader > h3").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
				if(stepFailCounter == 3){
					if(zoomedImageActive){
						closeHelpBox();
					}
					stepFailCounter = 0;
					endTime = Date.now();
					lessonOneRecap("One");
					lessonOne = false;
				}
			}
			break;

		default:
			break;
	}
}







const listOfProducts = {
	"product": [
		{
			"PLU": 4173512345,
			"description": "PICS Pasta",
			"price": 1.25,
			"manualPrice": false
		},
		{
			"PLU": 4173598765,
			"description": "PICS Candy",
			"price": 2.00,
			"manualPrice": false
		},
		{
			"PLU": 4173511111,
			"description": "PICS Cheese",
			"price": 3.79,
			"manualPrice": false
		},
		{
			"PLU":85002099902,
			"description": "Wild Good Ice Cream",
			"price": 5.99,
			"manualPrice": false
		},
		{
			"PLU":62930701394,
			"description": "Trident Gum",
			"price": 1.39,
			"manualPrice": false
		},
		{
			"PLU":72277600232,
			"description": "Applesauce",
			"price": 2.99,
			"manualPrice": false
		},
		{
			"PLU":21065630373,
			"description": "Ground Beef",
			"price": 3.73,
			"manualPrice": false
		},
		{
			"PLU": 21696900674,
			"description": "GNG DW Cheese",
			"price": 6.74,
			"manualPrice": false
		},
		{
			"PLU": 688,
			"description": "CAB TENDERLOIN",
			"price": 0.00,
			"manualPrice": true
		},
		{
			"PLU": 201,
			"description": "Grocery Markdown",
			"price": 0.00,
			"manualPrice": true
		},
		{
			"PLU": 204,
			"description": "Grocery Markdown Tax",
			"price": 0.00,
			"manualPrice": true
		},
		{
			"PLU": 150,
			"description": "Grocery Discontinued",
			"price": 0.00,
			"manualPrice": true
		},
		{
			"PLU": 35830,
			"description": "Floral Upgrade",
			"price": 49.99,
			"manualPrice": false
		},
		{
			"PLU": 35833,
			"description": "Floral Upgrade",
			"price": 69.99,
			"manualPrice": false
		},
		{
			"PLU": 4173558745,
			"description": "PICS Candy",
			"price": 2.99,
			"manualPrice": false
		},
		{
			"PLU": 4173525469,
			"description": "PICS Chocolate",
			"price": 1.99,
			"manualPrice": false
		},
	]
}

const spanC = `<span class='cButtonStyle'>C</span>`;
const spanEnter = `<span class='enterButtonStyle'>ENTER</span>`;
const spanContinue = `<span class='continueButtonStyle'>CONTINUE</span>`;


const lessons = {
	"lessonOne": {
		"lessonOneStepOne": { //runLessons(lessons.lessonOne.lessonOneStepOne)
			"steps": {
				"title": "<h3>1 of 5</h3>",
				"mainImage": `<img class='imageW50H350' onclick='Helpbox("images/wildgoodUPC.jpg")' src='images/wildgoodUPC.jpg'>`,
				"altImage": `<img class='imageW50H350' onclick='showHelp("images/keyEnterNormalUPC.jpg")' src='images/clickforhelp.jpg'>`,
			}

		},
		"lessonOneStepTwo": {//runLessons(lessons.lessonOne.lessonOneStepTwo)
			"steps":{
				"title": "<h3>2 of 5</h3>",
				"mainImage": `<img class='imageW50H350' onclick='Helpbox("images/applesauceUPC.jpg")' src='images/applesauceUPC.jpg'>`,
				"altImage": `<img class='imageW50H350' onclick='showHelp("images/keyEnterNormalUPC.jpg")' src='images/clickforhelp.jpg'>`,
			}
		},
		"lessonOneStepThree": {
			"steps":{
				"title": "<h3>3 of 5</h3>",
				"mainImage": `<img class='imageW50H350' onclick='Helpbox("images/picsCandy.jpg")' src='images/picsCandy.jpg'>`,
				"altImage": `<img class='imageW50H350' onclick='showHelp("images/keyEnterNormalUPC.jpg")' src='images/clickforhelp.jpg'>`,
			}
		},
		"lessonOneStepFour": {
			"steps":{
				"title": "<h3>4 of 5</h3>",
				"mainImage": `<img class='imageW50H350' onclick='Helpbox("images/picsChocolate.jpg")' src='images/picsChocolate.jpg'>`,
				"altImage": `<img class='imageW50H350' onclick='showHelp("images/keyEnterNormalUPC.jpg")' src='images/clickforhelp.jpg'>`,
			}
		},
		"lessonOneStepFive": {
			"steps":{
				"title": "<h3>5 of 5</h3>",
				"mainImage": `<img class='imageW50H350' onclick='Helpbox("images/tridentGum.jpg")' src='images/tridentGum.jpg'>`,
				"altImage": `<img class='imageW50H350' onclick='showHelp("images/keyEnterNormalUPC.jpg")' src='images/clickforhelp.jpg'>`,
			}
		}
	},
	"lessonTwo": {
		"lessonTwoStepOne": {
			"steps": {
				"title": "<h3>1 of 5</h3>",
				"mainImage": `<img class='imageW50H350' onclick='Helpbox("images/groundBeef.jpg")' src='images/groundBeef.jpg'>`,
				"altImage": `<img class='imageW50H350' onclick='showHelp("images/keyInScaleLabel.jpg")' src='images/clickforhelp.jpg'>`,

			}
		},
		"lessonTwoStepTwo": {
			"steps": {
				"stepHeader": ["<h3>Well done!</h3>", 0],
				"stepOne": ["<p class='panimate'>We have added Ground Beef to the order for $3.73.</p>",1000],
				"image": [`<img height='300' width='90%' onclick='Helpbox("images/keyInScaleLabel.jpg")' src='images/keyInScaleLabel.jpg'>`,3500],
				"stepTwo": ["<p class='panimate'>Observe the last digits of the UPC closely, do you see any similarities?</p>",6000],
				"stepThree": ["<p class='panimate'>If you omit the last digit, the remaining digits represent the price of the product!!</p>",10000],
				"stepFour": ["<p class='panimate'>Now that we can recognize a scale label, we know when to exclude the final digit.</p>",15000],
				"stepFive": [`<p class='panimate'><strong>Click on the ${spanContinue} button to move forward.</strong></p>`,20000]
			}
		},
		"lessonTwoStepThree":{
			"steps": {
				"stepHeader": ["<h3>Are you prepared?</h3>", 0],
				"stepOne": ["<p class='panimate'>Why are we manually entering items that are usually scanned?</p>",1000],
				"stepTwo": ["<p class='panimate'>It's all for practice!</p>",4000],
				"stepThree": ["<p class='panimate'>Because eventually, you will come across products like this:</p>",5800],
				"image": [`<img height='350' width='60%' onclick='Helpbox("images/brokenCheeseLabel.jpeg")' src='images/brokenCheeseLabel.jpeg'>`,8000],
				"stepFour": ["<p class='panimate'>Now that we are familiar with the process of entering these UPCs, this should be easy.</p>",9000],
				"stepFive": [`<p class='panimate'><strong>Give it a try now! And remember, </strong></p>`,14400],
				"stepSix": [`<p class='panimate'><strong>if you see a "Not Found" error message, click on ${spanC} to try again.</strong></p>`,15700]
			}
		},
		"lessonTwoStepFour":{
			"steps": {
				"stepHeader": ["<h3>Excellent work!</h3>", 0],
				"stepOne": ["<p class='panimate'>We have successfully added Deli Cheese for $6.74 to the order.</p>",1200],
				"stepTwo": ["<p class='panimate'>Please keep in mind that scale labels are utilized for products with unpredictable</p>",6200],
				"stepThree": ["<p class='panimate'>weights and they can belong to the Meat, Seafood, or Deli category.</p>",9000],
				"stepFour": ["<p class='panimate'>Remember to exclude the last digit when entering the UPC.</p>",15000],
				"image": [`<img height='280' width='80%' onclick='Helpbox("images/keyInScaleLabel.jpg")' src='images/keyInScaleLabel.jpg'>`,17000],
				"stepFive": [`<p class='panimate'><strong>Click the ${spanContinue} button to proceed to the next lesson.</strong></p>`,19000]
			}
		}
		
	},
	"lessonThree": {
		"lessonThreeStepOne":{
			"steps": {
				"stepHeader": ["<h3>Meat items priced over $99.99.</h3>", 0],
				"stepOne": ["<p class='panimate'>Now that you have learned about scale labels for random-weight products,</p>",4000],
				"stepTwo": ["<p class='panimate'>we will take a look at very expensive Meat Department items.</p>",7500],
				"stepThree": ["<p class='panimate'>If an item costs $100.00 or more,</p>",11000],
				"stepFour": ["<p class='panimate'>the in-store department scales cannot generate a barcode.</p>",13500],
				"image": [`<img height='310' width='90%' onclick='Helpbox("images/tenderNoBarcode.jpg")' src='images/tenderNoBarcode.jpg'>`,16000],
				"stepFive": ["<p class='panimate'>Observe how this label does not contain a barcode to scan.</p>",17000],
				"stepSix": ["<p class='panimate'>This is because the product's price is $140.14, surpassing the limit for our scales.</p>",21000],
				"stepSeven": ["<p class='panimate'>We must locate the 3-digit PLU code provided in the description</p>",27500],
				"stepEight": ["<p class='panimate'>and enter it into the register for a lookup.</p>",30000],
				"stepNine": [`<p class='panimate'><strong>Confused? Press the ${spanContinue} button, and we'll walk you through the process.</p>`,34000]
			}
		},
		"lessonThreeStepTwo":{
			"steps": {
				"stepHeader": ["<h3>More Information</h3>", 0],
				"stepOne": ["<p class='panimate'>Please take a moment to review the first step involved in this process.</p>",0],
				"stepTwo": [`<img height='250' width='80%' onclick='Helpbox("images/keyInMeatOver100.jpg")' src='images/keyInMeatOver100.jpg'>`, 1000],
				"stepThree": ["<p class='panimate'>At the end of the description, try to locate the PLU code consisting of three digits.</p>", 4600],
				"stepFour": ["<p class='panimate'>This code will be used to conduct a search.</p>", 10000],
				"stepFive": [`<p class='panimate'>Now, let's look at the orginal item.</p>`,13000],
				"image": [`<img height='250' width='60%' onclick='Helpbox("images/tender14014.jpg")' src='images/tender14014.jpg'>`,14000],
				"stepSix": [`<p class='panimate'><strong>Use the number pad to input the PLU and click ${spanEnter}</strong></p>`,15000]
			}
		},
		"lessonThreeStepThree":{
			"steps": {
				"stepHeader": ["<h3>Wonderful Job!</h3>", 0],
				"stepOne": ["<p class='panimate'>A pop-up box is now displayed for CAB BEEF TENDERLOIN.</p>", 1500],
				"stepTwo": ["<p class='panimate'>The next step is to find the PRICE of the product.</p>", 5000],
				"stepThree": ["<p class='panimate'>Let's review the label again to locate the price.</p>", 7700],
				"image": [`<img height='300' width='80%' onclick='Helpbox("images/tender14014.jpg")' src='images/tender14014.jpg'>`,8000],
				"stepFour": [`<p class='panimate'>Now that we know the price, use the number pad to enter the amount and press ${spanEnter}.</p>`, 10500]
				
			}
		},
		"lessonThreeStepFour":{
			"steps": {
				"stepHeader": ["<h3>You did it!</h3>", 0],
				"stepOne": ["<p class='panimate'>The order now includes CAB TENDERLOIN for $140.14. </p>", 1000],
				"stepTwo": ["<p class='panimate'>Please note that this method is used for entering Meat department items that cost </p>", 6200],
				"stepThree": ["<p class='panimate'>over $99.99, but it is not used for Seafood and Deli department items. </p>", 9200],
				"stepFour": ["<p class='panimate'>If you come across any of these items, kindly seek assistance from a supervisor. </p>", 17000],
				"stepFive": [`<p class='panimate'><strong>Click the ${spanContinue} button to move on to the next lesson.</strong></p>`, 22000],
			}
		}
				
				
	},
	"lessonFour":{
		"lessonFourStepOne":{
			"steps": {
				"stepHeader": ["<h3>How to enter a Grocery Markdown</h3>", 0],
				"stepOne": ["<p class='panimate'>What's a Grocery markdown?</p>", 0],
				"stepTwo": ["<p class='panimate'>When a product is damaged or discontinued, a markdown sticker is used.</p>", 2000],
				"stepThree": ["<p class='panimate'>The sticker will have a three digit PLU code and a hand written price.</p>", 5000],
				"image": [`<img height='400' width='80%' onclick='Helpbox("images/GroceryMarkdowns.jpg")' src='images/GroceryMarkdowns.jpg'>`,8000],
				"stepFour": [`<p class='panimate'>Just like Meat items over $99.99, enter the three digit PLU, then the price of the item. </p>`, 9000],
				"stepFive": [`<p class='panimate'><strong>Click ${spanContinue} to see a example and to try it out!</strong></p>`, 12500],
			}
		},
		"lessonFourStepTwo":{
			"steps": {
				"stepHeader": ["<h3>How to enter a Grocery Markdown</h3>", 0],
				"image": [`<img height='500' width='60%' onclick='Helpbox("images/150code.jpg")' src='images/150code.jpg'>`,0],
				"stepOne": ["<p class='panimate'>Check out this discontinued item. </p>", 500],
				"stepTwo": ["<p class='panimate'>Do you see the PLU code on the markdown sticker?</p>", 2500],
				"stepThree": [`<p class='panimate'><strong>Enter the three digits after the @ symbol and press ${spanEnter}</strong></p>`, 4500],
			}
		},
		"lessonFourStepThree":{
			"steps": {
				"stepHeader": ["<h3>Nice Work!</h3>", 0],
				"stepOne": ["<p class='panimate'>The pop-up display for Grocery Discontinued is active.</p>", 0],
				"image": [`<img height='500' width='60%' onclick='Helpbox("images/150code.jpg")' src='images/150code.jpg'>`,2500],
				"stepTwo": [`<p class='panimate'><strong>Enter the price of the item and press ${spanEnter}</strong></p>`, 3200],
			}
		},
		"lessonFourStepFour":{
			"steps": {
				"stepHeader": ["<h3>That's it!</h3>", 0],
				"stepOne": ["<p class='panimate'>Grocery Discontinued for $2.91 is now added to the order.</p>", 0],
				"stepTwo": ["<p class='panimate'>150, 201, and 204 are common codes for these stickers.</p>", 3000],
				"stepThree": ["<p class='panimate'>Be sure to use these codes ONLY when the sticker is present.</p>", 5500],
				"image": [`<img height='400' width='80%' onclick='Helpbox("images/GroceryMarkdowns.jpg")' src='images/GroceryMarkdowns.jpg'>`,8000],
				"stepFour": ["<p class='panimate'>These codes are not to be used to change the price of a product.</p>", 9000],
				"stepFive": [`<p class='panimate'><strong>Click the ${spanContinue} button to proceed to the next lesson.</strong></p>`, 11500],
			}
		}

	},
	"lessonFive":{
		"lessonFiveStepOne":{
			"steps": {
				"stepHeader": ["<h3>Now we will learn what a Floral Upgrade code is, and how to enter it.</h3>", 0],
				"stepOne": ["<p class='panimate'>What's a Floral Upgrade?</p>", 0],
				"stepTwo": ["<p class='panimate'>When a customer wants to upgrade a floral arrangement, a sticker is used.</p>", 2000],
				"image": [`<img height='400' width='80%' onclick='Helpbox("images/keyEnterFloralUpgrades.jpg")' src='images/keyEnterFloralUpgrades.jpg'>`,5000],
				"stepThree": ["<p class='panimate'>The sticker will have a five digit PLU code and a stamped price.</p>", 7000],
				"stepFour": ["<p class='panimate'>This one is really easy!</p>", 9000],
				"stepFive": [`<p class='panimate'><strong>Use the number pad to enter the five digits and press ${spanEnter}</strong></p>`, 10500],
			}
		},
		"lessonFiveStepTwo":{
			"steps": {
				"stepHeader": ["<h3>Nice Work!</h3>", 0],
				"stepOne": ["<p class='panimate'>Floral Upgrade for $49.99 is added to your order.</p>", 0],
				"stepTwo": ["<p class='panimate'>While this was easy to enter. Sometimes the sticker is hard to find.</p>", 2800],
				"stepThree": ["<p class='panimate'>You might also find a sheet like this.</p>", 5800],
				"image": [`<img height='400' width='50%' onclick='Helpbox("images/m32floral.jpg")' src='images/m32floral.jpg'>`,8000],
				"stepFour": [`<p class='panimate'>See PLU code on the bottom right? Remember to use that code for these products.</p>`, 8700],
				"stepFive": [`<p class='panimate'><strong>Press ${spanContinue} to proceed to the next lesson.</strong></p>`, 11700],
			}
		}
			
		
	},
	"lessonSix":{
		"lessonSixStepOne":{
			"steps": {
				"stepHeader": ["<h3>Lets take a look at containers of berries from Produce</h3>", 0],
				"stepOne": ["<p class='panimate'>Strawberries, Blueberries, Raspberries, and Blackberries are sold in containers.</p>", 0],
				"stepTwo": ["<p class='panimate'>Sometimes, the UPC for these items produce a Not Found error box.</p>", 3000],
				"stepThree": ["<p class='panimate'>Lucky for us, these products have a four digit code associated with them.</p>", 6000],
				"image": [`<img height='400' width='80%' onclick='Helpbox("images/ProduceBerryPLUs.jpg")' src='images/ProduceBerryPLUs.jpg'>`,9000],
				"stepFour": ["<p class='panimate'>In the next few examples, use the training aide to input the products.</p>", 10000],
				"stepFive": [`<p class='panimate'><strong>Press ${spanContinue} to get started!</strong></p>`, 13000],
			}
		}
	}


}

function lessonOneRecap(lessonNumber){
	const difference = endTime - startTime;

	// Convert milliseconds to minutes and seconds
	const minutes = Math.floor(difference / 60000);
	const seconds = ((difference % 60000) / 1000).toFixed(0);

	// Format the result into a string
	const result = `${minutes} minutes and ${seconds} seconds`;


	// caluculate the completion percentage
	const passed = stepsPassed / 5;
	const percent = passed * 100;

	let header = document.querySelector("#rightHeader");
	header.innerHTML = "";
	header.innerHTML = `<h3>Lesson ${lessonNumber} Recap</h3>`;

	let main = document.querySelector("#rightPanelMainContent");
	main.innerHTML = "";
	main.innerHTML = `<h3>Congratulations! You have completed Lesson ${lessonNumber}!</h3>
						<br>
					<p>Your completion time was ${result}.</p>
					<br>
					<p>Your completion percentage was ${percent}%.</p>
					<br>
					<button id="retryLessonOne">Retry this lesson.</button>`;

	document.querySelector("#retryLessonOne").addEventListener("click", ()=> {runLessonSelect(lessonNumber);});

	let alt = document.querySelector("#rightPanelAltContent");
	alt.innerHTML = "";
	alt.innerHTML = `<button id="startNextLesson">Launch Next Lesson</button>`;
	let nextLesson;
	switch (lessonNumber) {
		case "One":
			nextLesson = "Two";
			break;
		case "Two":
			nextLesson = "Three";
			break;
		case "Three":
			nextLesson = "Four";
			break;
		case "Four":
			nextLesson = "Five";
			break;
		case "Five":
			nextLesson = "Six";
			break;
	}
	document.querySelector("#startNextLesson").addEventListener("click", ()=> {runLessonSelect(nextLesson);});
}



function runLessonSelect(lessonNumber){
	switch (lessonNumber) {
		case "One":
				lessonOne = true;
				lessonTwo = false;
				lessonThree = false;
				lessonFour = false;
				lessonFive = false;
				lessonSix = false;

				stepFailCounter = 0;
				stepsPassed = 0;
				LessonCurrentStep = 1;

				startTime = Date.now();

				runLessons(lessons.lessonOne.lessonOneStepOne);
			break;
		case "Two":
				lessonTwo = true;
				lessonOne = false;
				lessonThree = false;
				lessonFour = false;
				lessonFive = false;
				lessonSix = false;

				stepFailCounter = 0;
				stepsPassed = 0;
				LessonCurrentStep = 1;

				startTime = Date.now();

				runLessons(lessons.lessonTwo.lessonTwoStepOne);
			break;
				
		default:
			break;
	}

}





function runLessons(lesson){
	let header = document.querySelector("#rightHeader");
	header.innerHTML = "";
	header.innerHTML = lesson.steps.title;

	let main = document.querySelector("#rightPanelMainContent");
	main.innerHTML = "";
	main.innerHTML = lesson.steps.mainImage;

	let alt = document.querySelector("#rightPanelAltContent");
	alt.innerHTML = "";
	alt.innerHTML = lesson.steps.altImage;
}



function landingPage(title,content,image){
	let grabmain = document.querySelector("#containerWindow");
	let outerDiv = document.createElement("div");
	let register = document.querySelector("#containerWindow > aside");
	outerDiv.id = "outerDivForErrorBox";
	outerDiv.innerHTML += `${title}`;
	outerDiv.innerHTML += `${image}`;
	outerDiv.innerHTML += `${content}`;
	outerDiv.addEventListener("click", closeLandingPage);
	grabmain.insertBefore(outerDiv,register);
}

function closeLandingPage(){
	let grabmain = document.querySelector("#containerWindow");
	let grabErrorDiv = document.querySelector("#outerDivForErrorBox");
	grabmain.removeChild(grabErrorDiv);
}

function showHelp(src){

	let grabmain = document.querySelector("#rightPanelAltContent");
	grabmain.innerHTML = "";
	let outerDiv = document.createElement("img");
	outerDiv.id = "showHelpImage";
	outerDiv.src = src;
	outerDiv.classList.add("imageW50H350");
	grabmain.appendChild(outerDiv);
}

function closeHelp(){
	let grabmain = document.querySelector("#rightPanelAltContent");
	let grabErrorDiv = document.querySelector("#showHelpImage");
	grabmain.removeChild(grabErrorDiv);
}


function Helpbox(src){
	zoomedImageActive = true;
	let grabmain = document.querySelector("#rightPanel");
	let outerDiv = document.createElement("img");
	let register = document.querySelector("#rightPanelMainContent");
	outerDiv.id = "outerDivForHelpBox";

	outerDiv.src = src;

	outerDiv.addEventListener("click", closeHelpBox);
	grabmain.insertBefore(outerDiv,register);
}

function closeHelpBox(){
	zoomedImageActive = false;
	let grabmain = document.querySelector("#rightPanel");
	let grabErrorDiv = document.querySelector("#outerDivForHelpBox");
	grabmain.removeChild(grabErrorDiv);
}






function lessonTwoEnterButton(value){
	if(lessonTwoStepOne){
		if(value == 21065630373){
		    lessonTwoStepOne = false;
			lessonTwoStepTwo = true;
			lessonTwoStepThree = true;
			if(zoomedImageActive){
				closeHelpBox();
			}
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
			if(zoomedImageActive){
				closeHelpBox();
			}
			runLessons(lessons.lessonTwo.lessonTwoStepFour)

		}
	}
}

function lessonThreeEnterButton(value){
	if(lessonThreeStepTwo){
		if(value == 688){
			lessonThreeStepTwo = false;
			lessonThreeStepThree = true;
			if(zoomedImageActive){
				closeHelpBox();
			}
			runLessons(lessons.lessonThree.lessonThreeStepThree);

		}
	}else if(lessonThreeStepThree){
		if(value == 14014){
			lessonThreeStepThree = false;
			lessonThree = false;
			lessonFour = true;
			lessonFourStepOne = true;
			if(zoomedImageActive){
				closeHelpBox();
			}
			runLessons(lessons.lessonThree.lessonThreeStepFour);
		}
	}
}

function lessonFourEnterButton(value){
	if(lessonFourStepTwo){
		if(value == 150){
			lessonFourStepTwo = false;
			lessonFourStepThree = true;
			if(zoomedImageActive){
				closeHelpBox();
			}
			runLessons(lessons.lessonFour.lessonFourStepThree);
		}
	}else if(lessonFourStepThree){
		if(value == 291){
			lessonFourStepThree = false;
			lessonFourStepFour = true;
			if(zoomedImageActive){
				closeHelpBox();
			}
			runLessons(lessons.lessonFour.lessonFourStepFour);
		}
	}
}


function lessonFiveEnterButton(value){
	if(lessonFiveStepOne){
		if(value == 35830){
			lessonFiveStepOne = false;
			lessonFiveStepTwo = true;
			if(zoomedImageActive){
				closeHelpBox();
			}
			runLessons(lessons.lessonFive.lessonFiveStepTwo);
		}
	}
}

function startLessonFromLink(){
	if(zoomedImageActive){
		closeHelpBox();
	}

	if(this.value == 1){
		lessonThree = false;
		lessonTwo = false;
		lessonOneStepOne = true;
		lessonOne = true;
		runLessons(lessons.lessonOne.lessonOneStepOne);	
	}else if(this.value == 2){
		lessonThree = false;
		lessonTwo = true;
		lessonOne = false;
		lessonTwoStepOne = true;
		runLessons(lessons.lessonTwo.lessonTwoStepOne);
	}else if(this.value == 3){
		lessonThree = true;
		lessonTwo = false;
		lessonOne = false;
		lessonThreeStepOne = true;
		runLessons(lessons.lessonThree.lessonThreeStepOne);
		lessonThreeStepOne = false;
		lessonThreeStepTwo = true;
	}else if(this.value == 4){
		lessonThree = false;
		lessonTwo = false;
		lessonOne = false;
		lessonFour = true;
		lessonFourStepTwo = true;
		lessonFourStepOne = false;
		runLessons(lessons.lessonFour.lessonFourStepOne);
	}else if(this.value == 5){
		lessonThree = false;
		lessonTwo = false;
		lessonOne = false;
		lessonFour = false;
		lessonFive = true;
		lessonFiveStepOne = true;
		runLessons(lessons.lessonFive.lessonFiveStepOne);
	}else if(this.value){
		lessonThree = false;
		lessonTwo = false;
		lessonOne = false;
		lessonFour = false;
		lessonFive = false;
		lessonSix = true;
		lessonSixStepOne = true;
		runLessons(lessons.lessonSix.lessonSixStepOne);
	}
	
}


// Event listener for the the quick links to the lessons
/*
document.querySelector("#lessonOneLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonTwoLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonThreeLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonFourLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonFiveLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonSixLink").addEventListener("click", startLessonFromLink);

*/

document.querySelector("#start").addEventListener("click", () => { runLessonSelect("One"); });




function numberPadButtonKey(key){
		//registerBeep.load();
		//registerBeep.play();
		if(!notOnFileScreenActive){
			if(manualEntryBoxActive || pluItemBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML, key);
			else
				document.getElementById("bottomEnterItemCode").innerHTML += key;
		}
	}



	//Function to allow the user to use the keyboard to enter the item code
window.addEventListener("keydown", function(event) {
  switch (event.key) {
	case "1":
		numberPadButtonKey(1);
		break;
	case "2":
		numberPadButtonKey(2);
		break;
	case "3":
		numberPadButtonKey(3);
		break;
	case "4":
		numberPadButtonKey(4);
		break;
	case "5":
		numberPadButtonKey(5);
		break;
	case "6":
		numberPadButtonKey(6);
		break;
	case "7":
		numberPadButtonKey(7);
		break;
	case "8":
		numberPadButtonKey(8);
		break;
	case "9":
		numberPadButtonKey(9);
		break;
	case "0":
		numberPadButtonKey(0);
		break;
	case "Enter":
		enterButtonPressPLULookup();
		break;
	case "Backspace":
		backbutton();
		break;
	case "Escape":
		clear();	
		break;
	case " ":
		selectLession();
		break;
	default:
		break;
  }
});


