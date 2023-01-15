let insert = document.getElementById('insert')
let inp = document.createElement('input')
document.body.append(inp)
inp.className = 'inp'

inp.addEventListener('keydown', (event)=>{
    insert.innerHTML = `
    <div class='key'>
    ${event.key}
    <small>Key</small>
    <div>
    <div class='key'>
    ${event.keyCode}
    <small>KeyCode</small>
    <div>
    <div class='key'>
    ${event.code}
    <small>Code</small>
    <div>`
})
