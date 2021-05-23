const title = document.getElementById('title')
const themeSelector = document.getElementById('themeSelector')
const aboutButton = document.getElementById('about')
const acordeon = document.getElementById('acordeon')

themeSelector.addEventListener('click', (e) => {
    if(e.target.id == 'button1'){
        title.classList.remove('title')
        title.classList.remove('title-yellow')
        title.classList.remove('title-green')
        title.classList.add('title--red')
        console.log(e.target.id)
    } else if (e.target.id == 'button2'){
        title.classList.remove('title')
        title.classList.remove('title-red')
        title.classList.remove('title-yellow')
        title.classList.add('title-green')
        console.log(e.target.id)
    } else if (e.target.id == 'button3'){
        title.classList.remove('title')
        title.classList.remove('title-red')
        title.classList.remove('title-green')
        title.classList.add('title-yellow')
    }
})
