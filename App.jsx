import React from 'react';
import * as Data from './torontoData.js';

// let sortedDate = Data.sort(function(a, b) {
//   if(Date.parse(a.default.data.calEvent.startDate) > (Date.parse(b.default.data.calEvent.startDate))) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

let sortedDate = Data.default.data.sort(function(a, b) {
    return Date.parse(a.calEvent.startDate) - Date.parse(b.calEvent.startDate);
  });

let today = Date.now()

let formatDate = (rawDate) => {return rawDate.slice(0,10)}

let dateFilter = (date) => {
  if(Date.parse(date) > today) {
    return true
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      date: this.props.date,
      style: this.props.style,
      url: this.props.url
    }
  }


  render() {
    return (
      <a href={this.state.url}>
        <div className="col-4">
          <div style={this.state.style} className="card">
            <div className="card-info">
              <h5>{this.state.title}</h5>
              <p>{this.state.date}</p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-bar">
        <p>doToronto</p>
      </nav>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activities: sortedDate};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
          {this.state.activities.map(function(activity,index){
            if(activity.calEvent.thumbImage && dateFilter(activity.calEvent.startDate)){
              return (
                <Card
                  title={activity.calEvent.eventName}
                  key={index}
                  date={formatDate(activity.calEvent.startDate)}
                  style={{
                    'backgroundImage':`url('http://app.toronto.ca/${activity.calEvent.thumbImage.url}')`,
                    'backgroundRepeat':'no-repeat',
                    'backgroundSize':'cover'
                  }}
                  url={activity.calEvent.eventWebsite}
                />
              )
            }
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;