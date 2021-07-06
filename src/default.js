import { ui } from "./ui";

//code to run default page when the web page is first loaded
const defaultPageLoader = (function () {



    // Create divs for default screen 
    const content = document.getElementById('content');


    // Create Header Elements
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const pageName = document.createElement('p');
    pageName.innerText = "LIST";
    pageName.setAttribute('id', 'pageName');
    content.appendChild(header);
    header.appendChild(pageName);


    // Create Nav elements
    const nav = document.createElement('div');
    const navUpper = document.createElement('div');
    const navLower = document.createElement('div');
    nav.setAttribute('id', 'nav');
    navUpper.setAttribute('id', 'navUpper');
    navLower.setAttribute('id', 'navLower');

    nav.appendChild(navUpper);
    nav.appendChild(navLower);


    // Create Outer Container
    const outerContainer = document.createElement('div')
    outerContainer.setAttribute('id', 'outer');
    content.appendChild(outerContainer);
    outerContainer.appendChild(nav);

    // Create inner container
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('id', 'inner');
    outerContainer.appendChild(innerContainer);


    //Create upperInnerContainer
    const upperInnerContainer = document.createElement('div');
    upperInnerContainer.setAttribute('id', 'upperInner');
    innerContainer.appendChild(upperInnerContainer);


    //Create lowerInnerContainer
    const lowerInnerContainer = document.createElement('div');
    lowerInnerContainer.setAttribute('id', 'lowerInner');
    innerContainer.appendChild(lowerInnerContainer);


    const taskLineHeader = document.createElement('div');
    const titleBar = document.createElement('p');
    const dateBar = document.createElement('p');
    taskLineHeader.setAttribute('id', 'taskHeader');
    titleBar.setAttribute('id', 'titleBar');
    dateBar.setAttribute('id', 'dateBar');
    titleBar.innerText = "TASK NAME:";
    dateBar.innerText = "DUE DATE:";
    upperInnerContainer.appendChild(taskLineHeader);
    taskLineHeader.appendChild(titleBar);
    taskLineHeader.appendChild(dateBar);

    // Create Add Note Button
    const addNoteButton = document.createElement('button');
    addNoteButton.setAttribute('id', 'addNoteButton');
    addNoteButton.innerText = "Add New Note";
    addNoteButton.addEventListener('click', function () {

        ui.additionForm.classList.toggle('invisible');
    });
    lowerInnerContainer.appendChild(addNoteButton);

    // Create form for adding new list items
    let listLabel = document.createElement("label");
    navLower.appendChild(listLabel);

    listLabel.setAttribute("for", "listInput"); //* update id
    listLabel.innerHTML = ""

    let listInput = document.createElement("input");
    navLower.appendChild(listInput);
    listInput.setAttribute("type", "text");
    listInput.setAttribute("id", "listInput"); ///* update id
    listInput.setAttribute("name", "listInput");
    listInput.setAttribute("value", "");
    listInput.classList.toggle('invisible');
    //End


    return { upperInnerContainer, lowerInnerContainer, navUpper, navLower, innerContainer, listLabel, listInput }

})();

export { defaultPageLoader }

