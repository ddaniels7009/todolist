

// Create note objects using a factory function
const note = (title, date) => {


    const getTitle = () => title;
    const getDate = () => date;
    

return {title, date, getTitle, getDate }


}

export { note }