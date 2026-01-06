let userscore = 0
let computerscoree = 0
const choices = document.querySelectorAll(".choice")
let stat = document.querySelector("#msg")
const scc = document.querySelector("#myscore")
const ccc = document.querySelector("#computerscore")

const comchoice = () =>{
    const options = ["rock","paper","scissors"]
    const randidx = Math.floor(Math.random()*3)
    return options[randidx]
}

console.log(stat)
const drawgame = () =>{
    console.log("game is draw")
    stat.innerText = `Game Is Draw. You both select the same`
     stat.style.backgroundColor = "yellow"
    stat.style.color = "black"
    stat.style.display = "inline"
    stat.style.padding = "10px"
    stat.style.borderRadius = "10px"


}
const whowins = (userwin, userchoice ,cptchoice) =>{
if(userwin){
    userscore++
    scc.innerText = `${userscore}`
    stat.innerText = `Congratulations You Win! your ${userchoice} beats ${cptchoice}`
    stat.style.backgroundColor = "green"
    stat.style.color = "white"
    stat.style.display = "inline"
    stat.style.padding = "10px"
    stat.style.borderRadius = "10px"

}else{
     computerscoree++
    ccc.innerText = `${computerscoree}`
      stat.innerText = `You Fucked Up! ${cptchoice} beats your ${userchoice} `
       stat.style.backgroundColor = "red"
    stat.style.color = "white"
    stat.style.display = "inline"
    stat.style.padding = "10px"
    stat.style.borderRadius = "10px"
}
}

const playgame = (userchoice) => {
console.log("user choice = ", userchoice)
const cptchoice = comchoice()
console.log("computer choice = ", cptchoice)
if(userchoice === cptchoice){
drawgame()
}else{
    let userwin = true
    if(userchoice==="rock"){
      userwin = cptchoice === "paper" ? false:true
    }else if(userchoice==="paper"){
        userwin = cptchoice === "scissors" ? false:true
    }else{
         userwin = cptchoice === "rock" ? false:true
    }
    whowins(userwin,userchoice,cptchoice)
}
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})
