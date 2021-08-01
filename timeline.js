const arr = [
    {
        url:"https://res.cloudinary.com/pitch-software/image/upload/f_auto/website-assets/home/video-story-2/1_CreativeProposal_Editor.jpg",
        subtitle:"Intuitive editing options and smart formatting help anyone feel like a power user.",
        title:"Creative proposal"
    },
    {
        url: "https://i.ytimg.com/vi/RThmp6VclMQ/maxresdefault.jpg",
        subtitle:"Find the perfect image for every slide. We integrate nsplash, Giphy, Icons8, and Brandfetch",
        title:"My Favorit Pitch",
    },
    {
        url: "https://res.cloudinary.com/pitch-software/image/upload/f_auto/website-assets/home/use-cases-tabs/Editor_-_SalesDeck_3.jpg",
        subtitle:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
        title:"Digital talent"
    }   
];



const menu = document.getElementById("menu");
const images = document.getElementById("images");
const imageDiv = document.createElement("div");
imageDiv.className = "img";
images.appendChild(imageDiv);

let i = 0;
let Timer = setInterval(() => {
        if(i === arr.length || i === 0) {
                 i = 0;
                 menu.children[arr.length-1].children[1].classList.remove("display");
                 menu.children[arr.length-1].classList.remove("display-color");
        } else {
                 menu.children[i-1].children[1].classList.remove("display");
                 menu.children[i-1].classList.remove("display-color");
        }
        menu.children[i].classList.add("display-color");
        menu.children[i].children[1].classList.add("display");
        imageDiv.style.backgroundImage = `url(${arr[i].url})`;  
        i++;
   }, 3000)


arr.map(obj => {
    let menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    menuDiv.addEventListener("click", () => {
        clearInterval(Timer);
        images.children[0].style.backgroundImage = `url(${obj.url})`;  

           for(let i = 0; i < arr.length; i++) {
               menu.children[i].classList.remove("display-color");
               menu.children[i].children[1].classList.remove("display");
            }
        menuDiv.classList.add("display-color");
        menuDiv.children[1].classList.add("display");
       })

    let header = document.createElement("h3");
    header.innerHTML = obj.title;
    header.className = "menu-header";
    let description = document.createElement("p");
    description.className = "menu-description";
    description.innerHTML = obj.subtitle;
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("small-image");
    imageDiv.style.backgroundImage = `url(${obj.url})`;
    
    menuDiv.appendChild(header);
    menuDiv.appendChild(description);
    menuDiv.appendChild(imageDiv);
    menu.appendChild(menuDiv); 
})


let modal = document.getElementById("myModal");
let modal_img = document.getElementById("modal-img");
let span = document.getElementById("close");


imageDiv.onclick = function(){
    modal.style.display = "block";
    modal_img.style.backgroundImage = images.children[0].style.backgroundImage;
}

span.onclick = function() {
    modal.style.display = "none"
}

























// const showSlides = () =>{
  
//  const slides = document.getElementsByTagName("img");

//     for(var i = 0; i < slides.length-1; i++){
//         document.slide.src = slides[i]
//         console.log(slides)
//      if( i < slides.length - 1){
//          i++;
//      } else {
//           i = 0;
//       };
    
//       setTimeout("showSlides()", 3000)
 
//     }
   
//     }
//  window.onload = showSlides();
 



















