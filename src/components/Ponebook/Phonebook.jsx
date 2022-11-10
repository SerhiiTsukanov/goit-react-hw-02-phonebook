import React from "react";
import Contacts from "components/Contacts/Contacts";
import { nanoid } from 'nanoid'

class Phonebook extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }
    
    render() {
        return (
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button type="button">Add contact</button>
                <Contacts/>
            </div>
        )
    }

}

export default Phonebook;