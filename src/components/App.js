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
                {this.props.tickets.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            Result: {item.result}<br />
                            {item.amount ? <span>Winning amount: €{item.amount}<br /></span> : ''}
                            Ticket price: €{item.ticketPrice}
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}

App.defaultProps = {
    tickets: [],
    balance: 0
};


export default App;