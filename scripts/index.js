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
var lessonThreeStepTwo = false;
var lessonThreeStepThree = false;
var lessonThreeStepFour = false;


var lessonFour = false;
var lessonFourStepOne = false;
var lessonFourStepTwo = false;
var lessonFourStepThree = false;
var lessonFourStepFour = false;

var lessonFive = false;
var lessonFiveStepOne = false;
var lessonFiveStepTwo = false;

var lessonSix = false;
var lessonSixStepOne = false;
var lessonSixStepTwo = false;



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

	};

//Button click event
document.querySelector("#nextButtonAndProgressBarContainer > button").addEventListener("click",selectLession);


//Lessons
function selectLession(){
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
			"PLU":5002099902,
			"description": "Wild Good Ice Cream",
			"price": 5.99,
			"manualPrice": false
		},
		{
			"PLU":2930701394,
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
		}
	]
}

const spanC = `<span class='cButtonStyle'>C</span>`;
const spanEnter = `<span class='enterButtonStyle'>ENTER</span>`;
const spanContinue = `<span class='continueButtonStyle'>CONTINUE</span>`;


const lessons = {
	"lessonOne": {
		"lessonOneStepOne": {
			"steps": {
				"stepHeader": ["<h3>First we will learn how to enter a product by its UPC code when it won't scan.</h3>", 0],
				"image": [`<img class='imageW50H350' onclick='Helpbox("images/wildgoodUPC.jpeg")' src='images/wildgoodUPC.jpeg'>`,0],
				"stepOne": ["<p class='panimate'>1) Find the barcode on the product.</p>",500],
				"stepTwo": ["<p class='panimate'>2) <strong>Use the number pad to enter the UPC found on the barcode.</strong></p>",2500],
				"stepThree": [`<p class='panimate'>3) <strong>Press the ${spanEnter} button to complete the lookup.</strong></p>`,5500],
				"stepFour": [`<p class='panimate'>4) If the product is not found, press the ${spanC} button to try again.</p>`,8500]
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
				"image": [`<img class='imageW50H350' onclick='Helpbox("images/applesaucePLU.jpeg")' src='images/applesaucePLU.jpeg'>`,5012],
				"stepThree": [`<p class='panimate'>Same as last time, use the number pad to enter the UPC and press ${spanEnter}.</p>`,6500],
				"stepFour": [`<p class='panimate'><strong>If the product is not found, click the ${spanC} button to clear your screen and try again.</strong></p>`,9500]
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
				"image": [`<img class='imageW50H350' onclick='Helpbox("images/applesaucePLU.jpeg")' src='images/applesaucePLU.jpeg'>`,8000],
				"stepFour": [`<p class='panimate'>First, click the ${spanC} button to clear that Not Found box.</p>`,9000],
				"stepFive": [`<p class='panimate'>After it's gone, <strong>use the number pad to enter the UPC and click ${spanEnter}.</strong></p>`,12000]
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
				"image": [`<img  src='images/keyEnterNormalUPC.jpg' onclick='Helpbox("images/keyEnterNormalUPC.jpg")' height='300' width='90%'>`,7500],
				"stepFour": ["<p class='panimate'>There are times when both methods will result in a Not Found error box.</p>",8000],
				"stepFive": ["<p class='panimate'>In this case, you will need to ask your supervisor for help.</p>",11000],
				"stepSix": [`<p class='panimate'><strong>Press the ${spanContinue} button to proceed to the next lesson.</strong></p>`,13500]
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
				"image": [`<img height='360' width='90%' onclick='Helpbox("images/keyInScaleLabel.jpg")' src='images/keyInScaleLabel.jpg'>`,0],
				"stepOne": ["<p class='panimate'>This is a Meat, Seafood, or Deli product that has a random weight.</p>",1000],
				"stepTwo": ["<p class='panimate'>In order to enter this UPC, </p>",3500],
				"stepThree": [`<p class='panimate'>You need to enter in all but the last digit and click ${spanEnter}.</p>`,4700],
				"stepFour": ["<p class='panimate'>Give it a try with the UPC in the above picture.</p>",7200],
				"stepFive": [`<p class='panimate'><strong>If you get a Not Found error box, click ${spanC} and try again.</strong></p>`,9200]

			},
			"progressTimer": {
				"time":"11.2s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 11200
			}
		},
		"lessonTwoStepTwo": {
			"steps": {
				"stepHeader": ["<h3>Great work!.</h3>", 0],
				"stepOne": ["<p class='panimate'>Ground Beef for $3.73 was added to the order.</p>",0],
				"image": [`<img height='300' width='90%' onclick='Helpbox("images/keyInScaleLabel.jpg")' src='images/keyInScaleLabel.jpg'>`,3000],
				"stepTwo": ["<p class='panimate'>Look closely at the last digits of this UPC, notice anything similar?</p>",4000],
				"stepThree": ["<p class='panimate'>If you exclude the very last digit, the final numbers are the price of the item!</p>",7000],
				"stepFour": ["<p class='panimate'>Now that we can identify a scale label, we know when to skip the last digit.</p>",10000],
				"stepFive": [`<p class='panimate'><strong>Click the ${spanContinue} button to proceed.</strong></p>`,13000]
			},	

			"progressTimer": {
				"time":"15s",
			},
			"button": {
				"status": false,
				"time": 15000
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		},
		"lessonTwoStepThree":{
			"steps": {
				"stepHeader": ["<h3>Are you ready?</h3>", 0],
				"stepOne": ["<p class='panimate'>Why are we keying in items that should normally scan?</p>",0],
				"stepTwo": ["<p class='panimate'>Practice!</p>",3000],
				"stepThree": ["<p class='panimate'>Because sooner or later you will encounter items like this:</p>",4000],
				"image": [`<img height='350' width='60%' onclick='Helpbox("images/brokenCheeseLabel.jpeg")' src='images/brokenCheeseLabel.jpeg'>`,7000],
				"stepFour": ["<p class='panimate'>Now that we know how to enter these UPC's, we are ready!</p>",8000],
				"stepFive": [`<p class='panimate'><strong>Try it now! Remember, if you get a Not Found error box, click ${spanC} and try again.</strong></p>`,11000]
			},
			"progressTimer":{
				"time": "14s"
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
		"lessonTwoStepFour":{
			"steps": {
				"stepHeader": ["<h3>Wonderful Job!</h3>", 0],
				"stepOne": ["<p class='panimate'>GNG DW Cheese for $6.74 is now added to the order.</p>",0],
				"stepTwo": ["<p class='panimate'>Remember, scale labels are used for random weight items</p>",3000],
				"stepThree": ["<p class='panimate'>and they can be from the Meat, Seafood, or Deli.</p>",5200],
				"stepFour": ["<p class='panimate'>Don't forget to skip the last digit when entering the UPC.</p>",7200],
				"image": [`<img height='280' width='80%' onclick='Helpbox("images/keyInScaleLabel.jpg")' src='images/keyInScaleLabel.jpg'>`,10000],
				"stepFive": [`<p class='panimate'><strong>Click the ${spanContinue} button to proceed to the next lesson.</strong></p>`,12000]
			},
			"progressTimer":{
				"time": "14s"
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
		
	},
	"lessonThree": {
		"lessonThreeStepOne":{
			"steps": {
				"stepHeader": ["<h3>Meat products over $99.99.</h3>", 0],
				"stepOne": ["<p class='panimate'>Now that you are familer with scale labels for random weight products.</p>",0],
				"stepTwo": ["<p class='panimate'>We will look at very expense products from the Meat Department.</p>",2500],
				"stepThree": ["<p class='panimate'>In-store department scales are unable to print a barcode if the</p>",5500],
				"stepFour": ["<p class='panimate'>price of the item is $100.00 or more.</p>",7800],
				"image": [`<img height='310' width='90%' onclick='Helpbox("images/tenderNoBarcode.jpg")' src='images/tenderNoBarcode.jpg'>`,10000],
				"stepFive": ["<p class='panimate'>See how this label has no barcode to scan?</p>",10500],
				"stepSix": ["<p class='panimate'>This is because the price is $140.14, which exceeds the limit for our scales.</p>",13000],
				"stepSeven": ["<p class='panimate'>We will need to <strong>find the 3 digit PLU</strong> that is located in the description</p>",16000],
				"stepEight": ["<p class='panimate'>and type it into the register to perform a lookup.</p>",18700],
				"stepNine": [`<p class='panimate'><strong>Confused? Press ${spanContinue} to for a little more information.</p>`,22000]
			},	

			"progressTimer": {
				"time":"24s",
			},
			"button": {
				"status": false,
				"time": 24000
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		},
		"lessonThreeStepTwo":{
			"steps": {
				"stepHeader": ["<h3>More Information</h3>", 0],
				"stepOne": ["<p class='panimate'>Take a look at this job aide.</p>",0],
				"stepTwo": [`<img height='250' width='80%' onclick='Helpbox("images/keyInMeatOver100.jpg")' src='images/keyInMeatOver100.jpg'>`,1500],
				"stepThree": ["<p class='panimate'>Look at the end of the discription, can you find the three digit PLU code?</p>",4000],
				"stepFour": ["<p class='panimate'>This is the number we will use to perform a lookup.</p>",7000],
				"stepFive": [`<p class='panimate'>Lets look back at the orginal item.</p>`,9000],
				"image": [`<img height='250' width='60%' onclick='Helpbox("images/tender14014.jpg")' src='images/tender14014.jpg'>`,10000],
				"stepFour": [`<p class='panimate'><strong>Use the number pad to enter the PLU and click ${spanEnter}</strong></p>`,12000]
			},
			"progressTimer":{
				"time": "14s"
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
		"lessonThreeStepThree":{
			"steps": {
				"stepHeader": ["<h3>Wonderful Job!</h3>", 0],
				"stepOne": ["<p class='panimate'>A pop-up box is now displayed for CAB BEEF TENDERLOIN.</p>", 0],
				"stepTwo": ["<p class='panimate'>The next step is to locate the PRICE of the product.</p>", 3000],
				"stepThree": ["<p class='panimate'>Lets look at that label again...</p>", 5500],
				"image": [`<img height='300' width='80%' onclick='Helpbox("images/tender14014.jpg")' src='images/tender14014.jpg'>`,7500],
				"stepThree": [`<p class='panimate'>Now use the number pad to enter the PRICE and press ${spanEnter}.</p>`, 10000]
				
			},
			"progressTimer":{
				"time": "13s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 13000
			}
		},
		"lessonThreeStepFour":{
			"steps": {
				"stepHeader": ["<h3>Now we're cooking with fire!</h3>", 0],
				"stepOne": ["<p class='panimate'>CAB TENDERLOIN for $140.14 is added to the order.</p>", 0],
				"stepTwo": ["<p class='panimate'>While the Meat department items have use this method to enter items over $99.99</p>", 3000],
				"stepThree": ["<p class='panimate'>The Seafood and Deli departments do not.</p>", 5500],
				"stepFour": ["<p class='panimate'>If you find one of these items, please call a supervisor to assist you.</p>", 7500],
				"stepFive": [`<p class='panimate'><strong>Click the ${spanContinue} button to proceed to the next lesson.</strong></p>`, 10000],
			},
			"progressTimer":{
				"time": "13s"
			},
			"button": {
				"status": false,
				"time": 13000
			},
			"enterButton": {
				"value": "all",
				"time": 0
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
				"stepFive": [`<p class='panimate'><strong>Click ${spanContinue} to see a example and to try it out!.</strong></p>`, 12500],
			},
			"progressTimer":{
				"time": "15s"
			},
			"button": {
				"status": false,
				"time": 15000
			},
			"enterButton": {
				"value": "all",
				"time": 0
			}
		},
		"lessonFourStepTwo":{
			"steps": {
				"stepHeader": ["<h3>How to enter a Grocery Markdown</h3>", 0],
				"image": [`<img height='500' width='60%' onclick='Helpbox("images/150code.jpg")' src='images/150code.jpg'>`,0],
				"stepOne": ["<p class='panimate'>Check out this discontinued item. </p>", 500],
				"stepTwo": ["<p class='panimate'>Do you see the PLU code on the markdown sticker?</p>", 2500],
				"stepThree": [`<p class='panimate'><strong>Enter the three digits after the @ symbol and press ${spanEnter}</strong></p>`, 4500],
			},
			"progressTimer":{
				"time": "7.5s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 7500
			}
		},
		"lessonFourStepThree":{
			"steps": {
				"stepHeader": ["<h3>Nice Work!</h3>", 0],
				"stepOne": ["<p class='panimate'>The pop-up display for Grocery Discontinued is active.</p>", 0],
				"image": [`<img height='500' width='60%' onclick='Helpbox("images/150code.jpg")' src='images/150code.jpg'>`,2500],
				"stepTwo": [`<p class='panimate'><strong>Enter the price of the item and press ${spanEnter}</strong></p>`, 3200],
			},
			"progressTimer":{
				"time": "6s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 6000
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
			},
			"progressTimer":{
				"time": "14.5s"
			},
			"button": {
				"status": false,
				"time": 14500
			},
			"enterButton": {
				"value": "all",
				"time": 0
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
			},
			"progressTimer":{
				"time": "13.5s"
			},
			"button": {
				"status": true,
				"time": 0
			},
			"enterButton": {
				"value": "all",
				"time": 13500
			}
		},
		"lessonFiveStepTwo":{
			"steps": {
				"stepHeader": ["<h3>Nice Work!</h3>", 0],
				"stepOne": ["<p class='panimate'>Floral Upgrade for $49.99 is added to your order.</p>", 0],
				"stepTwo": ["<p class='panimate'>While this was easy to enter. Sometimes the sticker is hard to find.</p>", 2800],
				"stepThree": ["<p class='panimate'>Be diligent and check the entire product, sometimes its on the bottom of the vase.</p>", 5800],
				"stepFour": [`<p class='panimate'><strong>Press ${spanContinue} to proceed to the nex lesson.</strong></p>`, 8800],
			},
			"progressTimer":{
				"time": "11.8s"
			},
			"button": {
				"status": false,
				"time": 11800
			},
			"enterButton": {
				"value": "all",
				"time": 0
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
			},
			"progressTimer":{
				"time": "15.5s"
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
	}


}










function runLessons(lesson){
	let helpfulSection = document.querySelector("#rightPanelMainContent");
	helpfulSection.innerHTML = "";
	let progressBar = document.querySelector("#nextButtonAndProgressBarContainer > div");
	document.querySelector("#nextButtonAndProgressBarContainer > button").disabled = true;
	
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



function lessonOneEnterButton(value){
			
			if(lessonOneStepOne){

				if(value == 5002099902){
					if(zoomedImageActive){
						closeHelpBox();
					}
					runLessons(lessons.lessonOne.lessonOneStepTwo);
					lessonOneStepTwo = true;	
					lessonOneStepOne = false;
					

				}
			}else if(lessonOneStepTwo){
				if(value == 72277600232){
					if(zoomedImageActive){
						closeHelpBox();
					}
					lessonOneStepTwo = false;
					lessonOneStepThree = true;
					lessonTwoStepOne = true;
					runLessons(lessons.lessonOne.lessonOneStepThree);
					lessonOne = false;
					lessonTwo = true;
				}
				else{
					if(zoomedImageActive){
						closeHelpBox();
					}
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
document.querySelector("#lessonOneLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonTwoLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonThreeLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonFourLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonFiveLink").addEventListener("click", startLessonFromLink);
document.querySelector("#lessonSixLink").addEventListener("click", startLessonFromLink);


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


