// -----------------------GLOBAL VARIABLES---------------------------------

//REGISTER VARIABLES
var itemCount = 0;
var orderTotal = 0.00;

//lesson variables
var stepFailCounter = 0;
var stepsPassed = 0;
var LessonCurrentStep = 0;
var failsAllowed = 3;
var lessonPassValue;
var numberOfLessons = 5;
var lessonEndIndex = 0;
var currentLessonNumber = 1;
var firstStepValue = 0;

//Lesson states
var twoStepLesson = false;
var onSecondStep = false;
var lessonActive = false;

//Array to hold the lesson steps
var lessonArray = [];

//Bool for zoomed image
var zoomedImageActive = false;

// Menu states
var menu = false;

// Bool to direct the location of the number pad
var manualEntryBoxActive = false
var pluItemBoxActive = false;

// Not on file screen active
var notOnFileScreenActive = false;

// Variables to check what screen is active ()
var normalRegisterActive = true;

// timing variables
var startTime, endTime, timeDiff;

// -----------------------END GLOBAL VARIABLES-------------------------


//------------------------MESSAGES-------------------------------------
// Lesson Menu
const LESSON_TITLE = `<h3 style="font-family: Quicksand;">Select a lesson</h3>`;
const LESSON_CONTENT = `<ol style="font-family: Quicksand;">
							<li id="lessonOneLink" onclick='selectLesson(1)' value="1"><span class="links">Normal UPC overview</span></li>
							<li id="lessonTwoLink" onclick='selectLesson(2)' value="2"><span class="links">Scale label overview</span></li>
							<li id="lessonThreeLink" onclick='selectLesson(3)' value="3"><span class="links">Meat Dept. product over $99.99</span></li>
							<li id="lessonFourLink" onclick='selectLesson(4)' value="4"><span class="links">Floral upgrade codes</span></li>
       						<li id="lessonFiveLink" onclick='selectLesson(5)' value="5"><span class="links">Grocery Markdown</span></li>
       						<li id="lessonSixLink" onclick='selectLesson(6)' value="6"><span class="links">Produce berries</span></li>
       						<li id="lessonSevenLink" onclick='selectLesson(7)' value="7"><span class="links">Final Review</span></li>
						</ol>`;


// Settings Menu
const SETTINGS_TITLE = `<h3 style="font-family: Quicksand;">Choose Your Settings</h3>`;
const SETTINGS_CONTENT = `<ul style="font-family: Quicksand;">
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
						<button type="button" style="font-family: Quicksand;" onclick="closeLandingPage()" class="btn btn-success">Close</button>`;
// Normal UPC Lesson info
const NORMAL_UPC_LESSON = `<div id="containerForGifAndImage">
							  <img src="images/normalUPCLesson.jpg" alt="Normal UPC">
							  <img src="images/normalUPCvid.gif" alt="displaying how to enter a upc on a register">
						  </div>`;


const INITIAL_LANDING_PAGE_TITLE = `<h1 style="font-family: Quicksand;">Key Entry Helper</h1>`;

const INITIAL_LANDING_PAGE_CONTENT = `<div id="container">
										<div id="left-section">
											<h2>For trainers</h2>
											<img src="trainer_image.jpg" alt="Trainer Image">
										</div>
										<div id="right-section">
											<h2>For cashiers</h2>
											<img src="cashier_image.jpg" alt="Cashier Image">
										</div>
									</div>`;


// -----------------------END MESSAGES---------------------------------




// -----------------------ELEMENTS---------------------------------
//Main window for register
const CONTAINER_FOR_MAIN_WINDOW =  document.querySelector("#containerWindow");
const MAIN_WINDOW_SELECTOR = document.getElementById("mainWindow");

//Main window for lessons
const ALT_WINDOW_SELECTOR = document.getElementById("rightPanel");

// Lesson elements
const LESSON_START_BUTTON = document.querySelector("#start");
const LESSON_TITLE_ELEMENT = document.querySelector("#rightHeader");
const LESSON_MAIN_CONTENT_ELEMENT = document.querySelector("#rightPanelMainContent");
const LESSON_ALT_CONTENT_ELEMENT = document.querySelector("#rightPanelAltContent");

