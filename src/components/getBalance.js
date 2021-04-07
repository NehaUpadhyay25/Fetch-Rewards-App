import React from "react";
import "../styles.css";

export default class GetBalance extends React.Component{
    state = {
        response_text_balance: ""
    }

    getBalance = () => {
            fetch("/balance")
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    this.setState({response_text_balance: JSON.stringify(data, null, 2)})
                })
                .catch(err => {
                    throw new Error(err);
                });
    };

    render() {
        return (
            <div className="column">
                <div className="Row">
                    <button className="button" onClick={this.getBalance}>Get Balance Points</button>
                    <pre>{this.state.response_text_balance !== ""? this.state.response_text_balance: null}</pre>
                </div>
            </div>
        )}
}