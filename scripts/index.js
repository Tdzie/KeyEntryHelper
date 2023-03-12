//Variables for the landing page(s)

const lessonOneLandingPage = ``;

var itemCount = 0;
var itemChildIndex = 1;
// const for elements
	const mainWindow = document.getElementById("mainWindow");
	const altWindow = document.getElementById("rightPanel");

// sounds
let registerBeep = new Audio('sounds/registerBeep.mp3');


//Lesson states
var stepFailCounter = 0;
var stepsPassed = 0;

var LessonCurrentStep = 0;
var failsAllowed = 3;

var lessonPassValue;
var numberOfLessons = 5;
var lessonArray = [];
var lessonEndIndex = 0;

var currentLessonNumber = 1;

var twoStepLesson = false;
var firstStepValue = 0;
var onSecondStep = false;

var lessonActive = false;


// timing variables
var startTime, endTime, timeDiff;

// Tablet layout

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
	return array;
  }

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







    function normalRegister(){
		itemCount = 0;
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
		document.getElementById("insideRegisterGrid3").addEventListener("click", normalRegister);

    }

	//Number Pad Functions
	function numberPadButtonPress(){
		//registerBeep.load();
		//registerBeep.play();
		let numbers = document.querySelector("#bottomEnterItemCode").innerHTML;
		if(numbers.length < 14){
		if(!notOnFileScreenActive){
			if(manualEntryBoxActive || pluItemBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML,this.innerHTML);
			else
				document.getElementById("bottomEnterItemCode").innerHTML += this.innerHTML;
		}
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
			itemCount++;
			orderTotal += parseFloat(itemNumber.innerHTML);
			document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
			itemfound = true;
			manualEntryBoxActive = false;
			let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
			grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
			document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";
			itemNumber = itemNumber.innerHTML;

		}else if(pluItemBoxActive){
			itemNumber = document.querySelector("#priceInputInManualEntry");
			let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;
			document.querySelector("#itemDescription").innerHTML += departmentName + "<br>";
			document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
			document.querySelector("#priceOfProduct").innerHTML += "$" + itemNumber.innerHTML + "<br>";
			itemCount++;
			orderTotal += parseFloat(itemNumber.innerHTML);
			document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
			itemfound = true;
			pluItemBoxActive = false;
			let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
			grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
			document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";
			document.querySelector("#bottomEnterItemCode").innerHTML = "";
			itemNumber = itemNumber.innerHTML;

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
						itemCount++;
						
					}else{
						pluItemBox(item.description);
					}

					itemfound = true;
				}	
			}
		}
			
		if(itemfound == true){
			
		}


		if(itemCount > 15){
			let des = document.querySelector(`#itemDescription`);
			let fs = document.querySelector(`#FoodStampLogo`);
			let price = document.querySelector(`#priceOfProduct`);

			des.innerHTML = des.innerHTML.substring(des.innerHTML.indexOf("<br>")+4);
			fs.innerHTML = fs.innerHTML.substring(fs.innerHTML.indexOf("<br>")+4);
			price.innerHTML = price.innerHTML.substring(price.innerHTML.indexOf("<br>")+4);
			itemCount--;
		}
	
		if(itemfound == false){
			notOnFileScreen();
		}

		if(lessonActive){
			lessonCheck(itemNumber);
		}
		
		
	}

function runLessons(product) {

	
	let header = document.querySelector("#rightHeader");
	header.innerHTML = "";
	header.innerHTML = `Testing`;

	let main = document.querySelector("#rightPanelMainContent");
	main.innerHTML = "";
	main.innerHTML = `<img class='imageW50H350' onclick='${product.image}' src='${product.image}'>`;

	let alt = document.querySelector("#rightPanelAltContent");
	alt.innerHTML = "";
	alt.innerHTML = `<img class='h100w100' onclick='showHelp("${product.helper}")' src='images/clickforhelp.jpg'>`;

	
	if(product.UPCType == "Normal" || product.UPCType == "Scale" || product.UPCType == "FloralUpgrade" || product.UPCType == "Berries"){
		lessonPassValue = product.PLU;
	}else if (product.UPCType == "ScaleOver100"|| product.UPCType == "Markdown"){
		twoStepLesson = true;
		lessonPassValue = product.price;
		firstStepValue = product.PLU;
	}
}





