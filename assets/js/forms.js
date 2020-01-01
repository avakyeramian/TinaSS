function ComputerForm(dom,computer){
    if(computer == null){
        var computer = new Computer("","","","","","","","");
    }
    var form = formCreate({
        title:STR.COMPUTER,
        fields:[
            {type:"text",form:"Computer",name:"nickname",label:STR.NICKNAME,value:computer.nickname},
            /* image */
            {type:"text",form:"Computer",name:"usage",label:STR.USAGE},
            {type:"text",form:"Computer",name:"type",label:STR.TYPE,datalist:datalistComputerType},
            {type:"text",form:"Computer",name:"brand",label:STR.BRAND,datalist:datalistComputerBrand},
            {type:"text",form:"Computer",name:"line",label:STR.LINE,datalist:datalistComputerLine},
            {type:"text",form:"Computer",name:"model",label:STR.MODEL},
            {type:"text",form:"Computer",name:"url",label:STR.URL},
        ]
    });
    
    dom.append(form);    

    var buttonProd = buttonForm("prod");
    buttonProd.onclick = function() {
        var values = getFormValues("Computer",["nickname"/* ",image" */,"usage","type","brand","line","model","url"]);
        computer.nickname = values.nickname;
        /* computer.image = */
        computer.usage = values.usage;
        computer.type = values.type;
        computer.brand = values.brand;
        computer.line = values.line;
        computer.model = values.model;
        computer.url = values.url;
        
        /* console.log(computer); */
        
        addComputerToProduction(computer);
    }
    
    dom.append(buttonProd);

    var buttonStock = buttonForm("stock");
    buttonStock.onclick = function() {
        var values = getFormValues("Computer",["nickname"/* ",image" */,"usage","type","brand","line","model","url"]);
        computer.nickname = values.nickname;
        /* computer.image = */
        computer.usage = values.usage;
        computer.type = values.type;
        computer.brand = values.brand;
        computer.line = values.line;
        computer.model = values.model;
        computer.url = values.url;
        
        /* console.log(computer); */
        
        addComputerToStock(computer);
    }
    
    dom.append(buttonStock);
}