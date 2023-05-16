const formEl = document.getElementById('form')
const output = document.getElementById('output')

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    formEl.reset()
})



function type(callback) {
    callback()
}

function reps(callback) {
    callback()
}
function time(callback) {
    setTimeout(() => {
        const time = "Done"
        callback()
    },60000)
}


//forgot to commit with workout setup