// Register elements
const REGISTER_MAIN_SCREEN = document.getElementById("insideRegisterGrid1");
const PRODUCE_MANUAL_BUTTON = document.getElementById("insideRegisterGrid2");
const SIGNOFF_VOID_BUTTON =  document.getElementById("insideRegisterGrid3");
const PLUSFORDEPT_DEPT_BUTTON = document.getElementById("insideRegisterGrid4");
const LOCKSTATION_PRICECHECK_BUTTON = document.getElementById("insideRegisterGrid5");
const ITEMDIS_ADV_BUTTON = document.getElementById("insideRegisterGrid6");
const TAX_MANAGER_BUTTON = document.getElementById("insideRegisterGrid7");
const NOSALE_ALTID_BUTTON = document.getElementById("insideRegisterGrid8");
const MANUAL_SUBTOTAL_BUTTON = document.getElementById("insideRegisterGrid9");
const VENDOR_SPECIAL_BUTTON =  document.getElementById("insideRegisterGrid10");
const REGISTER_CODE_DISPLAY = document.querySelector("#bottomEnterItemCode");
const MORE_BUTTON = document.getElementById("moreDiv");
const BACK_BUTTON = document.getElementById("backDiv");
const CLEAR_BUTTON = document.getElementById("numpadDiv12");
const NUMBERPAD_7 = document.getElementById("numpadDiv1");
const NUMBERPAD_8 = document.getElementById("numpadDiv2");
const NUMBERPAD_9 = document.getElementById("numpadDiv3");
const NUMBERPAD_AT = document.getElementById("numpadDiv4");
const NUMBERPAD_4 = document.getElementById("numpadDiv5");
const NUMBERPAD_5 = document.getElementById("numpadDiv6");
const NUMBERPAD_6 = document.getElementById("numpadDiv7");
const NUMBERPAD_BACK = document.getElementById("numpadDiv8");
const NUMBERPAD_1 = document.getElementById("numpadDiv9");
const NUMBERPAD_2 = document.getElementById("numpadDiv10");
const NUMBERPAD_3 = document.getElementById("numpadDiv11");
const NUMBERPAD_DECIMAL = document.getElementById("numpadDiv13");
const NUMBERPAD_0 = document.getElementById("numpadDiv14");
const NUMBERPAD_ENTER = document.getElementById("numpadDiv15");

//Register Screen
const ITEM_DESCRIPTION = document.querySelector("#itemDescription");
const FOODSTAMP_DISPLAY = document.querySelector("#FoodStampLogo");
const ITEM_PRICE = document.querySelector("#priceOfProduct");
const REGISTER_TOTAL = document.querySelector("#TotalEntryForTheRegister");

// Menu buttons
const LESSON_MENU_BUTTON = document.querySelector("#lessonMenuButton");
const SETTINGS_MENU_BUTTON = document.querySelector("#settingsMenuButton");
const LOGO_MENU_BUTTON = document.querySelector("#Logo");

// Sound files
const REGISTER_BEEP_SOUND = new Audio('sounds/registerBeep.mp3');
// -----------------------END ELEMENTS---------------------------------


// -----------------------EVENT LISTENERS---------------------------------
//Add event for more and back div
MORE_BUTTON.addEventListener("click", MoreScreenOnNormalRegister);
BACK_BUTTON.addEventListener("click", MoreScreenOnNormalRegister);
CLEAR_BUTTON.addEventListener("click", clear);

