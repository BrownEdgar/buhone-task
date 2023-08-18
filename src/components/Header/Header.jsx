import Slider from 'react-slick';

import './Header.css';

const Header = () => {
  const settings = {
   
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
		<div className='Slider'>
      <Slider {...settings} className="image-slider-container">
        <div className="slick-slide">
					<div className="Slider__text">
						<h1>Бухгалтерские услуги в Санкт-Петербурге</h1>
						<button className='button'>Наша презентация</button>
					</div>
          <img src="http://spbinvest.org/upload/main-promo.jpg" alt="Slide 1" />
        </div>
        <div className="slick-slide">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ0VqbkMobxN4bS_gdQECaa9-9QW6GtttyQ&usqp=CAU" alt="Slide 2" />
        </div>
        <div className="slick-slide">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgD6Q9l9qmv20uUVx7uuWwjaZ3FTK4i8tsQ&usqp=CAU" alt="Slide 2" />
        </div>
        <div className="slick-slide">
          <img src="https://news.itmo.ru/images/news_trans/big/p9447.jpg" alt="Slide 2" />
        </div>
       
      </Slider>
    </div>
  );
};

export default Header;


  


