let cards = require('../data.json');

function Dashboard() {
    return (
      <div className="card-grid">
        {/* Menu Block */}
        <div className="card menu">
          <div className="card-container">
            <div className="wrapper">
              <div className="img-wrap">
                <img src="https://git.io/J1vSb" className="profile-img" alt="Jeremy Robson" />
              </div>
              <div className="text-wrap">
                <span>Report for</span>
                <h2>Jeremy Robson</h2>
              </div>
            </div>
          </div>
          <div className="settings-container">
            <ul className="wrapper">
              <li><a href="#">Daily</a></li>
              <li><a href="#">Weekly</a></li>
              <li><a href="#">Monthly</a></li>
            </ul>
          </div>
        </div>

        {/* Map for all other cards */}
        {cards.map((card, x) => (
          <div className={`card ${card.id}`} key={x}>
            <div className="card-container">
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
