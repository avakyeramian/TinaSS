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
    Create an input text with a json field like :
    {"name":"brand","datalist":["AMD","VIA","Intel"],"label":"brand","form":"CPU"}
*/
function inputTextCreate(field){
    var div = elemCreate("div",{class:"input-field col s6"},"");
    var input = elemCreate("input",{type:"text",name:field.name,id:field.form+field.name},"");
    div.append(input);
    var label = elemCreate("label",{for:field.form+field.name},field.label);
    div.append(label);
    if(field.datalist){
        var datalist = elemCreate("datalist",{id:field.form+field.name+"List"},"");
        for(var ite in field.datalist){
            var option = elemCreate("option",{value:field.datalist[ite]},"");
            datalist.append(option);
        }
        input.setAttribute("list",field.form+field.name+"List");
        div.append(datalist);
    }
    return div;
}

/*
    Create id with timestamp
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
    Convert bytes to bits
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