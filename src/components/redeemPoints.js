import React from "react";
import validateInput from "../inputValidation";
import "../styles.css";

export default class RedeemPoints extends React.Component{
    state = {
        error_message_redeem_input: "",
        response_text_redeem: "",
        redeemInput: ""
    }

    handleOnChange = e => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({[key]: value});
    }

    redeemPoints = () => {

        if (validateInput(this.state.redeemInput)) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: this.state.redeemInput
            };
            fetch("/redeem", requestOptions)
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    this.setState({response_text_redeem: JSON.stringify(data, null, 2)})
                })
                .catch(err => {
                    throw new Error(err);
                });
        }else{
            this.setState({error_message_redeem_input: "Invalid Input"})
        }
    };

    render() {
        return (
            <div className="column">
                <div className="Row">
                    <button className="button" onClick={this.redeemPoints}>Redeem Points</button>
                    <input type="textarea"
                           name="redeemInput"
                           value={this.state.redeemInput}
                           onChange={this.handleOnChange}
                           onKeyUp={()=>{this.setState({error_message_redeem_input: "", response_text_redeem: ""})}}/>
                    <div><span>{this.state.error_message_redeem_input !== ""? this.state.error_message_redeem_input: null}</span></div>
                    <textarea value={this.state.response_text_redeem} cols="40" rows="40"/>
                </div>
            </div>
        )}
}