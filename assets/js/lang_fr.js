/*
    switch interface to french
*/
function langFrench(){
    document.documentElement.setAttribute("lang","fr");
    
    var STR = {
        DESCRIPTION : "Outil de gestion de stock d'ordinateurs et de pièces d'ordinateur",
        LINKS : "Liens",
        STOCK : "Inventaire",
        SETTINGS : "Paramètres",
        IMPORT : "Importer",
        EXPORT : "Exporter",
        ERROR404 : "Erreur 404",
        ERROR404TEXT : "Aucun poney ici",
        LANGUAGES : "Langues",
        ENGLISH : "English",
        FRENCH : "Français",
        APPLY : "Appliquer",
        INDEV : "En développement",
        TEST : "Test"
    };
    
    document.getElementById("description").innerHTML = STR.DESCRIPTION;    
    document.getElementById("links").innerHTML = STR.LINKS;

    return STR;
}