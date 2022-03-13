const numbers=[1,2,3,4]

const section=document.getElementById('section')
const select=document.createElement('select')
numbers.forEach(item=>{
    const option=document.createElement('option')
    option.setAttribute('value',`${item}`)
    option.innerText=item
    select.appendChild(option)
    section.appendChild(select)

})