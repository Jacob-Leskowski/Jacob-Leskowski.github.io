var titles = ["about", "projects", "languages", "education", "accomplishments"];

var sectionButtons = []
var sectionSections = []
var sectionBars = []
var sectionCase = []
var sectionStates = []
for (var i = 0; i < titles.length; i++) {
    sectionButtons.push(document.getElementById(titles[i] + "Button"));
    sectionSections.push(document.getElementById(titles[i] + "Section"));
    sectionBars.push(document.getElementById(titles[i] + "Bar"));
    sectionCase.push(document.getElementById(titles[i] + "Case"));
    sectionStates.push(false);
    sectionButtons[i].addEventListener('click', function (event) {
        index = titles.indexOf(event.target.id.replace("Button", ""));
        sectionStates[index] = !sectionStates[index];
        if (sectionStates[index]) {
            console.log("Hide")
            sectionSections[index].style.display = 'none';
            sectionCase[index].style.direction = "row";
            sectionBars[index].flex = "1 1 200px;";
            sectionButtons[index].display = "inline";
            sectionBars[index].display = "inline";
        } else {
            console.log("Show")
            sectionSections[index].style.display = 'block';
            sectionCase[index].direction = "column";
            sectionBars[index].flex = "auto";
            sectionButtons[index].display = "block";
            sectionBars[index].display = "block";
        }
    });
}
i = null;
