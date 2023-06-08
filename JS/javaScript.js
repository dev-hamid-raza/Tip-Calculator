// Getting Data 
const gettingData = () => {
    let billInput = parseInt(document.getElementById('bill-input').value)
    let numberOfPersons = parseInt(document.getElementById('person').value)
    const data = [billInput , numberOfPersons]
    return data
}
// Percentage Five Calculating
const percentFive = () => {
    let value = gettingData()
    calculating(value[0], value[1], 5)
}
// Percentage Ten Calculating
const percentTen = () => {
    let value = gettingData()
    calculating(value[0], value[1], 10)
}
// Percentage Fifteen Calculating
const percentFifteen = () => {
    let value = gettingData()
    calculating(value[0], value[1], 15)
}
// Percentage twentyFive Calculating
const percentTwentyFive = () => {
    let value = gettingData()
    calculating(value[0], value[1], 25)
}
// Percentage Fifty Calculating
const percentFifty = () => {
    let value = gettingData()
    calculating(value[0], value[1], 50)
}
// Custom percentage Calculating 
const inputFun = () => {
    let value = gettingData()
    calculating(value[0], value[1])
}
// calculating Function 
const calculating = (bill, persons, percent) => {
    let tip = bill * percent / 100
    let result = tip / persons
    let finalResult = result.toFixed(2)
    let totalTip = parseInt((bill / persons) + +finalResult)
    document.getElementById('result-tip').innerHTML = finalResult
    document.getElementById('result-total').innerHTML = totalTip.toFixed(2)
}
