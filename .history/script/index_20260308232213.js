// category data loaded
const categoryDataLoad = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories));
}


// background for active button

const removeBgActiveButton = () => {
    const activeButton = document.getElementsByClassName('active');
    for (let button of activeButton) {
        button.classList.remove('active')
    }
    console.log(activeButton)
    // activeButton.classList.remove('active');
}

// video data loaded
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((res) => res.json())
        .then((data) => {
            removeBgActiveButton();

            document.getElementById('all-btn').classList.add('active');
          displayVideos(data.videos);
      });
}

const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then((res) => res.json())
        .then((data) => {
            removeBgActiveButton();
            const clickButton = document.getElementById(`btn-${id}`)
            clickButton.classList.add("active")
            // console.log(clickButton)
          displayVideos(data.category);
      });

}


// category data display
const displayCategories = (categories) => {
    // console.log(categories)
    const categoryContainer = document.getElementById("category-container");
    for (let cat of categories) {
        const categoryDiv = document.createElement("Div");
        categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" class="btn btn-sm  hover:bg-[#FF1F3D] hover:text-white" onclick="loadCategoryVideos(${cat.category_id})">${cat.category}</button>
        `;

        categoryContainer.append(categoryDiv)
     }
    
    
}

// video data display

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";
    if (videos.length == 0) {
        videoContainer.innerHTML = `
         <div class=" flex flex-col justify-center  items-center  col-span-full">
                <div>
                    <img src="assets/Icon.png" alt="">
                </div>
                <div>
                    <p class="text-2xl font-semibold">Oops! Sorry, There is no content here</p>
                </div>
            </div>
        `;
        return;
    }

    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
          <div class="card bg-base-100 px-0 shadow-md">
            <figure class="relative">
                <img class="w-full h-[250px] object-cover"
                src=${video.authors[0].profile_picture}"
                alt="Shoes" />
                <span class="absolute text-white bottom-2 right-2 bg-black px-2 rounded-md">3hr 36 Minutes</span>
            </figure>
            <div class="flex gap-4 mt-5 p-4">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                            <img src="${video.thumbnail}" />
                        </div>
                    </div>

                </div>
                <div class="profile-description">
                    <h2 class="text-xl font-semibold">${video.title}</h2>
                    <p class="flex gap-2 text-slate-400">${video.authors[0].profile_name} <img class="w-6" src="https://cdn-icons-png.flaticon.com/128/6784/6784655.png" alt=""></p>
                    <p class="text-slate-400">${video.others.views} Views</p>
                </div>
            </div>

            <button onclick=} class="btn btn-success">View Details</button>
        </div>

        `;
        videoContainer.appendChild(videoDiv);
        
    });
};


categoryDataLoad();
// loadVideos();