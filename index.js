const receiveJokes = async () => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        const data = await response.json();
        const samJoke = document.querySelector("#samJoke");
        samJoke.innerHTML = data.joke;
    } catch (error) {
        // Handle the error here
    }
};

window.addEventListener("load", () => {
    receiveJokes();
});

















// const receiveMemes = () => {
//     try {
//         const memePaths = [
//             "memes/meme1.jpg",
//             "memes/meme2.png",
//             "memes/meme3.jpg",
//             // Add more meme image paths as needed
//         ];

//         const randomIndex = Math.floor(Math.random() * memePaths.length);
//         const randomMemePath = memePaths[randomIndex];

//         const samMeme = document.querySelector("#samMeme");
//         samMeme.src = randomMemePath;
//     } catch (error) {
//         // Handle the error here
//         console.log("Error occurred while fetching memes:", error);
//     }
// };

// window.addEventListener("DOMContentLoaded", receiveMemes);


// const receiveMemes = async () => {
//     try {
//         const response = await fetch("https://api.memegen.link/images", {
//             headers: {
//                 Accept: "application/json"
//             }
//         });
//         const data = await response.json();
//         const samMeme = document.querySelector("#samMeme");
//         samMeme.innerHTML = data.meme;
//     } catch (error) {
//         // Handle the error here
//     }
// };

// window.addEventListener("load", () => {
//     receiveMemes();
// });