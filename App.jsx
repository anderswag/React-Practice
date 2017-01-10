import React from 'react';
import * as Data from './torontoData.js';

let today = Date.now()

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      date: this.props.date,
      image: this.props.image
    }
  }


  render() {
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-info">
            <h5>{this.state.title}</h5>
            <p>{this.state.date}</p>
          </div>
        </div>
      </div>
    )
  }
}

function formatDate(rawDate) {
  return rawDate.slice(0,10)
}

function dateFilter(date) {
  if(Date.parse(date) > today) {
    return true
  }
}

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {activities: Data};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        {this.state.activities.default.data.map(function(activity,index){
          if(activity.calEvent.thumbImage && dateFilter(activity.calEvent.startDate)){
            return (
              <Card
              title={activity.calEvent.eventName}
              key={index}
              date={formatDate(activity.calEvent.startDate)}
              image={`http://app.toronto.ca/${activity.calEvent.thumbImage.url}`}
              />
            )
          }
        })}
        </div>
      </div>
    );
  }
}

export default App;