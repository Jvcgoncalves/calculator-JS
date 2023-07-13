import { input,allowedKeys } from "../index.js"
import { calculate } from "./calculate.js"
export function addKeyBoard(){
   input.addEventListener('keypress',function (ev){
      ev.preventDefault()
      if(allowedKeys.includes(ev.key)){
         input.value += ev.key
         return
      }
      if(ev.key==='Backspace'){
         input.value =input.value.slice(0,-1)
         return
      }
      if(ev.key==='Enter'){
         calculate()
      }
   })
   
} 