function openContainer(objContainer, imageID){
    let objectContainer = document.getElementById(objContainer);
    let imgContainer = document.getElementById(imageID);

    if(objectContainer.style.height == "30px"){
        objectContainer.style.height = "150px";
        imgContainer.src = 'assets/images/icons/arrow-up.png';
    }else{
        objectContainer.style.height = "30px";
        imgContainer.src = 'assets/images/icons/arrow-down.png';
    };
    
}