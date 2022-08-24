// Creation of instances so that a single object could be used multiple times for storing same keys with different values.
let questionOne = new Question('An HTML document can contain ____', ["Attributes", "Tags","Raw text", "All of these"], "All of these")
let questionTwo = new Question("A page designed in HTML is called ____", ["Application","Cover page", "Web Page", "Front-end"], "Web Page") 
let questionThree = new Question("An HTML document is saved with the ____ extension.", [".htl",".html", ".hml", ".htnl"], ".html")
let questionFour = new Question("The HTML document contains a root tag called ____", ["HEAD", "Title", "Body", "HTML"], "HTML")
let questionFive = new Question("If we want to place text around an image, which CSS property should we use?", ["push", "float", "align", "wrap"], "float")

// Passing constructing object to array
let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive]


//Constructor Object
function Question(title, options, answer){
    this.title = title
    this.options = options
    this.answer = answer
}

// Getting the container Element
const container = document.getElementById("container")

// Initializing a variable to increment the question
let currentQuestion = 0;


function startQuiz() {
    // Creating a h3 element using DOM
    let titleElement = document.createElement("h3")
    
    // Passing the question title in h3 through the questions array and targetting the title of the question
    titleElement.innerHTML = questions[currentQuestion].title
    
    //appending the h3 element to container div 
    container.appendChild(titleElement)

    // Creating a for loop to loop length of the options of the question array
    for (let i =0; i < questions[currentQuestion].options.length; i++) {
        // creating an input element
        const optionElement = document.createElement("input");
        
        // Setting the attributes to type = "radio" using the setAttribute method of DOM
        optionElement.setAttribute("type", "radio")

        // Passing the options of the question to each input element value
        optionElement.value = questions[currentQuestion].options[i]

        // Setting the name attribute to a common name of "question-one" so that only one option is selected
        optionElement.name = "question-one";    

        // creating a span element so that the text of the options could be visible using for the user
        let spanElement = document.createElement("span");

        // Passing the options as innerHTML to the span element with concatenating a br tag to break the line using template literal
        spanElement.innerHTML = questions[currentQuestion].options[i] + `<br />`

        // Next appending the input element in the container div
        container.appendChild(optionElement);

        // In the last appending the input element in the container div
        container.appendChild(spanElement);
        optionElement.addEventListener("click", function(e){
            console.log(e);
            nextBtn.setAttribute("onclick", "nextQuestion()");
            
            
        })
     
    }


    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next"
    container.appendChild(nextBtn);
 
    const previousBtn = document.createElement("button");
    previousBtn.innerText = "Previous";
    previousBtn.setAttribute("onclick", "previousQuestion()")
    container.appendChild(previousBtn)

    
}


function nextQuestion() {
    currentQuestion++;
    container.innerHTML = '';
    startQuiz();
}


function previousQuestion(){
    currentQuestion = currentQuestion -1;
    container.innerHTML = '';
    startQuiz();
}