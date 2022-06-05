
let textEl1 = document.getElementById("text-el1")
let textEl2 = document.getElementById("text-el2")
let textEl3 = document.getElementById("text-el3")
let textEl4 = document.getElementById("text-el4")
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()" 
 
function generate() {
        let random = ""
        let pwLength = document.getElementById("length-el").value

        for ( let i=0; i < pwLength; i++ ) {
            let randomResult = characters[Math.floor(Math.random()*characters.length)]
            random += randomResult
        }
        return random
}

function submit() {
    textEl1.value =  generate()
    textEl2.value =  generate()
    textEl3.value =  generate()
    textEl4.value =  generate()
}



