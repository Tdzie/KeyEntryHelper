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

// timing variables
var startTime, endTime, timeDiff;



//Main window for lessons
const $ALT_WINDOW_SELECTOR = document.getElementById("rightPanel");

// Lesson elements

const $LESSON_TITLE_ELEMENT = document.querySelector("#rightHeader");
const $LESSON_MAIN_CONTENT_ELEMENT = document.querySelector("#rightPanelMainContent");
const $LESSON_ALT_CONTENT_ELEMENT = document.querySelector("#rightPanelAltContent");

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
    $LESSON_TITLE_ELEMENT.innerHTML = "";
    $LESSON_TITLE_ELEMENT.innerHTML = `${LessonCurrentStep + 1} / ${lessonEndIndex + 1}`;

    $LESSON_MAIN_CONTENT_ELEMENT.innerHTML = "";
    $LESSON_MAIN_CONTENT_ELEMENT.innerHTML = `<img height="${product.height}" width="${product.width}" onclick='Helpbox("${product.image}")' src='${product.image}'>`;

    $LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
    $LESSON_ALT_CONTENT_ELEMENT.innerHTML = `<div id="showHelpDiv" onclick='showHelp("${product.helper}")'>Click For Help!</div>`;

    if (product.UPCType == "Normal" || product.UPCType == "Scale" || product.UPCType == "FloralUpgrade" || product.UPCType == "Berries") {
        lessonPassValue = product.PLU;
    } else if (product.UPCType == "ScaleOver100" || product.UPCType == "Markdown") {
        twoStepLesson = true;
        lessonPassValue = product.price;
        firstStepValue = product.PLU;
    }
}


// Main lesson function to check if user entered the correct value
function lessonCheck(value) {
    if (!twoStepLesson) {
        if (value == lessonPassValue) {
            if (zoomedImageActive) {
                closeHelpBox();
            }
            stepFailCounter = 0;
            LessonCurrentStep++;
            stepsPassed++;
            if (LessonCurrentStep <= lessonEndIndex) {
                runLessons(lessonArray[LessonCurrentStep]);
            } else {
                lessonRecap(currentLessonNumber);
            }
        } else {
            stepFailCounter++;
            $LESSON_TITLE_ELEMENT.innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
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
        }

    } else {
        if (value != firstStepValue) {
            twoStepLesson = true;
            stepFailCounter++;
            $LESSON_TITLE_ELEMENT.innerHTML = `Try again. You have ${2 - stepFailCounter} more tries.`;
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
        } else {
            twoStepLesson = false;
        }
    }

}

// function to reset lesson variables

function lessonReset() {
    stepFailCounter = 0;
    stepsPassed = 0;
    LessonCurrentStep = 0;
    lessonArray = [];
    lessonEndIndex = 0;
    lessonPassValue = 0;
    currentLessonNumber = 1;
    firstStepValue = 0;
    twoStepLesson = false;
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
function lessonRecap(lessonNumber) {
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

    $LESSON_TITLE_ELEMENT.innerHTML = "";
    $LESSON_TITLE_ELEMENT.innerHTML = `<h3>Lesson Recap</h3>`;
    if (lessonNumber < 7) {
        $LESSON_MAIN_CONTENT_ELEMENT.innerHTML = "";
        $LESSON_MAIN_CONTENT_ELEMENT.innerHTML = `<h4>Congratulations! You have completed ${lessonNumberToName(lessonNumber)}!</h4>
						<br>
					<h5>Your completion time was ${RESULTS}.</h5>
					<br>
					<h5>Your completion percentage was ${PERCENT}%.</h5>
					<br>
					<h5>Your difficulty was ${DIFFICULTY}.</h5>
			
					<br>
					<br>
					<br>
					<h5>If the subject was difficult or you desire additional practice:</h5>
					<br>
					<button class="btn btn-success" style="width: 75%" id="retryLessonOne">Retry ${lessonNumberToName(lessonNumber)}</button>`;

        document.querySelector("#retryLessonOne").addEventListener("click", () => { selectLesson(lessonNumber); });

        $LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
        $LESSON_ALT_CONTENT_ELEMENT.innerHTML = `<h5>If you understood it and want to proceed:</h5>
											<br>
											<button class="btn btn-success" style="width: 75%" id="startNextLesson">Continue to ${lessonNumberToName(NEXT_LESSON)}</button>`;

        document.querySelector("#startNextLesson").addEventListener("click", () => { selectLesson(NEXT_LESSON); });
    } else {
        $LESSON_MAIN_CONTENT_ELEMENT.innerHTML = "";
        $LESSON_MAIN_CONTENT_ELEMENT.innerHTML = `<h4>Congratulations! You have completed ${lessonNumberToName(lessonNumber)}!</h4>
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
					<button class="btn btn-success" style="width: 75%" id="retryLessonOne">Retry ${lessonNumberToName(7)}</button>`;

        document.querySelector("#retryLessonOne").addEventListener("click", () => { selectLesson(7); });
        $LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
    }

}

// finds the current difficulty setting and returns it as a string
function findDifficulty() {
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
function setDiff(difficulty) {
    failsAllowed = difficulty;
    stepFailCounter = 0;

}

// flips the show help to the current job aide
function showHelp(src) {
    $LESSON_ALT_CONTENT_ELEMENT.innerHTML = "";
    let outerDivForImageAndButton = document.createElement("div");
    outerDivForImageAndButton.id = "outerDivForImageAndButton";


    let outerDiv = document.createElement("img");
    outerDiv.id = "showHelpImage";
    outerDiv.src = src;
    outerDiv.classList.add("h100w100");
    outerDivForImageAndButton.appendChild(outerDiv);

    let buttonForHelp = document.createElement("button");
    buttonForHelp.id = "buttonForHelp";
    buttonForHelp.innerHTML = "Need more help?";
    outerDivForImageAndButton.appendChild(buttonForHelp);

    $LESSON_ALT_CONTENT_ELEMENT.appendChild(outerDivForImageAndButton);
}

function closeHelp() {
    let grabErrorDiv = document.querySelector("#showHelpImage");
    $LESSON_ALT_CONTENT_ELEMENT.removeChild(grabErrorDiv);
}


function Helpbox(src) {
    zoomedImageActive = true;
    let outerDiv = document.createElement("img");
    let register = $LESSON_MAIN_CONTENT_ELEMENT;
    outerDiv.id = "outerDivForHelpBox";
    outerDiv.src = src;
    outerDiv.addEventListener("click", closeHelpBox);
    $ALT_WINDOW_SELECTOR.insertBefore(outerDiv, register);
}

function closeHelpBox() {
    zoomedImageActive = false;
    let grabErrorDiv = document.querySelector("#outerDivForHelpBox");
    $ALT_WINDOW_SELECTOR.removeChild(grabErrorDiv);
}
