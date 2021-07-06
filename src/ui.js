//import { format } from 'date-fns'

import { add } from 'date-fns';
import { de } from 'date-fns/locale';
import { defaultPageLoader } from './default';
import { noteList } from './notes';

// Module to control entire interface
const ui = (function () {

    const titleBars = document.getElementsByClassName('noteTitle');
    const dateBar = document.getElementsByClassName('noteDate');
    const priorityBar = document.getElementsByClassName('notePriority');
    const deleteBar = document.getElementsByClassName('noteDelete');
    const additionForm = document.createElement('div');

    const addNoteForm = document.createElement('form'); // Implement


    function startup() {


        ui.populateContainer(noteList.defaultNoteArray);
        ui.submissionForm(noteList.defaultNoteArray);


    }

    //function to add new list to the navbar using an add list button
    function submissionForm(arrayName) {

        //const additionForm = document.createElement('div');
        additionForm.setAttribute('id', 'additionForm');
        defaultPageLoader.lowerInnerContainer.appendChild(additionForm);
        additionForm.classList.toggle('invisible');


        //Begin
        let label1 = document.createElement("label");
        additionForm.appendChild(label1);

        label1.setAttribute("for", "title"); //* update id
        label1.innerHTML = ""

        let titleInput = document.createElement("input");
        additionForm.appendChild(titleInput);
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("required", "required");
        titleInput.setAttribute("id", "title"); ///* update id
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("value", "");
        //End

        //Begin
        let label2 = document.createElement("label");
        additionForm.appendChild(label2);

        label2.setAttribute("for", "date");
        label2.innerHTML = ""

        let authorInput = document.createElement("input");
        additionForm.appendChild(authorInput);
        authorInput.setAttribute("type", "date");
        authorInput.setAttribute("required", "required");
        authorInput.setAttribute("id", "date");
        authorInput.setAttribute("name", "date");
        authorInput.setAttribute("value", "");
        //End

        //Begin
        const submitButton = document.createElement('button');
        submitButton.setAttribute('id', 'submitButton');
        submitButton.innerText = "add"
        additionForm.appendChild(submitButton);


        submitButton.addEventListener('click', function () {

            noteList.addNote((document.getElementById("title").value), (document.getElementById("date").value), arrayName);
            additionForm.classList.toggle('invisible');
            populateContainer(arrayName);
            resetFields();

            return { additionForm };
        })
        //End

    }

    // Function to add object to container elements
    function populateContainer(arrayName) {


        arrayName.forEach(setAttibutes);

    };

    function setAttibutes(item, index, array) {


        // Only creates a new note container if there are less note containers than there are elements in the array
        if (defaultPageLoader.upperInnerContainer.childNodes.length - 1 < array.length) {
            createNoteContainer(array);
        }

        ui.titleBars[index].innerText = item.getTitle();
        ui.dateBar[index].innerText = item.getDate();

    };


    function resetFields() {
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
    }



    //funtion to create a new note/note container using object information
    function createNoteContainer(arrayName) {
        //Create Note Container

        const noteContainer = document.createElement('div');
        const innerNote1 = document.createElement('div');
        const innerNote2 = document.createElement('div');
        const innerNote3 = document.createElement('div');
        const deleteButton = document.createElement('button');

        noteContainer.classList.add('listItem');
        noteContainer.addEventListener('click', function () { changePriority(noteContainer); })

        innerNote1.classList.add('noteTitle');
        innerNote2.classList.add('noteDate');
        innerNote3.classList.add('noteDelete');

        defaultPageLoader.upperInnerContainer.appendChild(noteContainer);
        noteContainer.appendChild(innerNote1);
        noteContainer.appendChild(innerNote2);
        noteContainer.appendChild(innerNote3);

        // Format Delete Button
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = "delete";
        deleteButton.addEventListener('click', function () {
            deleteNoteContainer(noteContainer);
            noteList.removeNoteFromArray(innerNote1, arrayName);
        });

        innerNote3.appendChild(deleteButton);


        return noteContainer, innerNote1, innerNote2, innerNote3;

    }

    // Function to delete all div content inside the "inner" div
    function clearAll() {

        let numNodes = defaultPageLoader.upperInnerContainer.childNodes.length - 1;
        let numNodes2 = additionForm.childNodes.length - 1;
        

        for (let i = numNodes; i > 0; i--) {
            defaultPageLoader.upperInnerContainer.removeChild(defaultPageLoader.upperInnerContainer.childNodes[i]);
        }
        

        for (let i = numNodes2; i >= 0; i--) {
            additionForm.removeChild(additionForm.childNodes[i]);
        }
    }


    //create a function to delete a note's container
    function deleteNoteContainer(noteContainer) {
        defaultPageLoader.upperInnerContainer.removeChild(noteContainer);

    }

    //function to change note priority
    function changePriority(container) {
        container.classList.toggle('lowPriority');

    }

    return { startup, additionForm, clearAll, submissionForm, populateContainer, setAttibutes, createNoteContainer, titleBars, dateBar, priorityBar, deleteBar, submissionForm }



})();

export { ui }