var name="mohan";
var name = "hari";

// console.log(name)

var scopeCheck=()=>{
    var flag=true
    if(flag){
        var message="Flag ...!"
    }
    console.log(message)
    // console.log(age)
}
scopeCheck()
