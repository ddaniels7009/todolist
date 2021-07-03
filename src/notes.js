import { note, testNote } from './createNote';
import { ui } from './ui'


const noteList = (function () {

    // Create default array
    const defaultNoteArray = [];

    // Function to add a note to the default array
    function addNote(title, date) {

        defaultNoteArray.push(note(title, date));

    }

    // TODO create a function to delete a note from the array
    function removeNoteFromArray (innerNote1) {
        
        let titleHolder = "";
        
        for(let i = 0; i < defaultNoteArray.length; i++){
            if(defaultNoteArray[i].title == innerNote1.innerText){
                titleHolder = defaultNoteArray[i];
            }
        }

        let index = defaultNoteArray.indexOf(titleHolder);
        console.log(index);
        defaultNoteArray.splice(index,1);

    }


    // Test addNote function
    addNote('eat food', 1993);
    
    return {defaultNoteArray, addNote, removeNoteFromArray}

})();

export { noteList }



