var titles = ["about", "projects", "languages", "education", "accomplishments"];

var sectionButtons = []
var sectionSections = []
var sectionBars = []
var sectionStates = []
for (var i = 0; i < len(titles); i++) {
    sectionButtons.push(document.getElementById(title[i] + "Button"));
    sectionSections.push(document.getElementById(title[i] + "Section"));
    sectionBars.push(document.getElementById(title[i] + "Bars"));
    sectionStates.push(false);
    sectionBars[-1].style.visibility = 'hidden';
    sectionButtons[-1].addEventListener('click', function (event) {
        event.preventDefault();
    })
}
i = null;

