import React from 'react';
import { index } from "./index.css";

class Form extends React.Component {
    state = {
        email: '',
        agreement: false,
    }

    handleChange = (event) => {
        this.setState({email: event.target.value})
    }

   validateEmail = (email) => {
            toLowerCase()
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test
            (this.state.email)) {
            alert('Email is not valid')}
    }

    handleCheckboxChange = (event) => {
        this.setState({agreement: event.target.checked})
    }

    handleSubmit =() => {
        const isValidCheckbox = this.state.handleCheckboxChange;

        if(!isValidCheckbox) {
            alert('You should accept all terms and conditions')
            return
        }

        this.setState({email: '', agreement: false})
       alert('Thank you for subscribtion!');
    }

    render (){
        const {email, agreement} = this.state;

        return(
            <div>
                <input 
                    type='email'
                    nname='email'
                    placeholder='email'
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <br>
                    <label>
                        <input 
                            type='checkbox' 
                            name='agreement'
                            checked={agreement}
                            onChange={this.handleCheckboxChange}
                        />
                    I agree with terms ad conditions
                    </label>
                </br>
                <button class='myButton' onClick={this.handleSubmit}>
                Send
                </button>
            </div>
        )

    }
}
export {Form};