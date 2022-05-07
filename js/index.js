document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
})

const bookUrl = 'http://localhost:3000/books'
let bookList = document.getElementById('list')
let panel = document.getElementById('show-panel')

function fetchBooks() {
    fetch(bookUrl)
    .then(response => response.json())
    .then(data => bookData(data))

}
function bookData(data) {
    for(let item of data) {
        let bookNameList = document.createElement('li')
        bookNameList.textContent = `${item.title}`
        bookList.append(bookNameList)

        bookNameList.addEventListener('click', function(e) {
            e.preventDefault()
            panel.innerHTML = ''

            let image = document.createElement('img')
            image.src = item.img_url
            
            let description = document.createElement('p')
            description.innerText = item.description

            let userLi = document.createElement('ul')

            let likeButton = document.createElement('button')
            likeButton.innerHTML = 'Like'
            likeButton.addEventListener('click', function(){

                let newUser = { "id": 1, "username": "pouros" }

                let userList = item.users

                userList.push(newUser)
                
                fetch('http://localhost:3000/books/:id') {
                    method: 'PATCH',
                    body: JSON.stringify()
                }
                
            
            })
        
            panel.append(image, description, userLi, likeButton)

            for (const user of item.users) {
                console.log(user.username)
                let username = document.createElement('li')
                username.innerText = `${user.username}`
                userLi.append(username)
                
            }
        })
    }
}