//Event listeners for number keys
NUMBERPAD_7.addEventListener("click", numberPadButtonPress);
NUMBERPAD_8.addEventListener("click", numberPadButtonPress);
NUMBERPAD_9.addEventListener("click", numberPadButtonPress);
NUMBERPAD_4.addEventListener("click", numberPadButtonPress);
NUMBERPAD_5.addEventListener("click", numberPadButtonPress);
NUMBERPAD_6.addEventListener("click", numberPadButtonPress);
NUMBERPAD_BACK.addEventListener("click", backbutton);
NUMBERPAD_1.addEventListener("click", numberPadButtonPress);
NUMBERPAD_2.addEventListener("click", numberPadButtonPress);
NUMBERPAD_3.addEventListener("click", numberPadButtonPress);
NUMBERPAD_0.addEventListener("click", numberPadButtonPress);
NUMBERPAD_ENTER.addEventListener("click", enterButtonPressPLULookup);
SIGNOFF_VOID_BUTTON.addEventListener("click", normalRegister);
LESSON_START_BUTTON.addEventListener("click", () => { selectLesson(1); });
LESSON_MENU_BUTTON.addEventListener("click", () => { landingPage(LESSON_TITLE, LESSON_CONTENT);});
SETTINGS_MENU_BUTTON.addEventListener("click", () => { landingPage(SETTINGS_TITLE, SETTINGS_CONTENT); });
LOGO_MENU_BUTTON.addEventListener("click", () => { lessonPopup(NORMAL_UPC_LESSON); });
//-----------------------END EVENT LISTENERS---------------------------------


// -----------------------START-UP LOGIC-------------------------------------
	window.onload = () => {
		//normalRegister();
		//landingPage(INITIAL_LANDING_PAGE_TITLE, INITIAL_LANDING_PAGE_CONTENT);

};
// -----------------------END START-UP LOGIC---------------------------------


// -----------------------FUNCTIONS------------------------------------------

// Register functions

// Change text when the more or back button is clicked
function MoreScreenOnNormalRegister() {
	if (normalRegisterActive) {
		PRODUCE_MANUAL_BUTTON.innerHTML = "Manual Adjust";
		SIGNOFF_VOID_BUTTON.innerHTML = "Sign Off";
		PLUSFORDEPT_DEPT_BUTTON.innerHTML = "Dept";
		LOCKSTATION_PRICECHECK_BUTTON.innerHTML = "Lock Station";
		ITEMDIS_ADV_BUTTON.innerHTML = "Item Discounts";
		TAX_MANAGER_BUTTON.innerHTML = "Tax Exempt";
		NOSALE_ALTID_BUTTON.innerHTML = "No Sale";
		MANUAL_SUBTOTAL_BUTTON.innerHTML = "Manual <br> Redemption";
		VENDOR_SPECIAL_BUTTON.innerHTML = "Vendor Coupon";
		PLUSFORDEPT_DEPT_BUTTON.addEventListener("click", showDepartments);
		normalRegisterActive = false;
	} else {
		PRODUCE_MANUAL_BUTTON.innerHTML = "Produce";
		SIGNOFF_VOID_BUTTON.innerHTML = "Void";
		PLUSFORDEPT_DEPT_BUTTON.innerHTML = "PLU'S For Dept";
		LOCKSTATION_PRICECHECK_BUTTON.innerHTML = "Price Inquiry";
		ITEMDIS_ADV_BUTTON.innerHTML = "AdvantEdge";
		TAX_MANAGER_BUTTON.innerHTML = "Manager Menu";
		NOSALE_ALTID_BUTTON.innerHTML = "Alt ID";
		MANUAL_SUBTOTAL_BUTTON.innerHTML = "Subtotal";
		VENDOR_SPECIAL_BUTTON.innerHTML = "Special Functions";
		normalRegisterActive = true;
	}
}

//Number Pad Functions
//Used by all number pad buttons
function numberPadButtonPress() {
	//registerBeep.load(); TODO: Fix this
	//registerBeep.play(); TODO: Fix this
	let numbers = REGISTER_CODE_DISPLAY.innerHTML;
	if (numbers.length < 14) {
		if (!notOnFileScreenActive) {
			if (manualEntryBoxActive || pluItemBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML, this.innerHTML);
			else
				REGISTER_CODE_DISPLAY.innerHTML += this.innerHTML;
		}
	}
}



