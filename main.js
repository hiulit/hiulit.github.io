const ajax = new XMLHttpRequest()

ajax.open("GET", "https://api.github.com/users/hiulit/repos?per_page=100", true)
ajax.onload = function () {
    let data = JSON.parse(ajax.responseText)
    let projects = data.filter((item) => !item.fork)
    let forks = data.filter((item) => item.fork)
    renderList('Projects', projects, '.js-projects-template')
    renderList('Forks', forks, '.js-forks-template')
}
ajax.send()

function renderList(title, array, selector) {
    let template = `
    <h2>${title}</h2>
    <ul>
        ${array.map(item =>
            `<li>
                <a href="${item.html_url}">${item.name}</a>
            </li>`
        ).join('')}
    </ul>
    `
    document.querySelector(selector).innerHTML = template
}
