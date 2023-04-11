
// Menu states
var menu = false;

const NORMALUPCLESSONLINK = "https://www.youtube.com/embed/VOjPaIt8nGg";
const SCALELESSONVIDEOLINK = "https://www.youtube.com/embed/yw41Mt2XbPk";

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
							  <iframe src="${SCALELESSONVIDEOLINK}" width="100%" height="100%"></iframe>
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





// -----------------------ELEMENTS---------------------------------

const $LESSON_START_BUTTON = document.querySelector("#start");

// Menu buttons
const $LESSON_MENU_BUTTON = document.querySelector("#lessonMenuButton");
const $SETTINGS_MENU_BUTTON = document.querySelector("#settingsMenuButton");
const $LOGO_MENU_BUTTON = document.querySelector("#Logo");

// Sound files
const $REGISTER_BEEP_SOUND = new Audio('sounds/registerBeep.mp3');


// -----------------------EVENT LISTENERS---------------------------------

$LESSON_START_BUTTON.addEventListener("click", () => { selectLesson(1); });
$LESSON_MENU_BUTTON.addEventListener("click", () => { landingPage(LESSON_TITLE, LESSON_CONTENT);});
$SETTINGS_MENU_BUTTON.addEventListener("click", () => { landingPage(SETTINGS_TITLE, SETTINGS_CONTENT); });
$LOGO_MENU_BUTTON.addEventListener("click", () => { lessonPopup(NORMAL_UPC_LESSON); });
//-----------------------END EVENT LISTENERS---------------------------------


// -----------------------START-UP LOGIC-------------------------------------
	window.onload = () => {
		//normalRegister();
		//landingPage(INITIAL_LANDING_PAGE_TITLE, INITIAL_LANDING_PAGE_CONTENT);

};



// -----------------------FUNCTIONS------------------------------------------



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
		

		$CONTAINER_FOR_MAIN_WINDOW.insertBefore(outerDiv,register);
		
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
	$CONTAINER_FOR_MAIN_WINDOW.removeChild(grabErrorDiv);
}




function lessonPopup(content){
	let outerDiv = document.createElement("div");
	let register = document.querySelector("#containerWindow > aside");
	outerDiv.id = "outerDivForErrorBox";
	outerDiv.innerHTML += `${content}`;
	outerDiv.addEventListener("click", closeLandingPage);
	$CONTAINER_FOR_MAIN_WINDOW.insertBefore(outerDiv, register);
}

