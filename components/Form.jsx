import React from 'react';
import { index } from "./index.css";

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscribtion: false,
        gender: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('Your first name can\'t be less then 5 letters')
        }
    }

   validateEmail = (email) => {
            toLowerCase()
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test
            (this.state.email)) {
            alert('Email is not valid')}
    };

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }
        

    render() {
        const {firstName, email, message, select, subscribtion, gender} = this.state;

        return(
            <div>
                <input 
                    type='text'
                    nname='firstName'
                    placeholder='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                />
                <input 
                    type='email'
                    nname='email'
                    placeholder='email'
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <br />
                    <textarea  name='message' value={message} onChange={this.handleChange}/>
                <br />
                    <select name='select' value={select} onChange={this.handleChange}>
                        <option value="" disabled></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                <br />
                <label>
                    <input 
                        type='checkbox' 
                        name='subscribtion'
                        checked={subscribtion}
                        onChange={this.handleCheckboxChange}
                    />
                Subscription
                </label>
                <br>
                    <input 
                        type='radio' 
                        name='gender' 
                        value='male' 
                        onChange={this.handleChange} 
                        checked={gender === "male"}
                    /> Male
                    <input 
                        type='radio' 
                        name='gender' 
                        value='female' 
                        onChange={this.handleChange}
                        checked={gender === "female"}
                    /> Female
                </br>
            </div>
        )
    }
}
export {Form};