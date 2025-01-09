function  sum(args){
    var sum1=args;
    return function adding(x){
        if(x==undefined){
            return sum1;
        }
        sum1+=x;
        return adding;
    }
    }
    console.log(sum(1)(2)());
