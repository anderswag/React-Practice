import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-info">
            <h5>{this.props.title}</h5>
          </div>
        </div>
      </div>
    )
  }
}



class App extends React.Component {


  getData() {
    fetch('asdfasdf').then(function(response){
      return response
    }).catch(function(err){
      console.log(err);
    })
  }

  constructor(props) {
    super(props);
    this.state = {activities: [{title:"Beer Festival"},{title:"Beachparty"},{title:"Hackathon"},{title:"Just For Laughs"},{title:"Toronto Dance Party"}]};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        {this.state.activities.map(function(activity, index) {
          return (
          <Card title={activity.title} key={index} />
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;