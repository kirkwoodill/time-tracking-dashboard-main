import styled from 'styled-components'
let cards = require('../data.json');

function Dashboard() {
    return (
      <div className="card-grid">
        {cards.map((card, x) => (
          <div className={`card-wrap ${ card.id }`} key={x}>
            <div className="img-container">
              <img src="/images/icon-play.svg" alt="Play Icon"/>
            </div>
            <div className="info-container">
              <div className="wrapper">
                <h2 className="card-title">{card.title}</h2>
                <img src="/images/icon-ellipsis.svg" alt="Ellipsis icon"/>
              </div>
              <div className="wrapper">
                <span className="current-hrs">{card.timeframes.daily.current}hrs</span><br/>
                <span className="last-hrs">Last week - {card.timeframes.daily.previous}hrs</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Dashboard;
