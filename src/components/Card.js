import React from 'react'
import styled from 'styled-components'
import './Card.css';

function Card() {
    return (
      <Wrap>
        <ImgContainer>
          <img src="/images/icon-play.svg" alt=""/>
        </ImgContainer>
        <InfoContainer>
            <h2>Play</h2>
            <span><strong>5</strong>hrs</span><br/>
            <span>Last week - 36hrs</span>
        </InfoContainer>
      </Wrap>
    );
}

export default Card

// CSS Styling

const Wrap = styled.div`

`

const ImgContainer = styled.div`
    background-color: red;
    border-radius: 12px;
`

const InfoContainer = styled.div`
  background-color: hsl(235, 46%, 20%);
  color: white;
  transition: background 0.3s 0s ease-in;

  &:hover {
    background-color: hsl(235, 45%, 61%);
  }
`;