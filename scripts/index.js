// const for elements
	const mainWindow = document.getElementById("mainWindow");
	const altWindow = document.getElementById("rightPanel");
	
//Lesson states
var lessonOne = true;
var lessonOneFirstFail = false;

// Variables to check what screen is active
let normalRegisterActive = false;

// register total
let orderTotal = 0.00;

// Bool to direct the location of the number pad
let manualEntryBoxActive = false
//Startup used to load the normal register setup
	window.onload = () => {
		normalRegister();

	};

//Button click event
document.querySelector("#nextButtonAndProgressBarContainer > button").addEventListener("click",selectLession);

function selectLession(){
	runLessons(lessons.lessonOne.lessonOneStepOne.steps);
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
		if(manualEntryBoxActive){
		document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML,this.innerHTML);
		}else(
		document.getElementById("bottomEnterItemCode").innerHTML += this.innerHTML
		)

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
		price = price.padStart(4, "0");
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
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
		grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
		document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";
		manualEntryBoxActive = false;
	}
	function keyEntryForDepartmentsPopOut(){

		manualEntryBoxActive = true;

		//document.querySelector("#insideRegisterGrid15").classList.remove("hideDisplay");
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
		//document.querySelector("#insideRegisterGrid15").style.visibility = "hidden";


	}


	// item lookup from enter button -----------------NEED TO FIX HOW THE LOOKUP OCCURS--------------
	function enterButtonPressPLULookup(){
		let itemNumber;
		//Manual Entry box is currently being displayed
		if(manualEntryBoxActive){
			itemNumber = document.querySelector("#priceInputInManualEntry");
			let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;
			document.querySelector("#itemDescription").innerHTML += departmentName + "<br>";
			document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
			document.querySelector("#priceOfProduct").innerHTML += "$" + itemNumber.innerHTML + "<br>";
			orderTotal += parseFloat(itemNumber.innerHTML);
			document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;

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
				}	
			}

			
		}
		
	
		

		manualEntryBoxActive = false;
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
		grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
		document.querySelector("#insideRegisterGrid1").style.backgroundColor = "rgb(245, 245, 245)";

		if(lessonOne){
			lessonOneEnterButton(itemNumber);
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
		},{
			"PLU":5002099902,
			"description": "Wild Good Ice Cream",
			"price": 5.99
		}
	]
}




















/*
setTimeout(() => {

	}, 2000);
*/

const lessons = {
	"lessonOne": {
		"lessonOneStepOne": {
			"steps": {
				"stepHeader": ["<h3>First we will learn how to enter a product by its UPC code when it won't scan.</h3>", 0],
				"image": ["<img class='imageW50H350' src='images/wildgoodUPC.jpeg'>",0],
				"stepOne": ["<p id='p1'>1) Find the barcode on the product.</p>",1000],
				"stepTwo": ["<p id='p2'>2) Use the number pad to enter the UPC found on the barcode.</p>",4000],
				"stepThree": ["<p id='p3'>3) Press the enter button to complete the lookup.</p>",7000],
				"stepFour": ["<p id='p4'>4) If the product is not found, press the C button to try again.</p>",10000],
			},
			"progressTimer": "14s"
		},
		"lessonOneStepTwo": {
			"steps":{
				"stepHeader": ["<h3>Great Work!</h3>",0],
				"stepTwo": ["<p id='p1'>Wild Good Ice Cream is now rung into your order.</p>",1000],
				"stepThree": ["<p id='p2'>lets try another one!</p>",4000],
				"image": ["<img class='imageW50H350' src='images/wildgoodUPC.jpeg'>",7000]
				
			}
		}
	},
}
/* 
function runLessons(lesson){
	document.querySelector("#numpadDiv15").style = "pointer-events: none;";
	let header = document.querySelector("#rightPanel > h3")
	header.innerHTML = lesson.stepOne;
	let helpfulSection = document.querySelector("#rightPanelMainContent");
	helpfulSection.innerHTML = "";
	const createAnImage = document.createElement("img");
	createAnImage.src = lesson.image;
	helpfulSection.appendChild(createAnImage);
	setTimeout(() => {let createAParagraph = document.createElement("p");
	createAParagraph.innerHTML = lesson.stepTwo;
	helpfulSection.appendChild(createAParagraph);}, 1000);
	setTimeout(() => {createAParagraph = document.createElement("p");
	createAParagraph.innerHTML = lesson.stepThree;
	helpfulSection.appendChild(createAParagraph);}, 4000);
	setTimeout(() => {createAParagraph = document.createElement("p");
	createAParagraph.innerHTML = lesson.stepFour;
	helpfulSection.appendChild(createAParagraph);}, 7000);
	setTimeout(() => {createAParagraph = document.createElement("p");
	createAParagraph.innerHTML = lesson.stepFive;
	helpfulSection.appendChild(createAParagraph);
	document.querySelector("#numpadDiv15").style = "pointer-events: auto;";}, 10000);
}
*/	
function runLessons(lesson){
	let helpfulSection = document.querySelector("#rightPanelMainContent");
	helpfulSection.innerHTML = "";
	let progressBar = document.querySelector("#nextButtonAndProgressBarContainer > div")
	Object.entries(lesson).forEach(([key, value]) => {

		setTimeout(() =>{ 
			let createADiv = document.createElement('div');
			createADiv.innerHTML = value[0];
			helpfulSection.appendChild(createADiv);
		}, value[1]);
	});

	progressBar.style.animation = `progressBar ${lesson.progressTimer} linear`
}


