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

function craftProductionTable(){
    var tableHead = [STR.NICKNAME,STR.MOTHERBOARD,STR.PRODUCTNAME,STR.CPU,STR.RAM,STR.GPU,STR.MASSSTORAGE,STR.COMPUTERCASE,STR.POWERSUPPLY,STR.OS];
    var tableBody = [];
    var production = getProduction();
    console.log(production);
    for(var ite in production){
        var nickname = production[ite].nickname;
        var motherboard = "";
        var productName = production[ite].brand+" "+production[ite].line+" "+production[ite].model;
        var cpu = "";
        var ram = "";
        var gpu = "";
        var massStorage = "";
        var computerCase = "";
        var powerSupply = "";
        var os = "";
        
        var computer = [nickname,motherboard,productName,cpu,ram,gpu,massStorage,computerCase,powerSupply,os];
        tableBody.push(computer);        
    }
    

    
    var table = createTable(tableHead,tableBody);
    
    return table;

}