import { defaultPageLoader } from './default'

// Function to add nav elements
const navbar = (function() {

    const primaryListBtn = document.createElement('button');
    primaryListBtn.classList.add('navButtons');
    primaryListBtn.innerText = "Primary List"
    defaultPageLoader.nav.appendChild(primaryListBtn);


    // Add default button


    // Add new list buttons


    // Delete list buttons

})();

export { navbar }