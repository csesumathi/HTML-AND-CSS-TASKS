function getRandom()
{
    var min = 10000000;
    var max = 99999999;
    var value = Math.floor(Math.random() * (max - min) + min)
    var temp = value.toString().split('')
    if (new Set(temp).size != temp.length) {
        getRandom(min, max);
    } 
    else {
        document.getElementById("result").innerHTML = value;
    }

}

function getAge()
{
    var dobvalue = document.getElementById("dob").value;
    if (Date.parse(dobvalue)) {
        let inputdate = new Date(dobvalue);
        let currentdate = new Date();
        let milliseconds = parseInt(currentdate.getTime() - inputdate.getTime())
        let seconds = customfloor(milliseconds, 1000)
        let minute = customfloor(seconds, 60)
        let hour = customfloor(minute, 60)
        let day = customfloor(hour, 24)
        let month = getmonthData(inputdate, currentdate)
        let year = getyearData(inputdate, currentdate)
    
        document.getElementById("displaydate").innerHTML = `
    ${year}years${month}month${day}days${hour}hour${minute}minute${seconds}seconds${milliseconds}milliseconds
    `
    }
    else {
        document.getElementById("displaydate").innerHTML=`Please select the date`
    }
}
function customfloor(value1, value2)
{
    return value1 / value2;
}
function getyearData(value1, value2)
{
    let date1 = new Date(value1)
    let date2 = new Date(value2)
    return date2.getFullYear()-date1.getFullYear()
}
function getmonthData(value1, value2)
{
    let year = getyearData(value1, value2)
    let month = (year * 12) + (value2.getMonth() - value1.getMonth())
    return month;
}
