const generateButton = document.querySelector(".generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector("img");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
     memeImg.src = url;
     memeTitle.innerHTML = title;
     memeAuthor.innerHTML = author;
}

generateButton.addEventListener("click", () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then (response => {
       return response.json()
    })
    .then (data => {
        return updateDetails(data.url, data.title, data.author);
    })
    .catch(error => {
        console.log("Error occured: ", error);
        throw error;
    })
})