const ajax = new XMLHttpRequest()

ajax.open("GET", "https://api.github.com/users/hiulit/repos", true)
ajax.onload = function () {
    let data = JSON.parse(ajax.responseText)
    let projects = data.filter((item) => !item.fork)
    let projectsTemplate = `
    <h2>Projects</h2>
    <ul>
        ${projects.map(item =>
            `<li>
                <a href="${item.html_url}">${item.name}</a>
            </li>`
        ).join('')}
    </ul>
    `
    let forks = data.filter((item) => item.fork)
    let forksTemplate = `
        <h2>Forks</h2>
        <ul>
            ${forks.map(item =>
            `<li>
                <a href="${item.html_url}">${item.name}</a>
            </li>`
        ).join('')}
        </ul>
    `
    if (projectsTemplate) document.querySelector('.js-projects-template').innerHTML = projectsTemplate
    if (forksTemplate) document.querySelector('.js-forks-template').innerHTML = forksTemplate
}
ajax.send()

