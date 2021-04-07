import React from "react";
import validateInput from "../inputValidation";
import "../styles.css";
import {Button} from "react-bootstrap";

export default class AddTransaction extends React.Component{
    state = {
        error_message_transaction_input: "",
        response_text_transaction: "",
        transactionInput: ""
    }

    handleOnChange = e => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({[key]: value});
    }

    addTransaction = () => {

        if (validateInput(this.state.transactionInput)) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: this.state.transactionInput
            };
            fetch("/addtransaction", requestOptions)
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    this.setState({response_text_transaction: JSON.stringify(data, null, 2), transactionInput: ""})
                })
                .catch(err => {
                    throw new Error(err);
                });
        }else{
            this.setState({error_message_transaction_input: "Invalid Input"})
        }
    };

    render() {
        return (
            <div className="column">
                <div className="Row">
                    <Button className="button" onClick={this.addTransaction}>Add Transaction</Button>
                    <input type="text"
                           name="transactionInput"
                           value={this.state.transactionInput}
                           onChange={this.handleOnChange}
                           onKeyUp={()=>{this.setState({error_message_transaction_input: "", response_text_transaction: ""})}}/>
                    <div><span>{this.state.error_message_transaction_input !== ""? this.state.error_message_transaction_input: null}</span></div>
                    <textarea value={this.state.response_text_transaction} cols="40" rows="40"/>
                </div>
            </div>
        )}
}