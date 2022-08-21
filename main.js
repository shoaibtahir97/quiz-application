var questions = [{
    question: "What is HTML",
    options: ["Hyper Text Markup Language", "Hyper Text Makeup Language", "Hyper Test Markup Language", "Hypo Test Markup Language"],
    answer: "Hyper Text Markup Language"
},
{
    question: "What is CSS",
    options: ["Cascading Selecting Sheet", "Cascading Style Sheet", "Cascading Style Shealth", "Hypo Test Markup Language"],
    answer: "Hyper Text Markup Language"
},
{

},
{

},
{

},
{

},
{
    
}] 

var container = document.getElementById("container")




function startQuiz() {
    var titleElement = document.createElement("h3")
    
    titleElement.innerText = questions[0].question

    container.appendChild(titleElement)

    for(var i = 0; i < questions[0].options.length; i++){
        var optionElement = document.createElement("input")
        optionElement.setAttribute("type", "radio")
        optionElement.value = questions[0].options.length[i]
    }
}

