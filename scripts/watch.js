const watchContainer = document.getElementById('watchContainer')
const watch = document.createElement('H1')

setInterval(() => {
    const date = new Date()
    watch.textContent = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    watchContainer.appendChild(watch)    
}, 1000);