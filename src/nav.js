import { defaultPageLoader } from './default';
import { noteList } from './notes';
import { ui } from './ui';

// Function to add nav elements
const navbar = (function () {

    // Add default button
    const primaryListBtn = document.createElement('button');
    primaryListBtn.classList.add('navButtons');
    primaryListBtn.innerText = "primary list"
    navUpper.appendChild(primaryListBtn);
    primaryListBtn.addEventListener('click', function () { ui.clearAll(); ui.populateContainer(noteList.defaultNoteArray); ui.submissionForm(noteList.defaultNoteArray); additionForm.classList.toggle('invisible'); });
    let listCount = 1;


    // Add new list button
    const newListBtn = document.createElement('button');
    newListBtn.classList.add('navButtons');
    newListBtn.innerText = "new list";
    newListBtn.style.order = "0";
    defaultPageLoader.navLower.appendChild(newListBtn);
    newListBtn.addEventListener('click', function () {
        defaultPageLoader.listInput.classList.toggle('invisible');
        newListSubmitBtn.classList.toggle('invisible');
    });

    // Add submit button for form
    const newListSubmitBtn = document.createElement('button');
    newListSubmitBtn.classList.add('navButtons');
    newListSubmitBtn.classList.toggle('invisible');
    newListSubmitBtn.innerText = "add list";
    newListSubmitBtn.style.order = "2";
    defaultPageLoader.navLower.appendChild(newListSubmitBtn);

    newListSubmitBtn.addEventListener('click', function () {
        defaultPageLoader.listInput.classList.toggle('invisible');
        newListSubmitBtn.classList.toggle('invisible');
        newListButton(defaultPageLoader.listInput.value);
        defaultPageLoader.listInput.value = "";


    });


    // Create function to add new list item to the navbar
    function newListButton(listName) {
        
        if(listName === ""){
            listName = "list " + listCount; 
            listCount++;
        }
        else{
            listCount++;
        }
        let newButton = document.createElement('button');
        newButton.classList.add('navButtons');
        newButton.innerText = listName;
        defaultPageLoader.navUpper.appendChild(newButton);
        const temp = noteList.createNewArray();
        newButton.addEventListener('click', function () { ui.clearAll(); ui.populateContainer(temp); ui.submissionForm(temp); additionForm.classList.toggle('invisible'); })//ui.clearAll();  })
    }

    // Delete list buttons

})();

export { navbar }