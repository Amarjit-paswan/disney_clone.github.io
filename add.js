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

var SliderBox = document.querySelector(".sliderBox");
var sliders = [];
var sliderIndex = 0;

var createSlide = ()=>{
    if(sliderIndex >= movies.length){
        sliderIndex = 0;

    }

    // creating DOM elements
    var Slide = document.createElement("div");
    var ImgElement = document.createElement("img");
    var content = document.createElement("div");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");

    // attaching all elements
    ImgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    Slide.appendChild(content);
    Slide.appendChild(ImgElement);
    SliderBox.appendChild(Slide);

    //setting up image
    ImgElement.src = movies[sliderIndex].image;
    sliderIndex++;

    //setting className
    Slide.className = "slide";
    content.className = "slide-content";
    h1.className = "movie-tittle";
    p.className = "movie-desc";
    sliders.push(Slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
    }

}

for(var i = 0; i < 5; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},2500);
// createSlide();

const videoCards =document.querySelectorAll(".video-card");

videoCards.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        let video = item.children[1];
        video.play();
    })
})