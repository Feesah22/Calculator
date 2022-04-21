let total=0



document.querySelector('#plus').addEventListener('click', gotIt)
document.querySelector('#subt').addEventListener('click', dontGo)
document.querySelector('#multi').addEventListener('click', timesMe)
document.querySelector('#divi').addEventListener('click', splitIt)
document.querySelector('#clear').addEventListener('click', clearIt)





function gotIt() {
console.log('NO')
    let input1 = document.querySelector('#firstNum').value
    let input2 = document.querySelector('#secoNum').value
    let total=Number(input1)+Number(input2)
    document.getElementById('placeToPutResult').textContent=total
    document.getElementById('clear').value=0

}function dontGo() {
    console.log('NOB')
      let input1 = document.querySelector('#firstNum').value
      let input2 = document.querySelector('#secoNum').value
      let total = Number(input1) - Number(input2)
     document.getElementById('placeToPutResult').textContent = total


 }function timesMe() {
    console.log('NOBL')
     let input1 = document.querySelector('#firstNum').value
     let input2 = document.querySelector('#secoNum').value
     let total = Number(input1) * Number(input2)
     document.getElementById('placeToPutResult').textContent = total


} function splitIt() {
   console.log('NOBLE')
    let input1 = document.querySelector('#firstNum').value
    let input2 = document.querySelector('#secoNum').value
    let total = Number(input1) / Number(input2)
    document.getElementById('placeToPutResult').textContent = total

}function clearIt() {
console.log('NOBLES')
 let input1 = document.querySelector('#firstNum').value = (" ")
console.log("HELP")
let input2 = document.querySelector('#secoNum').value = (" ")
let total=0
document.getElementById('placeToPutResult').textContent = total


}
