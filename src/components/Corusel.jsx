import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { AiOutlineCalendar } from "react-icons/ai";

import CoruselImg from '../assets/coruselImg.jpg'
import CoruselImg2 from '../assets/caruselImg2.jpg'
import CoruselImg3 from '../assets/caruselImg3.jpg'
import CoruselImg4 from '../assets/caruselImg4.jpg'
import CoruselImg5 from '../assets/caruselImg5.jpg'
import CoruselImg6 from '../assets/caruselImg6.jpg'
import CoruselImg7 from '../assets/caruselImg7.jpg'
import CoruselImg8 from '../assets/caruselImg8.jpg'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 700
    };
    return (
      <Wrapper>
      <div className="container">
        <Slider {...settings}>
          <a href="#">
            <img src={CoruselImg} alt="" />
            <div className="text">
              <h4>Бу ҳолатда онлайн ташхис қўйиб бўлмайди!</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg2} alt="" />
            <div className="text">
              <h4>Бачадон найи шамолласа...</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg3} alt="" />
            <div className="text">
              <h4>Қайси маҳсулотлар иммунитетни оширади? 10:58 / 18.04.2022</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg4} alt="" />
            <div className="text">
              <h4>Нишолданинг фойдали хусусиятлари ҳақида биласизми?</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg5} alt="" />
            <div className="text">
              <h4>Қайси маҳсулотлар иммунитетни оширади?</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg6} alt="" />
            <div className="text">
              <h4>Бу ҳолатда онлайн ташхис қўйиб бўлмайди!</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg7} alt="" />
            <div className="text">
              <h4>Бачадон найи шамолласа...</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
          <a href="#">
            <img src={CoruselImg8} alt="" />
            <div className="text">
              <h4>Қайси маҳсулотлар иммунитетни оширади?</h4>
              <p><AiOutlineCalendar/> <span>19:50 / 18.04.2022</span> </p>
            </div>
          </a>
        </Slider>
      </div>


      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  padding: 50px;
  background-color: #F9F9F9;
  width: 100%;

  a{
    text-decoration: none;
    /* width: 300px;
    height: 400px; */
    .text{
      padding: 20px;
      background-color: #fff;
      width: 300px;
      height: 178px;
        h4{
          flex: 1 1;
          font-size: 18px;
          font-weight: 500;
        }

        p{
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: flex-start;
          span{
            margin-top: 5px;
          }
        }

    }
    img{
      width: 300px;
      height: 178px;
    }
  }
`