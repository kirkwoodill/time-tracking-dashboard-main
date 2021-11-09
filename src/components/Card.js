import React from 'react'
import styled from 'styled-components'

function Card() {
    return (
      <Wrap>
        <ImgContainer>
          <img src="/images/icon-play.svg" alt=""/>
        </ImgContainer>
        <div className="info-container">
            <div className="wrapper">
              <h2 className="card-title">Play</h2>
              <img src="/images/icon-ellipsis.svg" alt="Ellipsis icon"/>
            </div>
            <div className="wrapper">
              <span className="current-hrs">5hrs</span><br/>
              <span className="last-hrs">Last week - 36hrs</span>
            </div>
        </div>
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
