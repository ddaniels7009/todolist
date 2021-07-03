import { note, testNote } from './createNote';
import { ui } from './ui'
import { format } from 'date-fns';

const noteList = (function () {

    // Create default array
    const defaultNoteArray = [];

    // Function to add a note to the default array
    function addNote(title, date) {

        if(title == ""){
            title = "list Item";
        }

        if(date ==""){
            date = format(new Date(), 'yyyy-MM-dd');
        }
        
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
        defaultNoteArray.splice(index,1);

    }


    // Test addNote function
    addNote('Walk the dogs', "2021-06-03");
    
    return {defaultNoteArray, addNote, removeNoteFromArray}

})();

export { noteList }


