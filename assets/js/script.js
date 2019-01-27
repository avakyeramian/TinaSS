window.onload = content;


function content()
{
    
    //  Avak Yeramian
    //
    //  GNU GENERAL PUBLIC LICENSE Version 3
    //
    //  The GNU General Public License is a free, copyleft license for software and other kinds of works.
	//
    //  The licenses for most software and other practical works are designed to take away your freedom to share and change the works.
    //  By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.
    
    /* -- useless/20 -- */
    
    var document = window.document;
    var alert = window.alert;
    var console = window.console;
    var body = document.body;
    var navigator = window.navigator;
    
	/* -- find id="TinaSS" -- */
	
	var tinaSS_app = document.getElementById("TinaSS");
	
	if(tinaSS_app){
        
        var STR = setLanguage(localStorage.getItem("lang"));
        setMenu();
        
        router();
        
	}
    
    /* -- fonctions -- */
    
    /*
        Router 
    */
    function router(){
        var $_GET = getArgs();
        
        if ($_GET.settings){
            //console.log("Settings");
            pageSettings();
        }else if ($_GET.stock){
            console.log("Stock");
            pageError404();
        }else if ($_GET.search){
            console.log("Search : " + $_GET.search);
        }else if ($_GET.display){
            console.log("Display : " + $_GET.display);
        }else if ($_GET.home){
            //console.log("Home");
            pageHome();
        }else{
            //console.log("Error 404");
            pageError404();
        }
    }
    
    /* 
        set menu
    */
    function setMenu(){
        var ul_nav_mobile = document.getElementById("nav-mobile");
        var ul_mobile_demo = document.getElementById("mobile-demo");
        
        ul_mobile_demo.innerHTML = "";
        ul_nav_mobile.innerHTML = "";
        
        var stock = {icon:"widgets", url:"stock", label:STR.STOCK};
        var settings = {icon:"settings", url:"settings", label:STR.SETTINGS};
        //var importjson = {icon:"arrow_downward", action: function(){console.log("import")}, label:STR.IMPORT};
        //var exportjson = {icon:"arrow_upward", action: function(){console.log("export")}, label:STR.EXPORT};
        var menu = [stock,settings];
        
        for (var i in menu) {
            var entry = menu[i];
            var li_tmp = elemCreate("li",{},"");
            var a_tmp = elemCreate("a",{href:"./?"+entry.url},entry.label);
            var i_tmp = elemCreate("i",{class:"material-icons left"},entry.icon);
            a_tmp.append(i_tmp);
            li_tmp.append(a_tmp);
            var li_tmp2 = li_tmp.cloneNode(true);
            ul_mobile_demo.append(li_tmp);
            ul_nav_mobile.append(li_tmp2);
        }
    }
    
    /*
    
    */
    function setLanguage(code){
        switch (code) {
            case "fr":
                return langFrench();
                break;
            case "en":
                return langEnglish();
                break;
            default:
                return langEnglish();
        }
    }
    
    /*
        get url args
    */
    function getArgs(){
        var $_GET = [];
        var parts = window.location.search.substr(1).split("&");
        for (var i = 0; i < parts.length; i++) {
            var temp = parts[i].split("=");
            var key = decodeURIComponent(temp[0]);
            if(key === ""){
                key = "home";
            }
            $_GET[key] = decodeURIComponent(temp[1]);
        }
        //console.log($_GET);
        return $_GET;
    }
    
    /*
        Page error 404
    */
    function pageError404(){
        tinaSS_app.innerHTML = "";
        var div_container = elemCreate("div",{class:"container"},"");
        var h3 = elemCreate("h3",{class:"center"},STR.ERROR404);
        var h4 = elemCreate("h4",{class:"center"},STR.ERROR404TEXT);
        div_container.append(h3);
        div_container.append(h4);
        tinaSS_app.append(div_container);
    }
    
    /*
        Page Home
    */
    function pageHome(){
        tinaSS_app.innerHTML = "";
        var div_container = elemCreate("div",{class:"container"},"");
        var div_row = elemCreate("div",{class:"row"},"");
        
        div_row.append(elemCreate("h5",{class:"center"},STR.INDEV));
        
        div_container.append(div_row);
        tinaSS_app.append(div_container);
    }    
    
    /*
        Page settings
    */
    function pageSettings(){
        tinaSS_app.innerHTML = "";
        var div_container = elemCreate("div",{class:"container"},"");
        var div_row = elemCreate("div",{class:"row"},"");
        var div_input_lang = elemCreate("div",{class:"col l6 s12"},"");
        div_row.append(elemCreate("h5",{class:"center"},STR.SETTINGS));
        var select = elemCreate("select",{id:"lang_select",class:"browser-default"},"");
        select.append(elemCreate("option",{value:"en"},STR.ENGLISH));
        select.append(elemCreate("option",{value:"fr"},STR.FRENCH));
        
        switch (localStorage.getItem("lang")) {
            case "fr":
                select.selectedIndex = "1";
                break;
            case "en":
                select.selectedIndex = "0";
                break;
            default:
                select.selectedIndex = "0";
        }
        
        
        div_input_lang.append(elemCreate("label",{},STR.LANGUAGES));
        div_input_lang.append(select);
        div_row.append(div_input_lang);
        var apply = elemCreate("button",{class:"btn waves-effect waves-light grey"},STR.APPLY)
        apply.onclick = function () {
            var lang = document.getElementById("lang_select").value;
            
            if (lang === "en"){
                localStorage.setItem("lang", "en");
            }else if (lang === "fr"){
                localStorage.setItem("lang", "fr");
            }else{
                localStorage.setItem("lang", "en");
            }
            
            window.location.replace("./");
        }
        div_container.append(div_row);
        div_container.append(apply);
        tinaSS_app.append(div_container);
    }
    
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
    
}