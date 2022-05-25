const questions = [
   { 'question' : 'Who is the Director of Pec',
    'choices':['baldev setia','dheeraj sanghi', 'captain amrinder','bhagwantmaan']
},
   { 'question': 'How many comapnies recruit at PEC annually?',
    'choices':['200','150','250','150']
},
{
    'question':'crush of  Ekamdeep',
    'choices': ['poojagrover','alkajindal','padmavati','rabiakamra']
},
{
    'question':'dialouge of ajaypal singh',
    'choices' : ['privacy😂','ki krndea je','gadda bahr set dena','hor te']
    
},
{
    'question': 'Paru di job lgjugi?',
    'choices':['lgjugi par ght package te','jeho je lachan a aukha hi a','lgge na lgge sanu ki','hitsbuleye ton mba di coaching']
},
{
    'question': 'ajaypal da future kade ch hai ?',
    'choices' :['peb','jpmc','ai/ml','canada']
},
{
    'question': 'Ekam di cg 7 ton ght a skdi a?',
    'choices':['kde v nhi uin ronda renda','eni tan chatda teachers di kidan aju ght', 'je ankita milje fer ho skda😂','askdi a']
}

]
var score = 0;
function shuffle(arr){
    for(let i = 0;i<arr.length;i++){
        let ind = Math.floor(Math.random()*(i+1))
        temp = arr[i]
        arr[i] = arr[ind]
        arr[ind] = temp
    }
}
function optiondkhao(option){
    let tempo = score
    const options = option.closest('.options')
    console.log(options)
    options.querySelectorAll('button').forEach((button)=>{
        button.click()
        score = tempo

    })
}
function createoption(choice,ans = false){
    const optionaladabba = document.createElement('div')
    optionaladabba.classList.add("option")
    const button = document.createElement('button')
    button.innerHTML = choice

    button.addEventListener('click' ,() =>{
        if(ans == true){
            if(!button.classList.contains('correctchoice')){
                score++

            }
            button.classList.add('correctchoice')
        }
        else{
        button.classList.add('wrongchoice')
    }
    optiondkhao(button)

    })
    optionaladabba.append(button)
    return optionaladabba



}
shuffle(questions)
questions.forEach((current,number)=>{
    const container = document.createElement('div')
    container.classList.add("container")

    const question = document.createElement('div')
    question.classList.add("question")

    question.innerHTML = `${number+1}.) ${current.question}`
    container.append(question)


    const options  = document.createElement('div')
    options.classList.add('options')

    const optionalarry = []
    current.choices.forEach((option,index)=>{

        if(index == 0){
            optionalarry.push(createoption(option,true))
        }
        else{
            optionalarry.push(createoption(option))
        }

    })
    shuffle(optionalarry)
optionalarry.forEach((option)=> {
    options.append(option)
})
container.append(options)
document.body.append(container)


})


const numbertanvekhla = document.querySelector('.button1')
numbertanvekhla.addEventListener('click',()=>{
    numbertanvekhla.innerHTML =`${score}/${questions.length}`
})