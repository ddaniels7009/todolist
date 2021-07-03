import { ui } from "./ui";

//code to run default page when the web page is first loaded
const defaultPageLoader = (function() {

// Create divs for default screen 
const content = document.getElementById('content');
const header = document.createElement('div');
const pageName = document.createElement('p');
const outerContainer = document.createElement('div')
const nav = document.createElement('div');
const innerContainer = document.createElement('div');
const lowerInnerContainer = document.createElement('div');
const upperInnerContainer = document.createElement('div');
const taskLineHeader = document.createElement('div');
const titleBar = document.createElement('p');
const dateBar = document.createElement('p');


// Create Add Note Button
const addNoteButton = document.createElement('button');

nav.setAttribute('id', 'nav');
header.setAttribute('id', 'header');
pageName.setAttribute('id', 'pageName');
outerContainer.setAttribute('id', 'outer');
innerContainer.setAttribute('id', 'inner');
lowerInnerContainer.setAttribute('id', 'lowerInner');
upperInnerContainer.setAttribute('id', 'upperInner');

taskLineHeader.setAttribute('id', 'taskHeader');
titleBar.setAttribute('id', 'titleBar');
dateBar.setAttribute('id', 'dateBar');

// Set add button ID
addNoteButton.setAttribute('id', 'addNoteButton');
addNoteButton.innerText = "Add New Note";
addNoteButton.addEventListener('click', function () { 
    
    ui.additionForm.classList.toggle('invisible');
});

pageName.innerText= "LIST";
titleBar.innerText = "TASK NAME:";
dateBar.innerText = "DUE DATE:";

content.appendChild(header);
header.appendChild(pageName);
content.appendChild(outerContainer);
outerContainer.appendChild(nav);
outerContainer.appendChild(innerContainer);
innerContainer.appendChild(upperInnerContainer);
innerContainer.appendChild(lowerInnerContainer);
upperInnerContainer.appendChild(taskLineHeader);
taskLineHeader.appendChild(titleBar);
taskLineHeader.appendChild(dateBar);

//Append add new note button to the lower-inner container
lowerInnerContainer.appendChild(addNoteButton);

return { content, outerContainer, nav, innerContainer, upperInnerContainer, lowerInnerContainer }

})();

export { defaultPageLoader }

