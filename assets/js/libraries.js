/*
    Shortcut function to create dom element more quickly
*/
function elemCreate(type,dicoAtt,text){
    var dom = document.createElement(type);
    for(var key in Object.keys(dicoAtt)){
        dom.setAttribute(Object.keys(dicoAtt)[key],dicoAtt[Object.keys(dicoAtt)[key]]);//piece of shit
    }
    dom.innerHTML = text;
    return dom;
}

/*
    create id with timestamp
*/
function generateID(){
    var date = Date.now();
    
    if(generateID.previous == 0){
        generateID.previous = date;
        return generateID.previous;
    }else{
        generateID.previous = generateID.previous + 1;
        return generateID.previous;
    }
}
generateID.previous = 0;

/*
    convert bytes to bits
*/
function convertToBytes(value,multiple){
    value = parseInt(value);
    switch (multiple.split('')[0]){ // get the multiple
        case 'o':
            break;
        case 'B':
            break;
        case 'K':
            value=value*1000;
            break;
        case 'M':
            value=value*1000000;
            break;
        case 'G':
            value=value*1000000000;
            break;
        case 'T':
            value=value*1000000000000;
            break;
        case 'P':
            value=value*1000000000000000;
            break;
        default:
            break;
    }
    return value;
}