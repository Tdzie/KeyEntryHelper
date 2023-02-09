// const for elements
	const mainWindow = document.getElementById("mainWindow");
	const altWindow = document.getElementById("rightPanel");
	

// Variables to check what screen is active
let normalRegisterActive = false;

// register total
let orderTotal = 0.00;

	window.onload = () => {

		normalRegister();

	};






    function normalRegister(){

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
		document.getElementById("numpadDiv12").addEventListener("click", normalRegister);

		//Event listeners for number keys
		document.getElementById("numpadDiv1").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv2").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv3").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv4").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv5").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv6").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv7").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv8").addEventListener("click", numberPadButtonPress);		
		document.getElementById("numpadDiv9").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv10").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv11").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv14").addEventListener("click", numberPadButtonPress);
		document.getElementById("numpadDiv15").addEventListener("click", enterButtonPressPLULookup);

    }

	// item lookup from enter button
	function enterButtonPressPLULookup(){
		let itemNumber = document.querySelector("#bottomEnterItemCode").innerHTML;

		if(itemNumber == 41735){
			document.querySelector("#itemDescription").innerHTML += "PICS items<br>";
			document.querySelector("#FoodStampLogo").innerHTML += "F<br>";
			document.querySelector("#priceOfProduct").innerHTML += "$4.25<br>"
			orderTotal += 4.25;
			document.querySelector("#TotalEntryForTheRegister").innerHTML = `$${orderTotal.toFixed(2)}`;
		}
	}

	//Number Pad Functions
	function numberPadButtonPress(){
		document.getElementById("bottomEnterItemCode").innerHTML += this.innerHTML;
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
		document.querySelector("#insideRegisterGrid15").classList.add("hideDisplay");
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");

		
		for(let i = 1; i < 26; i++){
			let createDiv = document.createElement("div");
			createDiv.id = `departmentKeys${i}`;
			grabRegisterMainScreenDiv.appendChild(createDiv);
		}

		document.getElementById("departmentKeys1").innerHTML ="Grocery";
		document.getElementById("departmentKeys2").innerHTML ="Produce";
		document.getElementById("departmentKeys3").innerHTML ="Floral";
		document.getElementById("departmentKeys4").innerHTML ="Beer/Wine";
		document.getElementById("departmentKeys5").innerHTML ="Tele In";
		document.getElementById("departmentKeys6").innerHTML ="Grocery <br> Taxable";
		document.getElementById("departmentKeys7").innerHTML ="Meat";
		document.getElementById("departmentKeys8").innerHTML ="Kosher Meat";
		document.getElementById("departmentKeys9").innerHTML ="Bottle Deposit";
		document.getElementById("departmentKeys10").innerHTML ="H/D In";
		document.getElementById("departmentKeys11").innerHTML ="General Mdse";
		document.getElementById("departmentKeys12").innerHTML ="Seafood";
		document.getElementById("departmentKeys13").innerHTML ="Sushi";
		document.getElementById("departmentKeys14").innerHTML ="Charity";
		document.getElementById("departmentKeys15").innerHTML ="Tele Out";
		document.getElementById("departmentKeys16").innerHTML ="HBC";
		document.getElementById("departmentKeys17").innerHTML ="Bakery";
		document.getElementById("departmentKeys18").innerHTML ="Kosher Deli";
		document.getElementById("departmentKeys19").innerHTML ="Sarbucks";
		document.getElementById("departmentKeys20").innerHTML ="H/D Out";
		document.getElementById("departmentKeys21").innerHTML ="Deli";
		document.getElementById("departmentKeys22").innerHTML ="Prepaired Food";
		document.getElementById("departmentKeys23").innerHTML ="Tobacco";
		document.getElementById("departmentKeys24").innerHTML ="RX";
		document.getElementById("departmentKeys25").innerHTML ="";
		document.getElementById("insideRegisterGrid2").innerHTML = "";
		document.getElementById("insideRegisterGrid3").innerHTML = "";
		document.getElementById("insideRegisterGrid4").innerHTML = "";
		document.getElementById("insideRegisterGrid5").innerHTML = "";
		document.getElementById("insideRegisterGrid6").innerHTML = "";
		document.getElementById("insideRegisterGrid7").innerHTML = "";
		document.getElementById("insideRegisterGrid8").innerHTML = "";
		document.getElementById("insideRegisterGrid9").innerHTML = "";
		document.getElementById("insideRegisterGrid10").innerHTML = "";

		document.getElementById("departmentKeys1").addEventListener("click",keyEntryForDepartmentsPopOut);

	}

	function keyEntryForDepartmentsPopOut(){
		document.querySelector("#insideRegisterGrid15").classList.remove("hideDisplay");
		let grabRegisterMainScreenDiv = document.getElementById("insideRegisterGrid1");
		grabRegisterMainScreenDiv.innerHTML = ""; // Clear the deparments
		let createTheOutsideDivForPopOut = document.createElement("div");
		createTheOutsideDivForPopOut.id = "departmentInputPopout";
		grabRegisterMainScreenDiv.appendChild(createTheOutsideDivForPopOut);
	}




































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

	