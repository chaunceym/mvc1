import './app1.css'

import $ from 'jquery'

const add = $('#add')
const reduce = $('#reduce')
const ride = $('#ride')
const divide = $('#divide')
const number = $('#number')
let x = localStorage.getItem('n')
number.text(x)

add.on('click', ()=>{
    let n = parseInt(number.text())
    n += 1
    localStorage.setItem('n',n)
    number.text(n)
})
reduce.on('click', ()=>{
    let n = parseInt(number.text())
    n -= 1
    localStorage.setItem('n',n)
    number.text(n)
})
ride.on('click', ()=>{
    let n = parseInt(number.text())
    n *= 2
    localStorage.setItem('n',n)
    number.text(n)
})
divide.on('click', ()=>{
    let n = parseInt(number.text())
    n /= 2
    localStorage.setItem('n',n)
    number.text(n)
})