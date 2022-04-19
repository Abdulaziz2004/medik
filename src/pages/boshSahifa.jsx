import React from "react";
import { BsCalendar4Event } from "react-icons/bs";
import styled from "styled-components";
import Songiyangilik from "./songiyangilik";

const Bold = styled.b`
  font-size: 18px;
  line-height: 28px;
  color: #000;
  margin-bottom: 20px !important;
`;
const Sana = styled.span`
  margin-top: 20px !important;
  color: #8f8f8f;
  font-size: 12px;
`;
const Sana2 = styled.span`
  color: #8f8f8f;
  font-size: 12px;
  padding-left: 10px;
`;
const Bolder = styled.b`
  font-weight: 600;
  font-size: 16px;
  color: #000;
  line-height: 22px;
`;

function Boshsahifa() {
  return (
    <>
      <div className="container p-0 boshsahifa">
        <div className="row">
          <div className="col-lg-9 pr-0">
            <a href="#" className="text-decoration-none text-dark">
              <h2>7 апрел Бутунжаҳон соғлиқни сақлаш куни</h2>

              <div>
                <img
                  src="https://static.medo.uz/2022/04/07/09/08/g9V9ViYqPSwP12sucgNy1eXwawipQkbp_V60tR40JKO_normal.jpg"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="col-lg-3 pl-0 mt-5">
            <a href="#" className="text-decoration-none">
              <Bold>
                Жаҳон соғлиқни сақлаш ташкилоти (ЖССТ) 1948 йил 7 апрелда ташкил
                топган бўлиб, ҳар йили шу сана Бутунжаҳон соғлиқни сақлаш куни
                сифатида нишонланади.
              </Bold>
              <br />
              <Sana>02.04.2022 | 09:12</Sana>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 new1">
            <div className="d-flex">
              <img
                width="160px"
                src="https://static.medo.uz/2022/04/02/06/41/c64dac1d6b3f8efa844c26f704b8e3b8_GbpSR0OCxT_small.jpeg"
                alt=""
              />

              <div className="pl-3">
                <a
                  href="#"
                  className="text-decoration-none text-dark font-bold"
                >
                  <Bolder>
                    2 апрель Бутунжаҳон аутизм ҳақида ахборот тарқатиш куни{" "}
                  </Bolder>

                  <div className="mt-5">
                    <span>
                      <BsCalendar4Event style={{ color: "#8f8f8f" }} />
                    </span>
                    <Sana2>02.04.2022 | 09:12</Sana2>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 new1">
            <div className="d-flex">
              <img
                width="160px"
                src="https://static.medo.uz/2022/04/02/06/41/c64dac1d6b3f8efa844c26f704b8e3b8_GbpSR0OCxT_small.jpeg"
                alt=""
              />

              <div className="pl-3">
                <a
                  href="#"
                  className="text-decoration-none text-dark font-bold"
                >
                  <b>
                    2 апрель Бутунжаҳон аутизм ҳақида ахборот тарқатиш куни{" "}
                  </b>

                  <div className="mt-5">
                    <span>
                      <BsCalendar4Event style={{ color: "#8f8f8f" }} />
                    </span>
                    <Sana2>02.04.2022| 09:12</Sana2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-dark mt-5" />
      <Songiyangilik />
    </>
  );
}

export default Boshsahifa;
