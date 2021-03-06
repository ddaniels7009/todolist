import { note, testNote } from './createNote';
import { ui } from './ui'
import { format } from 'date-fns';

const noteList = (function () {


    // Create default array
    const defaultNoteArray = [];

    //Create Test second array
    const secondaryArray = [];


    // Function to add a note to the default array
    function addNote(title, date, arrayName) {

        if (title == "") {
            title = "list Item";
        }

        if (date == "") {
            date = format(new Date(), 'yyyy-MM-dd');
        }

        arrayName.push(note(title, date));


    }

    // TODO create a function to delete a note from the array
    function removeNoteFromArray(innerNote1, arrayName) {

        let titleHolder = "";

        for (let i = 0; i < defaultNoteArray.length; i++) {
            if (arrayName[i].title == innerNote1.innerText) {
                titleHolder = arrayName[i];
            }
        }

        let index = arrayName.indexOf(titleHolder);
        arrayName.splice(index, 1);

    }

    function createNewArray() {
        const secondaryArray = [];
        return secondaryArray;
    }





    // Test addNote function
    addNote('Walk the dogs', "2021-06-03", defaultNoteArray);

    //Test Second array
    addNote('Does this work', "2021-06-03", secondaryArray);

    return { secondaryArray, defaultNoteArray, addNote, removeNoteFromArray, createNewArray }

})();

export { noteList }



