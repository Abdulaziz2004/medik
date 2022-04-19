import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { cartData } from "../pages/interyuv";

import { AiOutlineCalendar } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import RightImg from "../assets/rightImg.jpg"

import SimpleSlider from "../components/Corusel";


const InteryuvDesscription = () => {
  function myFunction() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
  }

  const { slug } = useParams();

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 left">
            <h2>СЎНГГИ ЯНГИЛИКЛAР</h2>

            <div className="left-links">
                <a href="#">
                  <p>Бу ҳолатда онлайн ташхис қўйиб бўлмайди!</p>
                  <span>14:09 / 18.04.2022</span>
                </a>
                <div className="line"></div>
            </div>
            <div className="left-links">
                <a href="#">
                  <p>Бачадон найи шамолласа...</p>
                  <span>14:09 / 18.04.2022</span>
                </a>
                <div className="line"></div>
            </div>
            <div className="left-links">
                <a href="#">
                  <p>Қайси маҳсулотлар иммунитетни оширади?</p>
                  <span>14:09 / 18.04.2022</span>
                </a>
                <div className="line"></div>
            </div>
            <div className="left-links">
                <a href="#">
                  <p>Нишолданинг фойдали хусусиятлари ҳақида биласизми?</p>
                  <span>14:09 / 18.04.2022</span>
                </a>
                <div className="line"></div>
            </div>
            <div className="left-links">
                <a href="#">
                  <p>Организмни антибиотиклардан ҳимояловчи бактериялар яратилди</p>
                  <span>14:09 / 18.04.2022</span>
                </a>
                <div className="line"></div>
            </div>
            <div className="left-links">
                <a href="#">
                  <p>Брутселёз одамлар орқали юқадими?</p>
                  <span>14:09 / 18.04.2022</span>
                </a>
                <div className="line"></div>
            </div>
          </div>

          <div className="col-lg-6 middle">
            <div className="card">
              {cartData
                .filter((blog) => blog.id === Number(slug))
                .map(({ cartImg, title, desscription, id }) => {
                  return (
                    <Desscription key={id}>
                      <img src={cartImg} alt="" />
                      <p>
                        <AiOutlineCalendar /> <span>20:00 / 25.03.2022</span>
                      </p>
                      <h3>{title}</h3>
                      <h5>
                        Юртдошларимизнинг тиббий билимларини синовдан ўтказиш
                        учун сўровнома ўтказдик. Қуйида саволлар билан
                        танишишингиз мумкин.
                      </h5>
                      <h5>
                        1) Тозалик ҳақидаги фан нима деб аталади? (гигиена){" "}
                      </h5>
                      <h5>
                        2) Баскетболчи бўлиш учун одамда нима бўлиши керак?
                        (бўй){" "}
                      </h5>
                      <h5>
                        3) Одамларнинг оммавий равишда касалланиши нима деб
                        аталади? (эпидемия){" "}
                      </h5>
                      <h5>
                        4) Тишлар соғломлиги учун қайси модда жавобгар?
                        (кальций){" "}
                      </h5>
                      <h5>
                        4) 5) Одам танасининг 80 фоизи нимадан иборат? (сувдан){" "}
                      </h5>
                      <h5>
                        6) Инфекцияни ташувчи энг майда организм нима деб
                        аталади? (микроб){" "}
                      </h5>
                      <h5>
                        7) Ихтиёрий равишда танани никотин билан захарлаш нима
                        деб аталади? (чекиш){" "}
                      </h5>
                      <h5>
                        8) Танамизни химояловчи куч нима деб аталади?
                        (иммунитет){" "}
                      </h5>
                      <h5>9) Овқат қандай идишдан ейилмайди? (бўш идишда)</h5>

                      <div className="copy-link">
                        
                      <div className="tarmoqlar">
                        <a href="#" className="tarmoqlar-svg">
                          <FaFacebookF/>
                        </a>
                        <a href="#"  className="tarmoqlar-svg">
                          <BsTwitter/>
                        </a>
                        <a href="#" className="tarmoqlar-svg">
                          <FaTelegramPlane/>
                        </a>
                      </div>
                        <div className="copy">
                          <input
                            type="text"
                            value="https://medo.uz/news/7586"
                            id="myInput"
                          />
                          <button onclick={myFunction}>Кўчириб олиш</button>
                        </div>
                      </div>
                    </Desscription>
                  );
                })}
            </div>
          </div>

          <div className="col-lg-3 right">
            <a href="https://formulife.uz/">
              <img src={RightImg} alt="" />
            </a>
            
          </div>
        </div>
      </div>

      <SimpleSlider/>
    </Wrapper>
  );
};

export default InteryuvDesscription;

const Wrapper = styled.div`
  .container {
    .row {
      .left {
        padding: 25px 30px 0 0;
        h2{
          font-weight: 700;
          margin-bottom: 25px;
          font-size: 16px;
        }
        .left-links{
          transition: all .2s linear;
          a{
            text-decoration: none;
            
            p{
              font-weight: 500;
              margin-bottom: 10px;
              color: #000;
              font-size: 16px;

              &:hover{
                text-decoration: underline;
              }
            }
            span{
              font-size: 14px;
              color: rgba(0,0,0,.6);
              margin-top: 0;
            }
          }

          .line{
            margin-left: 30px;
            width: 150px;
            height: 2px;
            background: #f9f9f9;
            margin-top: 10px;
            margin-bottom: 10px;
          }

          &:hover{
              margin-left: 10px;
              cursor: pointer;
            }
        }
      }

      .middle {
        border: 1px solid #c5baba7f;
        border-top: none;
        border-bottom: none;
        padding: 25px 15px 15px 15px;
        .card {
          border: none;
          margin-bottom: 50px;
        }
      }

      .right {

        a{
          img{
            width: 100%;
            margin-top: 25px;
          }
        }
      }
    }
  }
`;

const Desscription = styled.div`
  img {
    width: 100%;
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    span {
      margin-top: 5px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.27;
  }

  h5 {
    margin-bottom: 20px !important;
    font-size: 18px;
    line-height: 1.6;
  }

  .copy-link{
    display: flex;
    align-items: center;
    border-top: 2px solid #16b67f;
    width: 100%;
    height: 70px;
    background: #f9f9f9;
    padding: 0 20px;
    justify-content: space-between;

    .copy{
      background-color: #fff;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      gap: 15px;
      border-radius: 10px;
      input{
        border: none;
      }
      button{
        border: none;
        background: transparent;
        color: #16b67f;
        font-weight: 500;
      }
    }

    .tarmoqlar{
      display: flex;
      align-items: center;
      gap: 15px;

      .tarmoqlar-svg{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #16b67f;
        transition: all .2s ease;

        svg{
          width: 100%;
          fill: #16b67f;
        }

        &:hover{
          background-color: #16b67f;
          
          svg{
            fill: #fff;
          }
        }
      }
    }
  }
`;
