function craftComputerTable(computer_array){
    var tableHead = [STR.NICKNAME,STR.MOTHERBOARD,STR.PRODUCTNAME,STR.CPU,STR.RAM,STR.GPU,STR.MASSSTORAGE,STR.COMPUTERCASE,STR.POWERSUPPLY,STR.OS];
    var tableBody = [];
    for(var ite in computer_array){
        var nickname = computer_array[ite].nickname;
        var motherboard = "";
        var productName = computer_array[ite].brand+" "+computer_array[ite].line+" "+computer_array[ite].model;
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