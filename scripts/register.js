//REGISTER VARIABLES
var itemCount = 0;
var orderTotal = 0.00;


// Bool to direct the location of the number pad
var manualEntryBoxActive = false
var pluItemBoxActive = false;
// Not on file screen active
var notOnFileScreenActive = false;

// Variables to check what screen is active 
var normalRegisterActive = true;

//Main window for register
const $CONTAINER_FOR_MAIN_WINDOW = document.querySelector("#containerWindow");
const $MAIN_WINDOW_SELECTOR = document.getElementById("mainWindow");

// Register elements
const $REGISTER_MAIN_SCREEN = document.getElementById("insideRegisterGrid1");
const $PRODUCE_MANUAL_BUTTON = document.getElementById("insideRegisterGrid2");
const $SIGNOFF_VOID_BUTTON = document.getElementById("insideRegisterGrid3");
const $PLUSFORDEPT_DEPT_BUTTON = document.getElementById("insideRegisterGrid4");
const $LOCKSTATION_PRICECHECK_BUTTON = document.getElementById("insideRegisterGrid5");
const $ITEMDIS_ADV_BUTTON = document.getElementById("insideRegisterGrid6");
const $TAX_MANAGER_BUTTON = document.getElementById("insideRegisterGrid7");
const $NOSALE_ALTID_BUTTON = document.getElementById("insideRegisterGrid8");
const $MANUAL_SUBTOTAL_BUTTON = document.getElementById("insideRegisterGrid9");
const $VENDOR_SPECIAL_BUTTON = document.getElementById("insideRegisterGrid10");
const $REGISTER_CODE_DISPLAY = document.querySelector("#bottomEnterItemCode");
const $MORE_BUTTON = document.getElementById("moreDiv");
const $BACK_BUTTON = document.getElementById("backDiv");
const $CLEAR_BUTTON = document.getElementById("numpadDiv12");
const $NUMBERPAD_7 = document.getElementById("numpadDiv1");
const $NUMBERPAD_8 = document.getElementById("numpadDiv2");
const $NUMBERPAD_9 = document.getElementById("numpadDiv3");
const $NUMBERPAD_AT = document.getElementById("numpadDiv4");
const $NUMBERPAD_4 = document.getElementById("numpadDiv5");
const $NUMBERPAD_5 = document.getElementById("numpadDiv6");
const $NUMBERPAD_6 = document.getElementById("numpadDiv7");
const $NUMBERPAD_BACK = document.getElementById("numpadDiv8");
const $NUMBERPAD_1 = document.getElementById("numpadDiv9");
const $NUMBERPAD_2 = document.getElementById("numpadDiv10");
const $NUMBERPAD_3 = document.getElementById("numpadDiv11");
const $NUMBERPAD_DECIMAL = document.getElementById("numpadDiv13");
const $NUMBERPAD_0 = document.getElementById("numpadDiv14");
const $NUMBERPAD_ENTER = document.getElementById("numpadDiv15");

//Register Screen
const $ITEM_DESCRIPTION = document.querySelector("#itemDescription");
const $FOODSTAMP_DISPLAY = document.querySelector("#FoodStampLogo");
const $ITEM_PRICE = document.querySelector("#priceOfProduct");
const $REGISTER_TOTAL = document.querySelector("#TotalEntryForTheRegister");


//Add event for more and back div
$MORE_BUTTON.addEventListener("click", MoreScreenOnNormalRegister);
$BACK_BUTTON.addEventListener("click", MoreScreenOnNormalRegister);
$CLEAR_BUTTON.addEventListener("click", clear);

//Event listeners for number keys
$NUMBERPAD_7.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_8.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_9.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_4.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_5.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_6.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_BACK.addEventListener("click", backbutton);
$NUMBERPAD_1.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_2.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_3.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_0.addEventListener("click", numberPadButtonPress);
$NUMBERPAD_ENTER.addEventListener("click", enterButtonPressPLULookup);
$SIGNOFF_VOID_BUTTON.addEventListener("click", normalRegister);


// Register functions

