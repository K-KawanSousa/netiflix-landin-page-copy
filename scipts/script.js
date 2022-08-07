var responseIsOpen= false;

function dropdownResponse(id){

    let thinX= document.querySelector("#thin-x"+id)

    RotateControl(thinX)


}

function RotateControl(object){
    if(responseIsOpen){
        object.style.transform= 'rotate(' + '-45' + 'deg)';
        responseIsOpen= false;
    }
    else{
        object.style.transform= 'rotate(' + '0' + 'deg)';
        responseIsOpen= true;
    }
}




