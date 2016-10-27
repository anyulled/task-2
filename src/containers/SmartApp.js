import React from "react";
import { connect } from "react-redux";

import App from "../components/App";
import { playTheLottery } from "../actions/lottery.js";


function mapStatesToProps(store) {
  return {
    tickets: store.tickets,
    balance: store.tickets.reduce((prev, current) => {
      return prev + current.amount - current.ticketPrice
    }, 100)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: function() {
      dispatch(playTheLottery())
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
