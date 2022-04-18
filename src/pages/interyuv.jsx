import React from "react";
import styled from "styled-components";
import InteryuvCreate from "../components/InteryuvCreate";
import Card1 from "../assets/cart1.png";
import Card2 from "../assets/Card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";

export const cartData = [
  { id: 1, cartImg: Card1, title: "Овқат қандай идишдан ейилмайди?",  desscription: "lorem"},
  { id: 2, cartImg: Card2, title: "Чапланманг - тоналка чангдан асрамайди! (видео)" },
  { id: 3, cartImg: Card3, title: "Пандемияда ҳомиладорликни режалаштириш керак" },
  { id: 4, cartImg: Card4, title: "Нeга кeлинлар қайнана билан яшашни хоҳлашмайди?" },
  { id: 5, cartImg: Card1, title: "Овқат қандай идишдан ейилмайди?"},
];
function Interyuv() {

  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h2>Интервью</h2>
        </div>
        <div className="row">
          {cartData.map(({ id, cartImg, title }) => (
            
              <div className="col-lg-3 cards">
                <div className="card">
                 <InteryuvCreate key={id} id={id} cartImg={cartImg} title={title} />
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Interyuv;

const Wrapper = styled.div`
  .container {
    margin-top: 36px;
      .title {
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 10px;
        width: 270px;
      }
    .row {
      margin-top: 30px;
      .cards{
        margin: 10px 0;
        .card{
          background-color: #E5E5E5;
          padding: 12px;
          border: none;
          
        }
      }
    }
  }
`;
