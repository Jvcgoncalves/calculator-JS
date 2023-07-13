import { resultInput } from "../index.js"
export function copyToClipboard(){
   document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
      let button= ev.currentTarget
      if(button.innerText==='Copy'){
         button.innerText='Copied!'
         button.classList.add('success')
         navigator.clipboard.writeText(resultInput.value)
      } else {
         button.classList.remove('success')
         button.innerText='Copy'
      }
   })
}