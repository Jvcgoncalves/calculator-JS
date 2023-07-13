import { resultInput,input } from "../index.js"
export function calculate(){
   resultInput.classList.add('error')
   resultInput.value='ERRO'
   let result = eval(input.value)
   resultInput.value= result
   resultInput.classList.remove('error')
}