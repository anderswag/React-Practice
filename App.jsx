import React from 'react';
import * as Data from './torontoData.js';

let today = Date.now()

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      date: this.props.date,
      style: this.props.style
    }
  }


  render() {
    return (
      <div className="col-4">
        <div style={this.state.style} className="card">
          <div className="card-info">
            <h5>{this.state.title}</h5>
            <p>{this.state.date}</p>
          </div>
        </div>
      </div>
    )
  }
}

let formatDate = (rawDate) => {return rawDate.slice(0,10)}

let dateFilter = (date) => {
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
                style={{
                  'backgroundImage':`url('http://app.toronto.ca/${activity.calEvent.thumbImage.url}')`,
                  'backgroundRepeat':'no-repeat',
                  'backgroundSize':'cover'
                }}
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