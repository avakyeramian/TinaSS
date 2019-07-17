function ComputerForm(dom,computer){
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
}