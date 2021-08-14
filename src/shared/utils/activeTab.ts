const createActiveTab = (interestedElement:HTMLElement, elements:HTMLElement[]) => {
    
    // removing border left style from all the tabs
    for(var element of elements){
        element.style.borderLeft = "transparent";
    } 
    
    // adding border left style to the selected tab
    interestedElement.style.borderLeft = "2px solid green";

}

export default createActiveTab;