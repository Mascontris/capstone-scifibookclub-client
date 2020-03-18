import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image'
//import './Bookshelf.css'
import './UserBooks.css'

export default class UserBooks extends Component {

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  render() {  
    const slideImages = [
      'https://images.squarespace-cdn.com/content/v1/513a230ae4b0f3422dd7d5ad/1548698797451-FX2DF66T2741LATEGU6L/ke17ZwdGBToddI8pDm48kJme_vyRngthM-lqQfhlIH1Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHdR4tGE0fFJHT7ppaMbI8l68Pv4V3IjdRIUtf6KN3cEolyXOhr1HlgtlqrKgcoGR0/premade-space-sci-fi-e-book-covers-for-indie-authors.jpg',
      'https://www.goodcoverdesign.co.uk/wp-content/uploads/2013/08/MindSpace-email7c.jpg',
      'https://artfulcover.com/wp-content/uploads/2018/08/Artful-Cover_premade_120238162_Elemental-Mode_800x1200.jpg'
    ];
     
    const properties = {
      duration: 1000000,
      transitionDuration: 500,
      infinite: false,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      autoplay: false,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
     
    //const Slideshow = () => {
        return (
          <div className="top__margin slide-container">
            <Slide {...properties}>
              <div className="each-slide">
                <div className="cover-image" style={{'backgroundImage': `url(${slideImages[0]})`}}>
                  {/* <span></span> */}
                </div>
                <p className="label">Author</p>
              </div>
              <div className="each-slide">
                <div className="cover-image" style={{'backgroundImage': `url(${slideImages[1]})`}}>
                  {/* <span>Slide 2</span> */}
                </div>
              </div>
              <div className="each-slide">
                <div className="cover-image" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                  {/* <span>Slide 3</span> */}
                </div>
              </div>
            </Slide>
          </div>
        )
    }
  }
//}