function lessonCheck(value){
	if(!twoStepLesson){
			if (value == lessonPassValue) {
				if (zoomedImageActive) {
					closeHelpBox();
				}
				stepFailCounter = 0;
				LessonCurrentStep++;
				stepsPassed++;
				if(LessonCurrentStep <= lessonEndIndex){
					runLessons(lessonArray[LessonCurrentStep]);
				}else{
					lessonRecap(currentLessonNumber);
				}
			}else{
				stepFailCounter++;
				document.querySelector("#rightHeader").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
				if (stepFailCounter == failsAllowed) {
					if (zoomedImageActive) {
						closeHelpBox();
					}
					stepFailCounter = 0;
					LessonCurrentStep++;
					if(LessonCurrentStep <= lessonEndIndex){
						runLessons(lessonArray[LessonCurrentStep]);
					}else{
						lessonRecap(currentLessonNumber);
					}
				}
			}	
		
    }else{
		if (value != firstStepValue) {
			twoStepLesson = true;
			stepFailCounter++;
			document.querySelector("#rightHeader").innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
			if (stepFailCounter == failsAllowed) {
				if (zoomedImageActive) {
					closeHelpBox();
				}
				stepFailCounter = 0;
				LessonCurrentStep++;
				if (LessonCurrentStep <= lessonEndIndex) {
					runLessons(lessonArray[LessonCurrentStep]);
				} else {
					lessonRecap(currentLessonNumber);
				}
			}
		}else{
			twoStepLesson = false;
		}
	}
	
}

