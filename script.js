var titles = ["about", "projects", "languages", "education", "accomplishments"];


var sectionButtons = []
var sectionSections = []
var sectionBars = []
var sectionCase = []
var sectionStates = []

function hideSection(index) {
    console.log(`Hiding ${index}`);
    sectionSections[index].style.display = 'none';
    // sectionCase[index].style.flexDirection = "row";
    sectionBars[index].style.flex = "1 1 200px;";
    sectionButtons[index].style.display = "inline";
    sectionBars[index].style.display = "inline";
}

function showSection(index) {
    console.log(`Showing ${index}`);
    sectionSections[index].style.display = 'block';
    // sectionCase[index].style.flexDirection = "column";
    sectionBars[index].style.flex = "auto";
    sectionButtons[index].style.display = "block";
    sectionBars[index].style.display = "block";
}

function flip(index) {
    sectionStates[index] = !sectionStates[index];
    if (sectionStates[index]) {
        hideSection(index);
    } else {
        showSection(index);
    }
}

function addSection(index) {
    sectionButtons.push(document.getElementById(titles[index] + "Button"));
    sectionSections.push(document.getElementById(titles[index] + "Section"));
    sectionBars.push(document.getElementById(titles[index] + "Bar"));
    sectionCase.push(document.getElementById(titles[index] + "Case"));
    sectionStates.push(false);
    sectionButtons[index].addEventListener('click', function (event) {
        index = titles.indexOf(event.target.id.replace("Button", ""));
        flip(index);
    });
}

for (var i = 0; i < titles.length; i++) {
    addSection(i);
}
i = null;
