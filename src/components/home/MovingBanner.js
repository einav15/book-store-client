import React from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
 
const content = [
    {
      title: "Sign Up!",
      description:
        "To get the best books for the best prices!",
      button: {text: "Sign In/Up", href: "/login"},
      image: "https://i.ibb.co/xH1VZkF/photo-1529473814998-077b4fec6770.jpg",
    },
    {
      title: "We would like to hear from you!",
      description:
        "Please contact us for any question, no matter how little. \nWe are here for you!",
      button: {text: "Contact Us", href: "/contact"},
      image: "https://i.ibb.co/6wT5RLz/photo-1588497859490-85d1c17db96d.jpg",
    },
    {
      title: "Looking for a new Book to read?",
      description:
        "Enjoy our vast collection of books from all around the world! \nTry our new advanced search to find your next read",
      button: {text: "Advanced Search", href: "/advanced"},
      image: "https://i.ibb.co/4851pH4/photo-1588497859490-85d1c17db96d.jpg",
    },
    {
        title: "Coming Soon!",
        description:
          "Marvel and DC Comics!!",
        image: "https://i.ibb.co/ysQy4Th/charset-Ascii-binary-comment.jpg",
      }
  ];
  
const MovingBanner = () => {
    return (
        <div className="homepage-item banner__container">
            <Slider className="slider-wrapper"  autoplay={5000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            {item.button && <button><Link className="banner__link" to={item.button.href}>{item.button.text}</Link></button>}
                        </div>
                    </div>
                ))}
            </Slider>
            <br /><br /><br />
            <div className="side-menu__breaker"></div>
        </div>
    )
}

export default MovingBanner
