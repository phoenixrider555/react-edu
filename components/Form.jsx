import React from 'react'

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {firstName, email} = this.state;

        return(
            <div>
                <input 
                    type='text'
                    nname='firstName'
                    placeholder='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                />
                <input 
                    type='email'
                    nname='email'
                    placeholder='email'
                    value={email}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
export {Form};