// var slider = document.getElementById('slider')
// var sliderItem = slider.getElementsByTagName('div')
// var headings =document.getElementsByTagName('h2')

// for(i = 0; i <sliderItem.length; i++){
//     headings[0].classList.add('active');
//     headings[i].setAttribute("id", i);
//     hedings[i].innerHTML = i;
//     headings[i].addEventListener("click", runSlider);

// }


// function runSlider(){
// var headingNumber = this.getAttribute("id");
// for(i = 0; i < sliderItem.length; i++){
//   sliderItem[i].classList.remove('active');
//   sliderItem[headingNumber].classList.add('active');
//   headings[i].classList.remove('active');
//   headings[headingsNum].classList.add('active');

// }
// }



function changeHeadingBg(){
    document.getElementByTagName("h2").style.color = "red";
}