//Handle the manual entry input
function addToManualEntryPrice(currentPrice, NewDigit) {
	currentPrice = currentPrice.replace(".", "");
	currentPrice = currentPrice += NewDigit;
	if (currentPrice[0] == "0") {
		currentPrice = currentPrice.slice(1);
	}
	currentPrice = currentPrice.padStart(3, "0");
	if (currentPrice.length > 4) {
		currentPrice = currentPrice.slice(0, 3) + "." + currentPrice.slice(3, 5);
	} else if (currentPrice.length == 4) {
		currentPrice = currentPrice.slice(0, 2) + "." + currentPrice.slice(2, 4);
	} else if (currentPrice.length == 3) {
		currentPrice = currentPrice.slice(0, 1) + "." + currentPrice.slice(1, 3);
	} else {
		currentPrice = currentPrice.slice(0, 0) + "." + currentPrice.slice(0, 2);
	}

	if (currentPrice <= 999.99) {
		return currentPrice;
	} else {
		alert("TODO - Value is greater than the allowed amount of 999.99");
	}
}

//Backspace function
//Used by the < button
function backbutton() {
	if (manualEntryBoxActive || pluItemBoxActive) {
		document.querySelector("#priceInputInManualEntry").innerHTML = backspaceManualEntry(document.querySelector("#priceInputInManualEntry").innerHTML);
	} else {
		REGISTER_CODE_DISPLAY.innerHTML = REGISTER_CODE_DISPLAY.innerHTML.slice(0, -1);
	}
}
//Backspace function for manual entry screen
function backspaceManualEntry(price) {
	price = price.replace(".", "");
	price = price.slice(0, -1);
	price = price.padStart(3, "0");
	if (price.length > 4) {
		price = price.slice(0, 3) + "." + price.slice(3, 5);
	} else if (price.length == 4) {
		price = price.slice(0, 2) + "." + price.slice(2, 4);
	} else if (price.length == 3) {
		price = price.slice(0, 1) + "." + price.slice(1, 3);
	} else {
		price = price.slice(0, 0) + "." + price.slice(0, 2);
	}
	return price;

}
// Total reset for the register
//Used by the void button
function normalRegister() {
	itemCount = 0;
	orderTotal = 0.00;	
	manualEntryBoxActive = false;
	normalRegisterActive = true;
	notOnFileScreenActive = false;
	pluItemBoxActive = false;
	REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
	REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
	REGISTER_CODE_DISPLAY.innerHTML = "";
	ITEM_DESCRIPTION.innerHTML = "";
	FOODSTAMP_DISPLAY.innerHTML = "";
	ITEM_PRICE.innerHTML = "";
	REGISTER_TOTAL.innerHTML = `$0.00`;
}

// function to clear the main div for menus. Does not reset the register price list.
//Used by the C button
function clear() {
	//registerBeep.load();
	//registerBeep.play();
	REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
	REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
	manualEntryBoxActive = false;
	notOnFileScreenActive = false;
	pluItemBoxActive = false;
	REGISTER_CODE_DISPLAY.innerHTML = "";
}

// dept div click event to change the register and add the departments
//Used by the Dept button
function showDepartments() {
	for (let i = 1; i < 26; i++) {
		let createDiv = document.createElement("div");
		createDiv.id = `departmentKeys${i}`;
		createDiv.value = i;
		createDiv.addEventListener("click", keyEntryForDepartmentsPopOut);
		createDiv.innerHTML = DEPARTMENTS[i - 1];
		REGISTER_MAIN_SCREEN.appendChild(createDiv);
	}
}

