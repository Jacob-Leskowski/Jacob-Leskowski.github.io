var working = 0;

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
    sectionButtons[index].style.display = "inline";
    sectionBars[index].style.display = "inline";
    if (window.innerWidth < 1400) {
        sectionBars[index].style.flex = "1 1 200px;";
    } else {
        sectionBars[index].style.flex = "none";
    }
}

function showSection(index) {
    console.log(`Showing ${index}`);
    sectionSections[index].style.display = 'block';
    // sectionCase[index].style.flexDirection = "column";
    sectionButtons[index].style.display = "block";
    sectionBars[index].style.display = "block";
    if (window.innerWidth < 1400) {
        sectionBars[index].style.flex = "auto";
    } else {
        sectionBars[index].style.flex = "none";
    }
}

function update(index) {
    if (sectionStates[index]) {
        hideSection(index);
    } else {
        showSection(index);
    }
}

function updateAll() {
    for (var i = 0; i < titles.length; i++) {
        update(i);
    }
}

function flip(index) {
    sectionStates[index] = !sectionStates[index];
    update(index);
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
    if (i < working) {
        flip(i);
    }
}
i = null;

window.addEventListener('resize', function (event) {
    updateAll();
}, true);