import React, { Component } from 'react'
import './Bookshelf.css'

export default class Bookshelf extends Component {

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  render() {  

    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    document.addEventListener("DOMContentLoaded", function(event) { 
      //Do work
  
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style={display: "none"};
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      console.log(slides.length)
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
  })

return (
<div>
        {/* Slideshow container */}
  <div className="slideshow-container">

  {/* Full-width images with number and caption text */}
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src="img1.jpg" style={{width: "100%"}}/>
      <div className="text">Caption Text</div>
    </div>

    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src="img2.jpg" style={{width:"100%"}}/>
      <div className="text">Caption Two</div>
    </div>

    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src="img3.jpg" style={{width:"100%"}} />
      <div className="text">Caption Three</div>
    </div>

  {/* <!-- Next and previous buttons --> */}
      <a className="prev" onClick={() => {plusSlides(-1)}}>&#10094;</a>
      <a className="next" onClick={() => {plusSlides(1)}}>&#10095;</a>
  </div>
    
  <br></br>
        {/* <!-- The dots/circles --> */}
    <div style="text-align:center">
      <span className="dot" onClick={() => {currentSlide(1)}}></span>
      <span className="dot" onClick={() => {currentSlide(2)}}></span>
      <span className="dot" onClick={() => {currentSlide(3)}}></span>
    </div>
</div>
    )
  }
}