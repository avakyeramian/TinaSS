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
    Capitalize the 1st letter of a string like : 
    "nvidia fuck you !" -> "Nvidia fuck you !" 
*/ 
function firstUpperCase(string){ 
    return string.charAt(0).toUpperCase() + string.slice(1); 
} 

/*
    Create an input text with a json fieldData like :
    {"type":"text","form":"CPU","name":"brand","label":"brand","datalist":["AMD","VIA","Intel"]}
*/
function inputTextCreate(fieldData){
    var div = elemCreate("div",{class:"input-field col m6 s12"},"");
    var input = elemCreate("input",{type:"text",name:fieldData.name,id:fieldData.form+"_"+fieldData.name},"");
    div.append(input);
    var label = elemCreate("label",{for:fieldData.form+"_"+fieldData.name},fieldData.label);
    div.append(label);
    if(fieldData.datalist){
        var datalist = elemCreate("datalist",{id:fieldData.form+"_"+fieldData.name+"List"},"");
        for(var ite in fieldData.datalist){
            var option = elemCreate("option",{value:fieldData.datalist[ite]},"");
            datalist.append(option);
        }
        input.setAttribute("list",fieldData.form+"_"+fieldData.name+"List");
        div.append(datalist);
    }
    if(fieldData.value){
        input.setAttribute("value",fieldData.value);
    }
    
    // update css for Materialize
    $(document).ready(function(){
        M.updateTextFields();
    });
    return div;
}

/*
    Create a form with a json formData like :
    {"title":"OS","fields":[
            {"type":"text","form":"OS","name":"family","label":"Family","datalist":["GNU/Linux","MacOS","Microsoft"]},
            {"type":"text","form":"OS","name":"version","label":"Version","datalist":["Ubuntu","Debian","Windows 10","DOS"]},
            {"type":"text","form":"OS","name":"architecture","label":"Architecture","datalist":["32-bit","64-bit"]},
            {"type":"text","form":"OS","name":"url","label":"Url"}
    ]}
*/
function formCreate(formData){
    var form = elemCreate("form",{class:"row"},"");
    var title = elemCreate("h5",{},formData.title);
    form.append(title);
    for(var ite in formData.fields){
        var field = inputTextCreate(formData.fields[ite]);
        form.append(field);
    }
    return form;
}

/*
    Get values form with formName like "OS" and fieldNames like ["family","version","architecture","url"]
*/
function getFormValues(formName,fieldNames){
    var json = {}; 
    for(var ite in fieldNames){
        var input = document.getElementById(formName+"_"+fieldNames[ite]);
        json[input.name]=input.value;
    }
    return json;
}

function buttonForm(name){
    var button = elemCreate("button",{class:"col s4 waves-effect waves-light btn grey darken-3"},name);
    return button;
}

/*
    Reset values form with formName like "OS" and fieldNames like ["family","version","architecture","url"]
*/
function resetFormValues(formName,fieldNames){
    for(var ite in fieldNames){
        var input = document.getElementById(formName+"_"+fieldNames[ite]);
        input.value = "";
    }
    
    // update css for Materialize
    $(document).ready(function(){
        M.updateTextFields();
    });
}

/*
    Set values form with formName like "OS" and fieldsData like {"family":"GNU/Linux","version":"Ubuntu 18.04","architecture":"64-bit","url"}
*/
function setFormValues(formName,fieldsData){
    for(var att in fieldsData){
        var input = document.getElementById(formName+"_"+att);
        input.value = fieldsData[att];
    }
    
    // update css for Materialize
    $(document).ready(function(){
        M.updateTextFields();
    });
}

/*
    Create table with tableHead like ["Nickname","CPU"] and tableBody like [["RainbowDash","Ryzen 5 3500x"],["Fluttershy","Athlon 3000G"]]
*/
function createTable(tableHead,tableBody){
    var table = elemCreate("table",{class:"responsive-table"},"");
    var thead = elemCreate("thead",{},"");
    var trInThead = elemCreate("tr",{},"");
    for(var ite in tableHead){
        var th = elemCreate("th",{},tableHead[ite]);
        trInThead.append(th);
    }
    thead.append(trInThead);
    table.append(thead);
    var tbody = elemCreate("tbody",{},"");
    for(var ith in tableBody){
        var trInTbody = elemCreate("tr",{},"");
        for(var curr in tableBody[ith]){
            var td = elemCreate("td",{},tableBody[ith][curr]);
            trInTbody.append(td);
        }
        tbody.append(trInTbody);
    }
    table.append(tbody);
    return table;
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