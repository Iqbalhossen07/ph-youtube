// category data loaded
const categoryDataLoad = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories));
}

// video data loaded
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((res) => res.json())
      .then((data) => displayVideos(data.videos));
}


// category data display
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    for (let cat of categories) {
        const categoryDiv = document.createElement("Div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;

        categoryContainer.append(categoryDiv)
     }
    
    
}

// video data display

const displayVideos = (videos) => {
    const videoContainer = document.ge
  console.log(videos);
};


categoryDataLoad();
loadVideos();