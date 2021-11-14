let cards = require('../data.json');

function Dashboard() {
    return (
      <div className="card-grid">
        {/* Menu Block */}
        <div className="card-wrap menu">
          <div className="profile-container">
            <div className="wrapper">
              <img src="https://git.io/J1vSb" alt="Jeremy Robson" />
              <span>Report for</span>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <div classname="settings-container">
            <ul>
              <li><a href="#">Daily</a></li>
              <li><a href="#">Weekly</a></li>
              <li><a href="#">Monthly</a></li>
            </ul>
          </div>
        </div>

        {/* Map for all other cards */}
        {cards.map((card, x) => (
          <div className={`card-wrap ${card.id}`} key={x}>
            <div className="img-container"></div>
            <div className="info-container">
              <div className="wrapper">
                <h2 className="card-title">{card.title}</h2>
                <img src="https://git.io/J1viv" alt="Ellipsis icon" />
              </div>
              <div className="wrapper">
                <span className="current-hrs">
                  {card.timeframes.daily.current}hrs
                </span>
                <span className="last-hrs">
                  Last week - {card.timeframes.daily.previous}hrs
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Dashboard;
