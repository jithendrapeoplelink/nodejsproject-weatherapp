console.log('javascript loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{

// response.json().then((data)=>{



//     console.log(data)
//     })


// })






const weatherform = document.querySelector('form')
const search=document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')




weatherform.addEventListener('submit',(e)=>{
e.preventDefault()





const loc = search.value

fetch('http://localhost:5000/weather?add='+loc).then((response)=>{

response.json().then((data)=>{

if(data.error){

    msg1.textContent = data.error
}
    else{
        msg1.textContent = data.address
        msg2.textContent = data.forcast
    }


})
})


})


