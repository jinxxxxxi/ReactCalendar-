//得到每個月有幾天
function getDaysOfNowMonth(year,month) {
    if (month == 12){
        return new Date(new Date(year+1,1,1)-1).getDate()
    }else {
        return new Date(new Date(year,month,1)-1).getDate()
    }
}


//得到每個月第一天是星期几
function getWeekdayOfFirstDay(year,month) {
    return new Date(year,month-1,1).getDay()
}

//得到每個月的上一個月有多少天
function getDaysOfLastMonth(year,month) {
    return new Date(new Date(year, month - 1, 1) - 1).getDate()
}


function showMonthTable(year,month) {
    var rearArr = [24,25,26,24,28,29,30,31];
    var monthArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var headArr = [1,2,3,4,5,6,7,8,9,10,11];
    var firstWeekday = getWeekdayOfFirstDay(year,month);
    var dayOfLastMonth = getDaysOfLastMonth(year,month);
    var dayOfNowMonth = getDaysOfNowMonth(year,month);
    //處理上個月尾巴數組
    for(let i=0; i<31-dayOfLastMonth; i++){
        rearArr.pop();
    }
    rearArr = rearArr.slice(rearArr.length-firstWeekday);

//    處理本月數組
        monthArr = monthArr.slice(0,dayOfNowMonth)
//    處理下個月開頭數組
        headArr = headArr.slice(0,42-rearArr.length-monthArr.length);
        return{
            rearArr,
            monthArr,
            headArr
        }
}

export default showMonthTable