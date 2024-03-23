

async function calculator(req,res){
    const body = req.body;
    let value1 = parseInt(body.value1);
    let value2 = parseInt(body.value2);
    let operator = body.operator;
    let result = 0;
    if (operator=="+"){
        result=value1+value2;
    }
    else if(operator=="-"){
        result=value1-value2;
    }
    else if(operator=="*"){
        result=value1*value2;
    }
    else{
        result=value1/value2;
    }
    
    return res.render("home",{"result":result});
}

async function getcalculator(req,res){
    const result = 0;
    return res.render("home",{"result":result});
}

module.exports={
    calculator,
    getcalculator,
}