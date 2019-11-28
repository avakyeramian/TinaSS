function getProduction(){
    var production;
    var production_json = localStorage.getItem("production");
    var production_parsed = JSON.parse(production_json);
    if(production_parsed!==null){
        production = production_parsed;
    }
    else{
        production = [];
    }
    return production;
}

function addComputerToProduction(computer){
    var production = getProduction();
    production.push(computer);
    var production_json = JSON.stringify(production);
    localStorage.setItem("production",production_json);
}