// Change text when the more or back button is clicked
function MoreScreenOnNormalRegister() {
    if (normalRegisterActive) {
        $PRODUCE_MANUAL_BUTTON.innerHTML = "Manual Adjust";
        $SIGNOFF_VOID_BUTTON.innerHTML = "Sign Off";
        $PLUSFORDEPT_DEPT_BUTTON.innerHTML = "Dept";
        $LOCKSTATION_PRICECHECK_BUTTON.innerHTML = "Lock Station";
        $ITEMDIS_ADV_BUTTON.innerHTML = "Item Discounts";
        $TAX_MANAGER_BUTTON.innerHTML = "Tax Exempt";
        $NOSALE_ALTID_BUTTON.innerHTML = "No Sale";
        $MANUAL_SUBTOTAL_BUTTON.innerHTML = "Manual <br> Redemption";
        $VENDOR_SPECIAL_BUTTON.innerHTML = "Vendor Coupon";
        $PLUSFORDEPT_DEPT_BUTTON.addEventListener("click", showDepartments);
        normalRegisterActive = false;
    } else {
        $PRODUCE_MANUAL_BUTTON.innerHTML = "Produce";
        $SIGNOFF_VOID_BUTTON.innerHTML = "Void";
        $PLUSFORDEPT_DEPT_BUTTON.innerHTML = "PLU'S For Dept";
        $LOCKSTATION_PRICECHECK_BUTTON.innerHTML = "Price Inquiry";
        $ITEMDIS_ADV_BUTTON.innerHTML = "AdvantEdge";
        $TAX_MANAGER_BUTTON.innerHTML = "Manager Menu";
        $NOSALE_ALTID_BUTTON.innerHTML = "Alt ID";
        $MANUAL_SUBTOTAL_BUTTON.innerHTML = "Subtotal";
        $VENDOR_SPECIAL_BUTTON.innerHTML = "Special Functions";
        normalRegisterActive = true;
    }
}

//Number Pad Functions
//Used by all number pad buttons
function numberPadButtonPress() {
    //registerBeep.load(); TODO: Fix this
    //registerBeep.play(); TODO: Fix this
    let numbers = $REGISTER_CODE_DISPLAY.innerHTML;
    if (numbers.length < 14) {
        if (!notOnFileScreenActive) {
            if (manualEntryBoxActive || pluItemBoxActive)
                document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML, this.innerHTML);
            else
                $REGISTER_CODE_DISPLAY.innerHTML += this.innerHTML;
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
        $REGISTER_CODE_DISPLAY.innerHTML = $REGISTER_CODE_DISPLAY.innerHTML.slice(0, -1);
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
    $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
    $REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
    $REGISTER_CODE_DISPLAY.innerHTML = "";
    $ITEM_DESCRIPTION.innerHTML = "";
    $FOODSTAMP_DISPLAY.innerHTML = "";
    $ITEM_PRICE.innerHTML = "";
    $REGISTER_TOTAL.innerHTML = `$0.00`;
}

// function to clear the main div for menus. Does not reset the register price list.
//Used by the C button
function clear() {
    //registerBeep.load();
    //registerBeep.play();
    $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
    $REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
    manualEntryBoxActive = false;
    notOnFileScreenActive = false;
    pluItemBoxActive = false;
    $REGISTER_CODE_DISPLAY.innerHTML = "";
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
        $REGISTER_MAIN_SCREEN.appendChild(createDiv);
    }
}

//Manual Entry Box popout
// Used by the poducts marked as manual entry
function keyEntryForDepartmentsPopOut() {
    manualEntryBoxActive = true;
    $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
    let createTheOutsideSectionForPopOut = document.createElement("section");
    createTheOutsideSectionForPopOut.id = "departmentInputPopout";

    createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Manual Entry</div>
												  <div id="departmentNumberDivInManualEntry">Department # ${this.value}</div>
												  <div id="departmentNameDivInManualEntry">${this.innerHTML}</div>
												  <div id="OuterDivForManualEntry">
												  	<div id="enterAmountDivInManualEntry">Enter Amount</div>
												  	<div id="priceInputInManualEntry">0.00</div>
												  </div>`;

    $REGISTER_MAIN_SCREEN.appendChild(createTheOutsideSectionForPopOut);
    $REGISTER_MAIN_SCREEN.style.backgroundColor = "gray";
}

//Not on file popout
//Used by the products are not found in the enterButtonPressPLULookup() function
function notOnFileScreen() {
    notOnFileScreenActive = true;
    $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
    let createTheOutsideSectionForPopOut = document.createElement("section");
    createTheOutsideSectionForPopOut.id = "departmentInputPopout";

    createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Not Found</div>
												  <div id="departmentNumberDivInManualEntry">Enter price / department</div>
												  <div id="departmentNameDivInManualEntry"></div>
												  <div id="OuterDivForManualEntry">
													  <div id="enterAmountDivInManualEntry"></div>
													  <div id="priceInputInManualEntry"></div>
												  </div>`;

    $REGISTER_MAIN_SCREEN.appendChild(createTheOutsideSectionForPopOut);
    $REGISTER_MAIN_SCREEN.style.backgroundColor = "gray";
}

