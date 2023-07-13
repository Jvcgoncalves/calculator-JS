import { calculate } from "./calculate.js"
import { input } from "../index.js"
export function clickButtons(){
   document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
      charKeyBtn.addEventListener('click',function (){
         let value = charKeyBtn.dataset.value
         input.value += value
      })
   })
   document.getElementById('clear').addEventListener('click', function() {
      input.value = ''
      input.focus()
   })
   document.getElementById('equal').addEventListener('click', calculate)
} 

