import { ui } from "./ui";

//code to run default page when the web page is first loaded
const defaultPageLoader = (function () {




    // Create divs for default screen 
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const pageName = document.createElement('p');
    const outerContainer = document.createElement('div')

    // Create Nav elements
    const nav = document.createElement('div');
    const navUpper = document.createElement('div');
    const navLower = document.createElement('div');

    // Create inner container elements
    const innerContainer = document.createElement('div');
    const upperInnerContainer = document.createElement('div');
    const lowerInnerContainer = document.createElement('div');

    const taskLineHeader = document.createElement('div');
    const titleBar = document.createElement('p');
    const dateBar = document.createElement('p');


    // Create Add Note Button
    const addNoteButton = document.createElement('button');

    //Set IDs for elements
    nav.setAttribute('id', 'nav');
    navUpper.setAttribute('id', 'navUpper');
    navLower.setAttribute('id', 'navLower');
    header.setAttribute('id', 'header');
    pageName.setAttribute('id', 'pageName');
    outerContainer.setAttribute('id', 'outer');
    innerContainer.setAttribute('id', 'inner');

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


    pageName.innerText = "LIST";

    //Append all elements
    content.appendChild(header);
    header.appendChild(pageName);
    content.appendChild(outerContainer);
    outerContainer.appendChild(nav);
    nav.appendChild(navUpper);
    nav.appendChild(navLower);
    outerContainer.appendChild(innerContainer);



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

    titleBar.innerText = "TASK NAME:";
    dateBar.innerText = "DUE DATE:";

    innerContainer.appendChild(upperInnerContainer);
    innerContainer.appendChild(lowerInnerContainer);
    upperInnerContainer.appendChild(taskLineHeader);
    taskLineHeader.appendChild(titleBar);
    taskLineHeader.appendChild(dateBar);

    //Append add new note button to the lower-inner container
    lowerInnerContainer.appendChild(addNoteButton);



    return { upperInnerContainer, lowerInnerContainer, navUpper,navLower, listInput,listLabel, innerContainer }

})();

export { defaultPageLoader }

