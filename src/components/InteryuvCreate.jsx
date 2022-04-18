import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


const InteryuvCreate = ({ id, cartImg, title }) => {
  return (
    <Wrapper to={`/interyuv/${id}`}>
      <img src={cartImg} alt="" />
      <div className="titleInteryuv">
        <p>{title}</p>
      </div>
    </Wrapper>
  );
};

export default InteryuvCreate;

const Wrapper = styled(Link)`
  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  .titleInteryuv {
    background-color: #fff;
    width: 100%;
    padding: 15px 10px 20px 10px;
  }
`;