//PLU Item Box popout
//Used by products which require a PLU lookup
function pluItemBox(desc) {
    pluItemBoxActive = true;
    $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
    let createTheOutsideSectionForPopOut = document.createElement("section");
    createTheOutsideSectionForPopOut.id = "departmentInputPopout";

    createTheOutsideSectionForPopOut.innerHTML = `<div id="manualEntry">Manual Price</div>
													<div id="departmentNumberDivInManualEntry"></div>
													<div id="departmentNameDivInManualEntry">${desc}</div>
													<div id="OuterDivForManualEntry">
													<div id="enterAmountDivInManualEntry">New Price</div>
													<div id="priceInputInManualEntry">0.00</div>
													</div>`;

    $REGISTER_MAIN_SCREEN.appendChild(createTheOutsideSectionForPopOut);
    $REGISTER_MAIN_SCREEN.style.backgroundColor = "gray";
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
        $ITEM_DESCRIPTION.innerHTML += departmentName + "<br>";
        $FOODSTAMP_DISPLAY.innerHTML += "F<br>";
        $ITEM_PRICE.innerHTML += "$" + itemNumber.innerHTML + "<br>";
        itemCount++;
        orderTotal += parseFloat(itemNumber.innerHTML);
        $REGISTER_TOTAL.innerHTML = `$${orderTotal.toFixed(2)}`;
        itemfound = true;
        manualEntryBoxActive = false;
        $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
        $REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
        itemNumber = itemNumber.innerHTML;

    } else if (pluItemBoxActive) {
        itemfound = true;
        pluItemBoxActive = false;

        itemNumber = document.querySelector("#priceInputInManualEntry");
        let departmentName = document.querySelector("#departmentNameDivInManualEntry").innerHTML;

        $ITEM_DESCRIPTION.innerHTML += departmentName + "<br>";
        $FOODSTAMP_DISPLAY.innerHTML += "F<br>";
        $ITEM_PRICE.innerHTML += "$" + itemNumber.innerHTML + "<br>";
        itemCount++;
        orderTotal += parseFloat(itemNumber.innerHTML);
        $REGISTER_TOTAL.innerHTML = `$${orderTotal.toFixed(2)}`;
        $REGISTER_MAIN_SCREEN.innerHTML = ""; // Clear the deparments
        $REGISTER_MAIN_SCREEN.style.backgroundColor = "rgb(245, 245, 245)";
        $REGISTER_CODE_DISPLAY.innerHTML = "";
        itemNumber = itemNumber.innerHTML;

    } else {
        itemNumber = $REGISTER_CODE_DISPLAY.innerHTML;
        let product = PRODUCTS.product;
        for (const item of product) {
            if (itemNumber == item.PLU) {
                if (!item.manualPrice) {
                    $ITEM_DESCRIPTION.innerHTML += `${item.description}<br>`;
                    $FOODSTAMP_DISPLAY.innerHTML += "F<br>";
                    $ITEM_PRICE.innerHTML += `$${item.price}<br>`;
                    orderTotal += item.price;
                    $REGISTER_TOTAL.innerHTML = `$${orderTotal.toFixed(2)}`;
                    $REGISTER_CODE_DISPLAY.innerHTML = "";
                    itemCount++;

                } else {
                    pluItemBox(item.description);
                }

                itemfound = true;
            }
        }
    }

    if (itemCount > 15) {
        $ITEM_DESCRIPTION.innerHTML = $ITEM_DESCRIPTION.innerHTML.substring($ITEM_DESCRIPTION.innerHTML.indexOf("<br>") + 4);
        $FOODSTAMP_DISPLAY.innerHTML = $FOODSTAMP_DISPLAY.innerHTML.substring($FOODSTAMP_DISPLAY.innerHTML.indexOf("<br>") + 4);
        $ITEM_PRICE.innerHTML = $ITEM_PRICE.innerHTML.substring($ITEM_PRICE.innerHTML.indexOf("<br>") + 4);
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
    let numbers = $REGISTER_CODE_DISPLAY.innerHTML;
    if (numbers.length < 14) {
        if (!notOnFileScreenActive) {
            if (manualEntryBoxActive || pluItemBoxActive)
                document.querySelector("#priceInputInManualEntry").innerHTML = addToManualEntryPrice(document.querySelector("#priceInputInManualEntry").innerHTML, key);
            else
                $REGISTER_CODE_DISPLAY.innerHTML += key;
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