function lessonReset(){
	stepFailCounter = 0;
	stepsPassed = 0;
	LessonCurrentStep = 0;
	lessonArray = [];
	lessonEndIndex = 0;
	lessonPassValue = 0;
	currentLessonNumber = 1;
	twoStepLesson = false;
	firstStepValue = 0;
	onSecondStep = false;
}
//Lessons
function selectLesson(number) {
			lessonReset();
			currentLessonNumber = number;
			lessonActive = true;
	switch (number) {
		case 1:
			listOfProducts.product.forEach(element => {
				if (element.UPCType == "Normal" && element.image != null) {
						lessonArray.push(element);
				}
			});
			break;
		case 2:
			listOfProducts.product.forEach(element => {
				if (element.UPCType == "Scale" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		case 3:
			listOfProducts.product.forEach(element => {
				if (element.UPCType == "ScaleOver100" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		case 4:
			listOfProducts.product.forEach(element => {
				if (element.UPCType == "FloralUpgrade" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		case 5:
			listOfProducts.product.forEach(element => {
				if (element.UPCType == "Markdown" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;

		case 6:
			listOfProducts.product.forEach(element => {
				if (element.UPCType == "Berries" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;

		case 7:
			listOfProducts.product.forEach(element => {
				if (element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		default:
			break;
	}

	lessonArray = shuffleArray(lessonArray);
	lessonEndIndex = lessonArray.length - 1;
	startTime = Date.now();
	runLessons(lessonArray[0]);
}







const listOfProducts = {
	"product": [
		{
			"PLU": 4173512345,
			"description": "PICS Pasta",
			"price": 1.25,
			"manualPrice": false,
			"image": null,
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU": 4173598765,
			"description": "PICS Peanut Butter",
			"price": 2.00,
			"manualPrice": false,
			"image": null,
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU": 4173511111,
			"description": "PICS Cheese",
			"price": 3.79,
			"manualPrice": false,
			"image": null,
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU":85002099902,
			"description": "Wild Good Ice Cream",
			"price": 5.99,
			"manualPrice": false,
			"image": "images/wildgoodUPC.jpg",
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU":62930701394,
			"description": "Trident Gum",
			"price": 1.39,
			"manualPrice": false,
			"image": "images/tridentGum.jpg",
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU":72277600232,
			"description": "Applesauce",
			"price": 2.99,
			"manualPrice": false,
			"image": "images/applesauceUPC.jpg",
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU":21065630373,
			"description": "Ground Beef",
			"price": 3.73,
			"manualPrice": false,
			"image": null,
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 21696900674,
			"description": "GNG DW Cheese",
			"price": 6.74,
			"manualPrice": false,
			"image": "images/brokenCheeseLabel.jpeg",
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 688,
			"description": "CAB TENDERLOIN",
			"price": 140.14,
			"manualPrice": true,
			"image": "images/tender14014.jpg",
			"UPCType": "ScaleOver100",
			"helper": "images/keyInMeatOver100.jpg"
		},
		{
			"PLU": 201,
			"description": "Grocery Markdown",
			"price": 0.00,
			"manualPrice": true,
			"image": null,
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 204,
			"description": "Grocery Markdown Tax",
			"price": 0.00,
			"manualPrice": true,
			"image": null,
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 150,
			"description": "Grocery Discontinued",
			"price": 0.00,
			"manualPrice": true,
			"image": null,
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 35830,
			"description": "Floral Upgrade",
			"price": 49.99,
			"manualPrice": false,
			"image": null,
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 35833,
			"description": "Floral Upgrade",
			"price": 69.99,
			"manualPrice": false,
			"image": null,
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 4173558745,
			"description": "PICS Candy",
			"price": 2.99,
			"manualPrice": false,
			"image": "images/picsCandy.jpg",
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU": 4173525469,
			"description": "PICS Chocolate",
			"price": 1.99,
			"manualPrice": false,
			"image": "images/picsChocolate.jpg",
			"UPCType": "Normal",
			"helper": "images/keyEnterNormalUPC.jpg"
		},
		{
			"PLU": 20568190531,
			"description": "Chicken",
			"price": 5.31,
			"manualPrice": false,
			"image": "images/chicken531.jpg",
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 20159422674,
			"description": "Corned Beef",
			"price": 26.74,
			"manualPrice": false,
			"image": "images/cornedbeef2674.jpg",
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 21696940678,
			"description": "GNG DW Cheese",
			"price": 6.78,
			"manualPrice": false,
			"image": "images/delicheese678.jpg",
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 21653840439,
			"description": "Deli Ham",
			"price": 4.39,
			"manualPrice": false,
			"image": "images/deliham439.jpg",
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 20113990329,
			"description": "Ground Beef",
			"price": 3.29,
			"manualPrice": false,
			"image": "images/groundbeef329.jpg",
			"UPCType": "Scale",
			"helper": "images/keyInScaleLabel.jpg"
		},
		{
			"PLU": 598,
			"description": "CAB Rib Roast",
			"price": 120.17,
			"manualPrice": true,
			"image": "images/598rib12017.jpeg",
			"UPCType": "ScaleOver100",
			"helper": "images/keyInMeatOver100.jpg"
		},
		{
			"PLU": 583,
			"description": "BP Whole Tender",
			"price": 119.09,
			"manualPrice": true,
			"image": "images/583wholetender11909.jpeg",
			"UPCType": "ScaleOver100",
			"helper": "images/keyInMeatOver100.jpg"
		},
		{
			"PLU": 589,
			"description": "BP Roast",
			"price": 140.39,
			"manualPrice": true,
			"image": "images/589bproast14039.jpeg",
			"UPCType": "ScaleOver100",
			"helper": "images/keyInMeatOver100.jpg"
		},
		{
			"PLU": 684,
			"description": "CAB Beef",
			"price": 110.77,
			"manualPrice": true,
			"image": "images/684cabbeef11077.jpeg",
			"UPCType": "ScaleOver100",
			"helper": "images/keyInMeatOver100.jpg"
		},
		{
			"PLU": 35831,
			"description": "Floral Upgrade",
			"price": 54.99,
			"manualPrice": false,
			"image": "images/floral5499.jpeg",
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 35835,
			"description": "Floral Upgrade",
			"price": 89.99,
			"manualPrice": false,
			"image": "images/floral8999.jpeg",
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 35755,
			"description": "Floral Upgrade",
			"price": 29.99,
			"manualPrice": false,
			"image": "images/floral2999.jpeg",
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 35211,
			"description": "Floral Upgrade",
			"price": 46.99,
			"manualPrice": false,
			"image": "images/floral4699.jpeg",
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 35753,
			"description": "Floral Upgrade",
			"price": 26.99,
			"manualPrice": false,
			"image": "images/floral2699.jpeg",
			"UPCType": "FloralUpgrade",
			"helper": "images/keyEnterFloralUpgrades.jpg"
		},
		{
			"PLU": 150,
			"description": "Grocery Discontinued",
			"price": 2.91,
			"manualPrice": true,
			"image": "images/150291.jpeg",
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 150,
			"description": "Grocery Markdown",
			"price": 7.00,
			"manualPrice": true,
			"image": "images/201700.jpeg",
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 150,
			"description": "Grocery Discontinued",
			"price": 5.00,
			"manualPrice": true,
			"image": "images/150500.jpeg",
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 204,
			"description": "Grocery Markdown Tax",
			"price": 1.80,
			"manualPrice": true,
			"image": "images/204180.jpeg",
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 201,
			"description": "Grocery Discontinued",
			"price": 10.00,
			"manualPrice": true,
			"image": "images/2011000.jpeg",
			"UPCType": "Markdown",
			"helper": "images/GroceryMarkdowns.jpg"
		},
		{
			"PLU": 4247,
			"description": "Strawberries",
			"price": 3.33,
			"manualPrice": false,
			"image": "images/strawberry.jpeg",
			"UPCType": "Berries",
			"helper": "images/ProduceBerryPLUs.jpg"
		},
		{
			"PLU": 4240,
			"description": "Blueberries",
			"price": 3.33,
			"manualPrice": false,
			"image": "images/blueberry.jpeg",
			"UPCType": "Berries",
			"helper": "images/ProduceBerryPLUs.jpg"
		},
		{
			"PLU": 4239,
			"description": "Blackberries",
			"price": 3.33,
			"manualPrice": false,
			"image": "images/blackberry.jpeg",
			"UPCType": "Berries",
			"helper": "images/ProduceBerryPLUs.jpg"
		},
		{
			"PLU": 4054,
			"description": "Raspberries",
			"price": 3.33,
			"manualPrice": false,
			"image": "images/raspberry.jpeg",
			"UPCType": "Berries",
			"helper": "images/ProduceBerryPLUs.jpg"
		}
	]
}


function lessonRecap(lessonNumber){
	lessonActive = false;
	endTime = Date.now();
	const difference = endTime - startTime;

	// Convert milliseconds to minutes and seconds
	const minutes = Math.floor(difference / 60000);
	const seconds = ((difference % 60000) / 1000).toFixed(0);

	// Format the result into a string
	const result = `${minutes} minutes and ${seconds} seconds`;


	// caluculate the completion percentage
	const passed = stepsPassed / (lessonEndIndex + 1);
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

	document.querySelector("#retryLessonOne").addEventListener("click", () => { selectLesson(lessonNumber);});

	let alt = document.querySelector("#rightPanelAltContent");
	alt.innerHTML = "";
	alt.innerHTML = `<button id="startNextLesson">Launch Next Lesson</button>`;
	
	let nextLesson = lessonNumber + 1;
	document.querySelector("#startNextLesson").addEventListener("click", () => {selectLesson(nextLesson);});
}




const lessonTitle = `<h3>Select a lesson.</h3>`;
const lessonContent = `<ul>
							<li id="lessonOneLink" onclick='selectLesson(1)' value="1">Normal UPC overview</li>
							<li id="lessonTwoLink" onclick='selectLesson(2)' value="2">Scale label overview</li>
							<li id="lessonThreeLink" onclick='selectLesson(3)' value="3">Meat Dept. product over $99.99</li>
							<li id="lessonFourLink" onclick='selectLesson(4)' value="4">Floral upgrade codes</li>
       						<li id="lessonFiveLink" onclick='selectLesson(5)' value="5">Grocery Markdown</li>
       						<li id="lessonSixLink" onclick='selectLesson(6)' value="6">Produce berries</li>
       						<li id="lessonSevenLink" onclick='selectLesson(7)' value="7">Practice</li>
						</ul>`;

const settingsTitle = `<h3>Choose Your Settings.</h3>`;
const settingsContent = `<ul>
							<li>Difficulty</li>
							<li id="settingOneLink">
								<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
								<input type="radio" class="btn-check" name="btnradio" onclick='setDiff(3)' id="btnradio1" autocomplete="off" checked>
								<label class="btn btn-outline-primary" for="btnradio1">Easy</label>

								<input type="radio" class="btn-check" name="btnradio" onclick='setDiff(2)' id="btnradio2" autocomplete="off">
								<label class="btn btn-outline-primary" for="btnradio2">Medium</label>

								<input type="radio" class="btn-check" name="btnradio" onclick='setDiff(1)' id="btnradio3" autocomplete="off">
								<label class="btn btn-outline-primary" for="btnradio3">Hard</label>
								</div>
							</li>
						</ul>
						<button type="button" onclick="closeLandingPage()" class="btn btn-success">Close</button>`;

function setDiff(difficulty){
	failsAllowed = difficulty;
}
function landingPage(title,content){
	let grabmain = document.querySelector("#containerWindow");
	let outerDiv = document.createElement("div");
	let register = document.querySelector("#containerWindow > aside");
	outerDiv.id = "outerDivForErrorBox";
	outerDiv.innerHTML += `${title}`;
	outerDiv.innerHTML += `${content}`;
	if (title == "<h3>Select a lesson.</h3>"){
		outerDiv.addEventListener("click", closeLandingPage);
	}
	if(title == "<h3>Choose Your Settings.</h3>"){
		switch (failsAllowed) {
			case 1:
				document.querySelector("#btnradio3").checked = true;
				break;
			case 2:
				document.querySelector("#btnradio2").checked = true;
				break;
			case 3:
				document.querySelector("#btnradio1").checked = true;
			default:
				break;
		}
	}

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
	outerDiv.classList.add("h100w100");
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




function addEventsForLessons(){
// Event listener for the the quick links to the lessons

document.querySelector("#lessonOneLink").addEventListener("click", window.alert("Lesson One"));
document.querySelector("#lessonTwoLink").addEventListener("click", );
document.querySelector("#lessonThreeLink").addEventListener("click", );
document.querySelector("#lessonFourLink").addEventListener("click", );
document.querySelector("#lessonFiveLink").addEventListener("click", );
document.querySelector("#lessonSixLink").addEventListener("click", );
document.querySelector("#lessonSevenLink").addEventListener("click", );

}

document.querySelector("#start").addEventListener("click", () => { selectLesson(1); });
document.querySelector("#navbarNav > ul > li:nth-child(1) > a").addEventListener("click", () => { landingPage(lessonTitle, lessonContent); addEventsForLessons;});
document.querySelector("#navbarNav > ul > li:nth-child(2) > a").addEventListener("click", () => { landingPage(settingsTitle, settingsContent); });


function numberPadButtonKey(key){
		//registerBeep.load();
		//registerBeep.play();
	let numbers = document.querySelector("#bottomEnterItemCode").innerHTML;
	if (numbers.length < 14) {
		if(!notOnFileScreenActive){
			if(manualEntryBoxActive || pluItemBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML, key);
			else
				document.getElementById("bottomEnterItemCode").innerHTML += key;
		}
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