//Manual Entry Box popout
// Used by the poducts marked as manual entry
function keyEntryForDepartmentsPopOut() {
	manualEntryBoxActive = true;
	REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
	let createTheOutsideSectionForPopOut = document.createElement("section");
	createTheOutsideSectionForPopOut.id = "departmentInputPopout";

	createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Manual Entry</div>
												  <div id="departmentNumberDivInManualEntry">Department # ${this.value}</div>
												  <div id="departmentNameDivInManualEntry">${this.innerHTML}</div>
												  <div id="OuterDivForManualEntry">
												  	<div id="enterAmountDivInManualEntry">Enter Amount</div>
												  	<div id="priceInputInManualEntry">0.00</div>
												  </div>`;

	REGISTER_MAIN_SCREEN.appendChild(createTheOutsideSectionForPopOut);
	REGISTER_MAIN_SCREEN.style.backgroundColor = "gray";
}

//Not on file popout
//Used by the products are not found in the enterButtonPressPLULookup() function
function notOnFileScreen() {
	notOnFileScreenActive = true;
	REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
	let createTheOutsideSectionForPopOut = document.createElement("section");
	createTheOutsideSectionForPopOut.id = "departmentInputPopout";

	createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Not Found</div>
												  <div id="departmentNumberDivInManualEntry">Enter price / department</div>
												  <div id="departmentNameDivInManualEntry"></div>
												  <div id="OuterDivForManualEntry">
													  <div id="enterAmountDivInManualEntry"></div>
													  <div id="priceInputInManualEntry"></div>
												  </div>`;

	REGISTER_MAIN_SCREEN.appendChild(createTheOutsideSectionForPopOut);
	REGISTER_MAIN_SCREEN.style.backgroundColor = "gray";
}

