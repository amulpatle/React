
    // Corrected line
    
    const element1 = React.createElement('h1', {}, "hello everyone");
    const element2 = React.createElement('h1',{},'Element2')

    const container = React.createElement('div',{},[element1,element2])
    
    
    
    // To render the element on the page, you can use:
   ReactDOM.createRoot(document.getElementById('root')).render(container);
