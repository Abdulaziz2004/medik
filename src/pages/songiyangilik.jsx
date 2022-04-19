import React from "react";
import styled from "styled-components";
import { BsCalendar4Event } from "react-icons/bs";
const StyledH1 = styled.h1`
  font-weight: 500;
  line-height: 37px;
  font-size: 30px;
  color: #000;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Bold = styled.b`
  font-weight: 600;
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
`;
const Span = styled.span`
  color: #8f8f8f;
  font-size: 12px;
  margin-left: 10px;
`;
function Songiyangilik() {
  return (
    <>
      <StyledH1>Сўнгги янгиликлар</StyledH1>
      <div className="row">
        <div className="col-lg-4">
          <a href="#" className="text-decoration-none  text-dark">
            <div class="card border-0">
              <img
                class="card-img-top"
                src="https://static.medo.uz/2022/04/18/07/57/diet-for-eczema_9oTD5R3KGT_small.jpg"
                alt="Card image"
              />
              <Bold>Бу ҳолатда онлайн ташхис қўйиб бўлмайди!</Bold>
              <div>
                <BsCalendar4Event />
               <Span>02.04.2022 | 09:12</Span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a href="#" className="text-decoration-none  text-dark">
            <div class="card border-0">
              <img
                class="card-img-top"
                src="https://static.medo.uz/2022/04/18/07/57/diet-for-eczema_9oTD5R3KGT_small.jpg"
                alt="Card image"
              />
              <Bold>Бу ҳолатда онлайн ташхис қўйиб бўлмайди!</Bold>
              <div>
                <BsCalendar4Event />
               <Span>02.04.2022 | 09:12</Span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a href="#" className="text-decoration-none  text-dark">
            <div class="card border-0">
              <img
                class="card-img-top"
                src="https://static.medo.uz/2022/04/18/07/57/diet-for-eczema_9oTD5R3KGT_small.jpg"
                alt="Card image"
              />
              <Bold>Бу ҳолатда онлайн ташхис қўйиб бўлмайди!</Bold>
              <div>
                <BsCalendar4Event />
               <Span>02.04.2022 | 09:12</Span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Songiyangilik;
