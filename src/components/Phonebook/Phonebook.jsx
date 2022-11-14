import React from "react";
import { nanoid } from 'nanoid';


class Phonebook extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    };

    

    // formSubmitHandler = e => {
    //     e.preventDefault();
    //     this.setState(this.state.contacts = this.state);
        
    // };

    handleChang = event => {
        console.log(event.currentTarget.value);

        this.setState({ [event.currentTarget.name]: event.currentTarget.value, });
    };

    handleSubmit = e => {
        e.preventDefault();
        
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };


formSubmitHandler = e => {
    console.log(e);
  };
    
    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChang}
                        id={nanoid()} />
                        
                    </label>
                    <label>Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleChang} />
                    </label>
                    <button type="submit">Add contact</button>
                </form>
                <div onSubmit={this.formSubmitHandler}>
                    <h2>Contacts</h2>
                <ul>
                    <li>
                        {this.state.contacts}
                    </li>
                </ul>
                
            </div>
                
            </div>
        )
    }

}

export default Phonebook;