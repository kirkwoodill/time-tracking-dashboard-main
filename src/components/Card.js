import React from 'react'
import styled from 'styled-components'
import './Card.css';

function Card() {
    return (
      <Wrap>
        <ImgContainer>
          <img src="/images/icon-play.svg" />
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
    background-color: green;
    border-radius: 12px;
`