function errorbox(){
	let grabmain = document.querySelector("#mainWindow");
	let outerDiv = document.createElement("div");
	let register = document.querySelector("#registerDiv");
	outerDiv.id = "outerDivForErrorBox";
	outerDiv.innerHTML = "TESTING";
	grabmain.insertBefore(outerDiv,register);
}


function lessonOneEnterButton(value){
			if(value != 5002099902){
				if(!lessonOneFirstFail){
					errorbox();
					/*
					let createDivForFail = document.createElement("div");
					createDivForFail.id = "FailAlertBox";
					createDivForFail.innerHTML += `<p>Looks like you entered the incorrect UPC, try again.</p>`;
					*/
					//lessonOneFirstFail = true;
				}
			
			}else{
					lessonOneFirstFail = false;
					lessonOne = false;
					runLessons(lessons.lessonOne.lessonOneStepTwo.steps);
				}
		}


/*
	function whatIsKeyEntry(){
		let makeDiv = document.createElement("div");
		// Messages
		let firstMessage = "Key Entry is when the department keys are used to enter in a product.";
		let secondMessage = "While the customer is charged for the item, there is no data on what product is sold.";
		let thirdMessage = "Because we have no data, the margin cannot be created and the value of the entry is considered shrink, or a loss to the store.";
		
		let marginMessage = "<strong>What is sales margin?</strong> A sales margin calculation measures the amount of profit you make on the sale of a product or service after all costs related to the item are accounted for. The higher your sales margin, the higher your potential for profit on that product or service.";
		let shrinkMessage = "<strong>Shrink</strong> is the loss of inventory that can be attributed to factors such as employee theft, shoplifting, administrative error, vendor fraud, damage, and cashier error. Shrinkage is the difference between recorded inventory on a company's balance sheet and its actual inventory. This concept is a key problem for retailers, as it results in the loss of inventory, which ultimately means loss of profits.";
		


		//Timeout functions to load the messages
			setTimeout(() => {
				makeDiv= document.createElement("div");
				makeDiv.innerHTML = firstMessage;
				makeDiv.style.height = "150px";
				mainWindow.appendChild(makeDiv);
				makeDiv.style.height = "150px";
				makeDiv= document.createElement("div");
				makeDiv.innerHTML = "<img src='Grocery-page-001.jpg' alt='buttons for various departments'>";
				makeDiv.style.height = "150px";
				mainWindow.appendChild(makeDiv);


			}, 2000);
			
			setTimeout(() => {
				makeDiv= document.createElement("div");
				makeDiv.innerHTML = secondMessage;
				makeDiv.style.height = "150px";
				mainWindow.appendChild(makeDiv);
				makeDiv.style.height = "150px";
				makeDiv= document.createElement("div");
				makeDiv.innerHTML = "TODO insert image file";
				makeDiv.style.height = "150px";
				mainWindow.appendChild(makeDiv);
				makeDiv.style.height = "150px";
				makeDiv = document.createElement("div");
				makeDiv.innerHTML = marginMessage;
				altWindow.appendChild(makeDiv);	
			}, 5000);

			setTimeout(() => {
				makeDiv= document.createElement("div");
				makeDiv.innerHTML = thirdMessage;
				makeDiv.style.height = "150px";
				mainWindow.appendChild(makeDiv);
				makeDiv.style.height = "150px";
				makeDiv= document.createElement("div");
				makeDiv.innerHTML = "TODO insert image file";
				makeDiv.style.height = "150px";
				mainWindow.appendChild(makeDiv);
				makeDiv.style.height = "150px";
				makeDiv = document.createElement("div");
				makeDiv.innerHTML = shrinkMessage;
				altWindow.appendChild(makeDiv);	
			}, 9000);
	};

	*/