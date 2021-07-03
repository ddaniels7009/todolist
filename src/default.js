import { ui } from "./ui";

//code to run default page when the web page is first loaded
const defaultPageLoader = (function() {

// Create divs for default screen 
const content = document.getElementById('content');
const header = document.createElement('div');
const outerContainer = document.createElement('div')
const nav = document.createElement('div');
const innerContainer = document.createElement('div');
const lowerInnerContainer = document.createElement('div');
const upperInnerContainer = document.createElement('div');

// Create Add Note Button
const addNoteButton = document.createElement('button');

nav.setAttribute('id', 'nav');
header.setAttribute('id', 'header');
outerContainer.setAttribute('id', 'outer');
innerContainer.setAttribute('id', 'inner');
lowerInnerContainer.setAttribute('id', 'lowerInner');
upperInnerContainer.setAttribute('id', 'upperInner');

// Set add button ID
addNoteButton.setAttribute('id', 'addNoteButton');
addNoteButton.innerText = "Add New Note";
addNoteButton.addEventListener('click', function () { 
    
    ui.additionForm.classList.toggle('invisible');
});


content.appendChild(header);
content.appendChild(outerContainer);
outerContainer.appendChild(nav);
outerContainer.appendChild(innerContainer);
innerContainer.appendChild(upperInnerContainer);
innerContainer.appendChild(lowerInnerContainer);

//Append add new note button to the lower-inner container
lowerInnerContainer.appendChild(addNoteButton);

return { content, outerContainer, nav, innerContainer, upperInnerContainer, lowerInnerContainer }

})();

export { defaultPageLoader }

