let movies = [
    {
        name:"Rudra",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellendus sint repellat molestiae, modi voluptatum earum, placeat nesciunt asperiores voluptatibus mollitia quidem. Rem eveniet officiis vel suscipit odio necessitatibus eum?",
        image:"images/slider 1.PNG"
    },

   

    {
        name:"IND vs WI",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellendus sint repellat molestiae, modi voluptatum earum, placeat nesciunt asperiores voluptatibus mollitia quidem. Rem eveniet officiis vel suscipit odio necessitatibus eum?",
        image:"images/slider 2.PNG"
    },

    {
        name:"Boba Fiit",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellendus sint repellat molestiae, modi voluptatum earum, placeat nesciunt asperiores voluptatibus mollitia quidem. Rem eveniet officiis vel suscipit odio necessitatibus eum?",
        image:"images/slider 3.PNG"
    },

    {
        name:"Raya",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellendus sint repellat molestiae, modi voluptatum earum, placeat nesciunt asperiores voluptatibus mollitia quidem. Rem eveniet officiis vel suscipit odio necessitatibus eum?",
        image:"images/slider 4.PNG"
    },

    {
        name:"Luca",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellendus sint repellat molestiae, modi voluptatum earum, placeat nesciunt asperiores voluptatibus mollitia quidem. Rem eveniet officiis vel suscipit odio necessitatibus eum?",
        image:"images/slider 5.PNG"
    }

];

var sliderBox = document.querySelector(".sliderBox");
let sliders = [];
let sliderIndex = 0;

const createSlide = ()=>{
    if(sliderIndex >= movies.length){
        sliderIndex = 0;
    }

    // creating DOM elements
    let slide = document.createElement("div");
    let ImgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    // attaching all elements
    ImgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(ImgElement);
    sliderBox.appendChild(slide);

    //setting up image
    ImgElement.src = movies[sliderIndex].image;
    sliderIndex++;

    // setting className
    slide.className = "slide";
    content.className = "slide-content";
    h1.className = "movie-tittle";
    p.className = "movie-desc";
    sliders.push(slide);

    //adding sliding effects
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30*(sliders.length -2)}px )`;
    }

}

for(var i=0; i < 5; i++){

    createSlide();
}

setInterval(()=>{
    createSlide();
},2500);

// video cards
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item)=>{
    item.addEventListener("mouseover", ()=>{
        let video = item.children[1];
        video.play();
    })
})

// card sliders

const cardContainer = document.querySelectorAll(".card-container");
const preBtn = document.querySelectorAll(".pre-btn");
const NextBtn = document.querySelectorAll(".next-btn");

cardContainer.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    preBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerWidth + 200;
    })

    NextBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerWidth - 200;
    })

})
