let arrayValores = ["t",4,89,"asd",true];
function functionConRest(arg1,arg2,...restoArgs){
    console.log("arg1: "+arg1);
    console.log("arg2: "+arg2);
    console.log("restoArgs: "+restoArgs);
};

function functionConSpread(...arrayValores){
    console.log("ArgsconSpread "+arrayValores);
};

functionConRest(...arrayValores);
functionConSpread(...arrayValores);
