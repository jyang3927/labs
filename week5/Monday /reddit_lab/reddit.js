let resultsBtn = document.getElementById("showResults"); 
let firstTenBtn = document.getElementById("firstTenResultsBtn"); 
let resultsContainer = document.getElementById("results"); 
let firstTenContainer = document.getElementById("firstTen"); 
let searchForm = document.getElementById("submitForm");
let searchInput = document.getElementById("searchInput");
let refreshBtn = document.getElementById("refresh");
//EVENT LISTENERS
// resultsBtn.addEventListener("click", callRedditPromise);

searchForm.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "showResults") {
        let search = searchInput.value;
        console.log(search)
        callRedditPromise(search);
    }

    if (e.target.id === "firstTenResultsBtn"){
        let search = searchInput.value; 
        firstTenResults(search);
    }

    if (e.target.id === "refresh") {
        location.reload();
    }
})

//FUNCTIONS
function callRedditPromise(value){
    fetch(`https://www.reddit.com/r/${value}/.json`)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        const posts = jsonData.data.children; 

        resultsContainer.style.display = "flex";
        firstTenContainer.style.display = "none"; 

        // // if(posts.is_video === true){
        //     const video = post.data.
        // // }

        posts.forEach(post => {
            //grab title, thumbnail, and  url for each post
            const title = post.data.title; 
            const image = post.data.thumbnail; 
            const link = post.data.url; 
            
            //create element hold entire post
            const divPost = document.createElement("div"); 
            //create image element 
            const imagePost = document.createElement("img"); 
            imagePost.src = image; 
            //create title for post 
            const titlePost = document.createElement("h3"); 
            titlePost.innerText = title;
            //create url link for post 
            const urlPost = document.createElement("a");
            urlPost.innerText = "Go to Post"
            urlPost.title = "Link here"
            urlPost.href = link;

            //append post elements to divPost
            divPost.append(titlePost, imagePost, urlPost);

            //add class to divPost 
            divPost.classList.add("eachPost")

            //append divPost to show on screen 
            resultsContainer.appendChild(divPost);

        })
    })

    .catch(error => {
        console.error(error);
    })
}

async function firstTenResults(value) {
    let result = await fetch(`https://www.reddit.com/r/${value}/.json`); 
    const jsonData = await result.json(); 
    let posts = jsonData.data.children.slice(0, 10);
    
    firstTenContainer.style.display = "flex"; 
    resultsContainer.style.display = "none";
    
    posts.forEach(post => {
        //grab title, thumbnail, and  url for each post
        const title = post.data.title; 
        const image = post.data.thumbnail; 
        const link = post.data.url; 
        
        //create element hold entire post
        const divPost = document.createElement("div"); 
        //create image element 
        const imagePost = document.createElement("img"); 
        imagePost.src = image; 
        //create title for post 
        const titlePost = document.createElement("h3"); 
        titlePost.innerText = title;
        //create url link for post 
        const urlPost = document.createElement("a");
        urlPost.innerText = "Go to Post"
        urlPost.title = "Link here"
        urlPost.href = link;

        //append post elements to divPost
        divPost.append(titlePost, imagePost, urlPost);

        //add class to divPost 
        divPost.classList.add("eachPost")

        //append divPost to show on screen 
        firstTenContainer.appendChild(divPost);
    })
}

//create function to clear children whenever button is pressed
// function clearChild() {

// }