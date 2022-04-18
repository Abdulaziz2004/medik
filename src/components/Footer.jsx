import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import Teleg from "../assets/teleg.svg";
import Meta from "../assets/facebook.svg";
import Insta from "../assets/insta.svg";
import Youtube from "../assets/youtube.svg";
import Tiktok from "../assets/tiktok.svg";

const Footer = () => {
  return (
    <Wrapper>
      <hr style={{marginTop: 0}}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title">
              <h1>MEDO</h1>
              <span>Ягона тиббиёт портали</span>
            </div>
          </div>
          <div className="col-lg-6 tarmoqlar">
            <div className="tarmoqlar-sayt">
              <a href="#">
                <img src={Meta} alt="" />
              </a>
              <a href="#">
                <img src={Teleg} alt="" />
              </a>
              <a href="#">
                <img src={Insta} alt="" />
              </a>
              <a href="#">
                <img src={Youtube} alt="" />
              </a>
              <a href="#">
                <img src={Tiktok} alt="" />
              </a>
            </div>

            <div className="sayt">
              <Link to="#">Сайт ҳақида</Link>
              <Link to="#">Алоқа</Link>
              <Link to="#">Реклама</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <h3>
            Сайтдаги барча материаллар маълумот бериш мақсадида тайёрланган.
            Тавсияларни қўллашдан олдин малакали шифокор билан маслаҳатлашишни
            унутманг!
          </h3>
          <p>
            Medo.uz материалларидан тўлиқ ёки қисман фойдаланилганда «Фойдаланиш
            шартлари»га амал қилиниши шарт. Барча ҳуқуқлар Ўзбекистон
            Республикасининг оммавий ахборот воситалари тўғрисидаги ҳамда
            муаллифлик ва турдош ҳуқуқлар тўғрисидаги қонун ҳужжатларида
            белгиланган тартибда ҳимояланган. Гувоҳнома: №1386. Берилган санаси:
            02.12.2020 йил. Муассис: «PREMIUM TECHNO PROJECT» МЧЖ. Таҳририят
            манзили: 100099, Тошкент шаҳри, Юнусобод тумани, Оқилота кўчаси-11Б.
            Электрон манзил: info@medo.uz. Сайтда эълон қилинаётган муаллифлик
            мақолаларида келтирилган фикрлар муаллифга тегишли ва улар Medo.uz
            таҳририяти нуқтаи назарини ифода этмаслиги мумкин.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  .container {
    margin-top: 35px;

    .row {
      .title {
        display: flex;
        align-items: center;
        gap: 20px;

        h1 {
          font-weight: bold;
          color: #16b67f;
        }

        span {
          font-weight: 500px;
          color: #262626;
          font-weight: bold;
        }
      }

      .tarmoqlar {
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: right;

        .tarmoqlar-sayt {
          display: flex;
          align-items: center;
          gap: 20px;

          a {
            font-size: 25px;
            transition: 0.2s linear;

            img {
              width: 30px;
              height: 30px;
            }

            &:hover {
              margin-top: -7px;
            }
          }
        }

        .sayt {
          display: flex;
          align-items: center;
          gap: 30px;

          a {
            color: #000;
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
  }

  .footer {
    background-color: #16b67f;
    padding: 21px 0 10px 0;
    margin-top: 30px;

    h3 {
      color: #fff;
      font-size: 16px;
      line-height: 23px;
      font-weight: bold;
      margin: 6px 0;
    }

    p {
      color: #fff;
      font-size: 16px;
      line-height: 23px;
      margin: 6px 0;
      margin-top: 6px;
      font-weight: lighter;
    }
  }
`;
