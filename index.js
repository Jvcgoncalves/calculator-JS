import { addKeyBoard } from "./functions/addKeyBoard.js"
import { clickButtons } from "./functions/addClickButtons.js"
import { switchTheme } from "./functions/switchTheme.js"
import { copyToClipboard } from "./functions/copyToClipboard.js"
let input = document.getElementById('input')
let resultInput = document.getElementById('result')
let main = document.querySelector('main')
let root = document.querySelector(':root')
let switchBtn= document.getElementById('themeSwitcher')
let allowedKeys = ["(",")","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","%"]
export {input,resultInput,main,root,switchBtn,allowedKeys}

addKeyBoard()
clickButtons()
switchTheme()
copyToClipboard()