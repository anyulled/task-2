import React from "react";

import Button from "./Button";

class App extends React.Component {

  render() {
    return (
      <div>
        <p>Try your luck and buy a ticket!</p>
        <Button onClick={this.props.onButtonClick}>Buy one ticket</Button>
        <p>Tickets bought: {this.props.tickets.length}, balance: €{this.props.balance}</p>
        <p>Your gambling history:</p>
        ...
      </div>
    );
  }
}

App.defaultProps = {
  tickets: [],
  balance: 0,
  onButtonClick: () => {}
};


export default App;