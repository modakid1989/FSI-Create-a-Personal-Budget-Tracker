let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
//console.log(weeklyExpenses,monthlyExpenses,annualExpenses)
console.log(weeklyExpenseQuestions)

for(let i = 0; i< weeklyExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(weeklyExpenseQuestions[i])) 
    console.log(typeof response)
    weeklyExpenses = weeklyExpenses + response 
    console.log(weeklyExpenses)


}

for(let i = 0; i< monthlyExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(monthlyExpenseQuestions[i])) 
    console.log(typeof response)
    weeklyExpenses = weeklyExpenses + response 
    console.log(weeklyExpenses)


}

for(let i = 0; i< annualExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(annualExpenseQuestions[i])) 
    console.log(typeof response)
    weeklyExpenses = weeklyExpenses + response 
    console.log(weeklyExpenses)


}






//console.log(monthlyExpenseQuestions)
//console.log(annualExpenseQuestions)