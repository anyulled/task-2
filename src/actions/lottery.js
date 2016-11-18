const actions = {
    play: "lottery/play"
};

function playTheLottery() {
    let wonOrLost = Math.random() >= 0.5;
    return {
        type: actions.play,
        payload: {
            result: wonOrLost ? "You've won :)" : "You've lost :(",
            amount: wonOrLost ? Math.ceil(Math.random() * 100) : 0,
            ticketPrice: 10
        }
    }
}
export {
    actions,
    playTheLottery
}