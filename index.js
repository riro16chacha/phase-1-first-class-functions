function receivesAFunction(callbackFunction){
    const name=callbackFunction();
}
function returnsANamedFunction(callbackFunction){
    function aName(name){
    }return aName;

}
function returnsAnAnonymousFunction(){
    return function(){}
}
