// TODO: Listen for page loading (window)
window.onload = (e) => console.log(`window`, `loaded`)

// TODO: Listen for page loading (document)
document.addEventListener(`DOMContentLoaded`, (e) => {

// TODO: Access the h1 in HTML page
    const h1 = document.querySelector(`h1`)
    console.log(`h1`, h1)

// TODO: Change color of app_title
    h1.classList.add(`title`)

// TODO: Change color of app_paragraph
    const p = document.getElementById(`app_paragraph`)
    p.classList.add(`paragraph`)

// TODO: Change color of main page
    const body = document.querySelector(`body`)
    body.classList.add(`main`)


// TODO: Add a new element to the container
    const div = document.getElementById(`container`)
    const h2 = document.createElement(`h2`)
    div.appendChild(h2)

// TODO: Remove the h1 from the page
    h1.remove()

// TODO: Listen for three mouse events
    const b1 = document.getElementById(`btn-title`)
    const b2 = document.getElementById(`btn-paragraph`)
    const b3 = document.getElementById(`btn-main`)

    b1.addEventListener(`mouseover`, (e) => console.log(`mouseover`, `hello`))
    b2.addEventListener(`mousedown`, (e) => console.log(`mousedown`, `hello`))
    b3.addEventListener(`click`, (e) => console.log(`click`, `hello`))

})