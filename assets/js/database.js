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

function getStock(){
    var stock;
    var stock_json = localStorage.getItem("stock");
    var stock_parsed = JSON.parse(stock_json);
    if(stock_parsed!==null){
        stock = stock_parsed;
    }
    else{
        stock = {};
    }
    return stock;
}

function addComputerToStock(computer){
    var stock = getStock();
    var computer_array;
    if((stock.computer_array)===false){
        stock.computer_array = [];
    }
    computer_array = stock.computer_array;
    computer_array.push(computer);
    stock.computer_array = computer_array;
    var stock_json = JSON.stringify(stock);
    localStorage.setItem("stock",stock_json);
}