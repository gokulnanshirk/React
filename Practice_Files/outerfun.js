var outerFunction=function(arr1,arr2){
    var variable1="value";
    var self=this;
    console.log("this is ",this)
    var innerFunction=function(){
        console.log("ar 1",arr1)
        console.log("ar 2",arr2)
        console.log("variable1",variable1)
console.log("this is",self)
    }
    innerFunction();
}
var user={name:'gkl'}
outerFunction.call(user,"argument1","argumant2")