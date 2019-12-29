/*
    switch interface to english
*/
function langEnglish(){
    document.documentElement.setAttribute("lang","en");
    
    var STR = {
        DESCRIPTION : "Stock management tool of computers and computer parts",
        LINKS : "Links",
        STOCK : "Stock",
        SETTINGS : "Settings",
        IMPORT : "Import",
        EXPORT : "Export",
        ERROR404 : "Error 404",
        ERROR404TEXT : "No pony here",
        LANGUAGES : "Languages",
        ENGLISH : "English",
        FRENCH : "Français",
        APPLY : "Apply",
        INDEV : "In development",
        TEST : "Test",
        COMPUTER : "Computer",
        NICKNAME : "Nickname",
        USAGE : "Usage",
        TYPE : "Type",
        BRAND : "Brand",
        LINE : "Line",
        MODEL : "Model",
        URL : "Url",
        PRODUCTNAME : "Product Name",
        MOTHERBOARD : "Motherboard",
        CPU : "CPU",
        RAM : "RAM",
        GPU : "GPU",
        MASSSTORAGE : "Mass storage",
        COMPUTERCASE : "Computer case",
        POWERSUPPLY : "Power supply",
        OS : "Operating system",
    };
    
    document.getElementById("description").innerHTML = STR.DESCRIPTION;
    document.getElementById("links").innerHTML = STR.LINKS;

    return STR;
}