//PLU Item Box popout
//Used by products which require a PLU lookup
function pluItemBox(desc) {
	pluItemBoxActive = true;
	REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
	let createTheOutsideSectionForPopOut = document.createElement("section");
	createTheOutsideSectionForPopOut.id = "departmentInputPopout";

	createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Manual Price</div>
													<div id="departmentNumberDivInManualEntry"></div>
													<div id="departmentNameDivInManualEntry">${desc}</div>
													<div id="OuterDivForManualEntry">
													<div id="enterAmountDivInManualEntry">New Price</div>
													<div id="priceInputInManualEntry">0.00</div>
													</div>`;

	REGISTER_MAIN_SCREEN.appendChild(createTheOutsideSectionForPopOut);
	REGISTER_MAIN_SCREEN.style.backgroundColor = "gray";
}

//Main function for the PLU lookup
//Used by the Enter button
function enterButtonPressPLULookup() {
	//registerBeep.load();
	//registerBeep.play();
	let itemNumber;
	let itemfound = false;

	//Manual Entry box is currently being displayed
	if (manualEntryBoxActive) {
		itemNumber = document.querySelector("#priceInputInManualEntry");
		let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;
		ITEM_DESCRIPTION.innerHTML += departmentName + "<br>";
		FOODSTAMP_DISPLAY.innerHTML += "F<br>";
		ITEM_PRICE.innerHTML += "$" + itemNumber.innerHTML + "<br>";
		itemCount++;
		orderTotal += parseFloat(itemNumber.innerHTML);
		REGISTER_TOTAL.innerHTML = `$${orderTotal.toFixed(2)}`;
		itemfound = true;
		manualEntryBoxActive = false;
		REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
		REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
		itemNumber = itemNumber.innerHTML;

	} else if (pluItemBoxActive) {
		itemfound = true;
		pluItemBoxActive = false;

		itemNumber = document.querySelector("#priceInputInManualEntry");
		let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;

		ITEM_DESCRIPTION.innerHTML += departmentName + "<br>";
		FOODSTAMP_DISPLAY.innerHTML += "F<br>";
		ITEM_PRICE.innerHTML += "$" + itemNumber.innerHTML + "<br>";
		itemCount++;
		orderTotal += parseFloat(itemNumber.innerHTML);
		REGISTER_TOTAL.innerHTML = `$${orderTotal.toFixed(2)}`;
		REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
		REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
		REGISTER_CODE_DISPLAY.innerHTML = "";
		itemNumber = itemNumber.innerHTML;

	} else {
		itemNumber = REGISTER_CODE_DISPLAY.innerHTML;
		let product = PRODUCTS.product;
		for (const item of product) {
			if (itemNumber == item.PLU) {
				if (!item.manualPrice) {
					ITEM_DESCRIPTION.innerHTML += `${item.description}<br>`;
					FOODSTAMP_DISPLAY.innerHTML += "F<br>";
					ITEM_PRICE.innerHTML += `$${item.price}<br>`;
					orderTotal += item.price;
					REGISTER_TOTAL.innerHTML = `$${orderTotal.toFixed(2)}`;
					REGISTER_CODE_DISPLAY.innerHTML = "";
					itemCount++;

				} else {
					pluItemBox(item.description);
				}

				itemfound = true;
			}
		}
	}

	if (itemCount > 15) {
		ITEM_DESCRIPTION.innerHTML = ITEM_DESCRIPTION.innerHTML.substring(ITEM_DESCRIPTION.innerHTML.indexOf("<br>") + 4);
		FOODSTAMP_DISPLAY.innerHTML = FOODSTAMP_DISPLAY.innerHTML.substring(FOODSTAMP_DISPLAY.innerHTML.indexOf("<br>") + 4);
		ITEM_PRICE.innerHTML = ITEM_PRICE.innerHTML.substring(ITEM_PRICE.innerHTML.indexOf("<br>") + 4);
		itemCount--;
	}

	if (itemfound == false) {
		notOnFileScreen();
	}

	if (lessonActive) {
		lessonCheck(itemNumber);
	}
}

// functions to use the keyboard to enter the item code
function numberPadButtonKey(key) {
	//registerBeep.load();
	//registerBeep.play();
	let numbers = REGISTER_CODE_DISPLAY.innerHTML;
	if (numbers.length < 14) {
		if (!notOnFileScreenActive) {
			if (manualEntryBoxActive || pluItemBoxActive)
				document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML, key);
			else
				REGISTER_CODE_DISPLAY.innerHTML += key;
		}
	}
}

//Function to allow the user to use the keyboard to enter the item code
window.addEventListener("keydown", function (event) {
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
			selectLesson();
			break;
		default:
			break;
	}
});



// ------------------------- Lesson Functions ------------------------- //


// Randimizes the items in the lesson array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}


// Main lesson function to run the lessons
function runLessons(product) {
	LESSON_TITLE_ELEMENT.innerHTML = "";
	LESSON_TITLE_ELEMENT.innerHTML = `${LessonCurrentStep + 1} / ${lessonEndIndex + 1}`;

	LESSON_MAIN_CONTENT_ELEMENT.innerHTML = "";
	LESSON_MAIN_CONTENT_ELEMENT.innerHTML = `<img height="${product.height}" width="${product.width}" onclick='Helpbox("${product.image}")' src='${product.image}'>`;

	LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
	LESSON_ALT_CONTENT_ELEMENT.innerHTML = `<img class='h100w100' onclick='showHelp("${product.helper}")' src='images/clickforhelp.jpg'>`;

	if(product.UPCType == "Normal" || product.UPCType == "Scale" || product.UPCType == "FloralUpgrade" || product.UPCType == "Berries"){
		lessonPassValue = product.PLU;
	}else if (product.UPCType == "ScaleOver100"|| product.UPCType == "Markdown"){
		twoStepLesson = true;
		lessonPassValue = product.price;
		firstStepValue = product.PLU;
	}
}


// Main lesson function to check if user entered the correct value
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
				LESSON_TITLE_ELEMENT.innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
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
			LESSON_TITLE_ELEMENT.innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
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

// function to reset lesson variables

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

// Adds products to the lesson array based on the lesson number
function selectLesson(number) {
			lessonReset();
			currentLessonNumber = number;
			lessonActive = true;
	switch (number) {
		case 1:
			PRODUCTS.product.forEach(element => {
				if (element.UPCType == "Normal" && element.image != null) {
						lessonArray.push(element);
				}
			});
			break;
		case 2:
			PRODUCTS.product.forEach(element => {
				if (element.UPCType == "Scale" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		case 3:
			PRODUCTS.product.forEach(element => {
				if (element.UPCType == "ScaleOver100" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		case 4:
			PRODUCTS.product.forEach(element => {
				if (element.UPCType == "FloralUpgrade" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;
		case 5:
			PRODUCTS.product.forEach(element => {
				if (element.UPCType == "Markdown" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;

		case 6:
			PRODUCTS.product.forEach(element => {
				if (element.UPCType == "Berries" && element.image != null) {
					lessonArray.push(element);
				}
			});
			break;

		case 7:
			PRODUCTS.product.forEach(element => {
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

// converts lesson number to lesson name
function lessonNumberToName(lessonNumber) {
	switch (lessonNumber) {
		case 1:
			return `Lesson 1: Normal UPC Entry`;
		case 2:
			return `Lesson 2: Scale label Entry`;
		case 3:
			return `Lesson 3: Meat labels over $99.99`;
		case 4:
			return `Lesson 4: Floral Labels`;
		case 5:
			return `Lesson 5: Grocery Markdown labels`;
		case 6:
			return `Lesson 6: Produce Berries`;
		case 7:
			return `Lesson 7: Final Review`;
		default:
			return `Lesson ${lessonNumber}`;
	}
}
// converts lesson number to next lesson image
function lessonNumberToNextLessonImage(lessonNumber) {
	switch (lessonNumber) {
		case 1:
			return `images/keyEnterNormalUPC.jpg`;
		case 2:
			return `images/keyInScaleLabel.jpg`;
		case 3:
			return `images/keyInMeatOver100.jpg`;
		case 4:
			return `images/keyEnterFloralUpgrades.jpg`;
		case 5:
			return `images/GroceryMarkdowns.jpg`;
		case 6:
			return `images/ProduceBerryPLUs.jpg`;
		case 7:
			return `images/keyEnterNormalUPC.jpg`;
	}
}


// displays the lesson recap
function lessonRecap(lessonNumber){
	lessonActive = false;
	endTime = Date.now();

	const DIFFERENCE = endTime - startTime;
    const NEXT_LESSON = lessonNumber + 1;
	const MINUTES = Math.floor(DIFFERENCE / 60000);
	const SECONDS = ((DIFFERENCE % 60000) / 1000).toFixed(0);
	const RESULTS = `${MINUTES} minute(s) and ${SECONDS} second(s)`;
	const PASSED = stepsPassed / (lessonEndIndex + 1);
	const PERCENT = PASSED * 100;
	const DIFFICULTY = findDifficulty();

	LESSON_TITLE_ELEMENT.innerHTML = "";
	LESSON_TITLE_ELEMENT.innerHTML = `<h3>Lesson Recap</h3>`;
	if(lessonNumber<7){
		LESSON_MAIN_CONTENT_ELEMENT.innerHTML = "";
		LESSON_MAIN_CONTENT_ELEMENT.innerHTML = `<h4>Congratulations! You have completed ${lessonNumberToName(lessonNumber)}!</h4>
						<br>
					<h5>Your completion time was ${RESULTS}.</h5>
					<br>
					<h5>Your completion percentage was ${PERCENT}%.</h5>
					<br>
					<h5>Your difficulty was ${DIFFICULTY}.</h5>
			
					<br>
					<br>
					<br>
					<h5>If it was hard, or you want more practice on this subject:</h5>
					<br>
					<button class="btn btn-success" style="width: 75%" id="retryLessonOne">Retry ${lessonNumberToName(lessonNumber) }</button>`;
	
		document.querySelector("#retryLessonOne").addEventListener("click", () => { selectLesson(lessonNumber);});

		LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
		LESSON_ALT_CONTENT_ELEMENT.innerHTML = `<h5>If you understood it and want to proceed:</h5>
											<br>
											<button class="btn btn-success" style="width: 75%" id="startNextLesson">Continue to ${lessonNumberToName(NEXT_LESSON) }</button>`;
	
		document.querySelector("#startNextLesson").addEventListener("click", () => {selectLesson(NEXT_LESSON);});
	}else{
		LESSON_MAIN_CONTENT_ELEMENT.innerHTML = "";
		LESSON_MAIN_CONTENT_ELEMENT.innerHTML = `<h4>Congratulations! You have completed ${lessonNumberToName(lessonNumber)}!</h4>
						<br>
					<h5>Your completion time was ${RESULTS}.</h5>
					<br>
					<h5>Your completion percentage was ${PERCENT}%.</h5>
					<br>
					<h5>Your difficulty was ${DIFFICULTY}.</h5>
			
					<br>
					<br>
					<br>
					<h5>Click here to try again.</h5>
					<br>
					<button class="btn btn-success" style="width: 75%" id="retryLessonOne">Retry ${lessonNumberToName(7) }</button>`;
	
		document.querySelector("#retryLessonOne").addEventListener("click", () => { selectLesson(7);});
		LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
	}
	
}

// finds the current difficulty setting and returns it as a string
function findDifficulty(){
	switch (failsAllowed) {
		case 1:
			return "Hard";
		case 2:
			return "Medium";
		case 3:
			return "Easy";
	}
}

// sets the difficulty based on the radio button selected in the settings menu
function setDiff(difficulty){
	failsAllowed = difficulty;
}

//function used to create the lesson and settings menus
function landingPage(title,content){
	if (!menu){
		let outerDiv = document.createElement("div");
		let register = document.querySelector("#containerWindow > aside");
		outerDiv.id = "outerDivForErrorBox";
		outerDiv.innerHTML += `${title}`;
		outerDiv.innerHTML += `${content}`;
		if (title == `<h3 style="font-family: Quicksand;">Select a lesson</h3>` || title == `<h1 style="font-family: Quicksand;">Key Entry Helper</h1>`){
			outerDiv.addEventListener("click", closeLandingPage);
		}
		

		CONTAINER_FOR_MAIN_WINDOW.insertBefore(outerDiv,register);
		
		if (title == `<h3 style="font-family: Quicksand;">Choose Your Settings</h3>`){
			switch (failsAllowed) {
				case 1:
					document.querySelector("#btnradio3").checked = true;
					break;
				case 2:
					document.querySelector("#btnradio2").checked = true;
					break;
				case 3:
					document.querySelector("#btnradio1").checked = true;
					break;
				default:
					break;
			}
		}

		menu = true;

	}

}

function closeLandingPage(){
	menu = false;
	let grabErrorDiv = document.querySelector("#outerDivForErrorBox");
	CONTAINER_FOR_MAIN_WINDOW.removeChild(grabErrorDiv);
}




function lessonPopup(content){
	let outerDiv = document.createElement("div");
	let register = document.querySelector("#containerWindow > aside");
	outerDiv.id = "outerDivForErrorBox";
	outerDiv.innerHTML += `${content}`;
	outerDiv.addEventListener("click", closeLandingPage);
	CONTAINER_FOR_MAIN_WINDOW.insertBefore(outerDiv, register);
}

// flips the show help to the current job aide
function showHelp(src){
	LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
	let outerDiv = document.createElement("img");
	outerDiv.id = "showHelpImage";
	outerDiv.src = src;
	outerDiv.classList.add("h100w100");
	LESSON_ALT_CONTENT_ELEMENT.appendChild(outerDiv);	
}

function closeHelp(){
	let grabErrorDiv = document.querySelector("#showHelpImage");
	LESSON_ALT_CONTENT_ELEMENT.removeChild(grabErrorDiv);
}


function Helpbox(src){
	zoomedImageActive = true;
	let outerDiv = document.createElement("img");
	let register = LESSON_MAIN_CONTENT_ELEMENT;
	outerDiv.id = "outerDivForHelpBox";
	outerDiv.src = src;
	outerDiv.addEventListener("click", closeHelpBox);
	ALT_WINDOW_SELECTOR.insertBefore(outerDiv,register);
}

function closeHelpBox(){
	zoomedImageActive = false;
	let grabErrorDiv = document.querySelector("#outerDivForHelpBox");
	ALT_WINDOW_SELECTOR.removeChild(grabErrorDiv);
}
