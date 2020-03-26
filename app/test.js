var test = {
    say : function(a,b,c) {
        console.log(a+b+c);
    }};
var personMing = {
    name:"小明",
    sex: "男",
    age: 99
}
// personWang.say.call(personMing);
// personWang.say.apply(personMing);
// personWang.say.bind(personMing)();

// test.say.call(null,1,2,3);
// test.say.bind(null,1,2,3)();
// test.say.apply(null,[1,2,3]);

// function sum(){
//     for (var i = 0 , _sum = 0; i < arguments.length; i++) {
//         _sum += arguments[i];
//     }
//     return _sum;
// }
// console.log(sum(1,2,3,4,5,6))
//计算实参列表所有数字的平均数，一定要先计算和
//具体不知道参数有多少，所以只能用arguments数组，借助apply的特性传值
//类似于ES6中的解构语法

function average(){
    var _sum = sum.apply(null,arguments);
    return _sum / arguments.length;
}

console.log(average(4,4,4,5,5,5));



