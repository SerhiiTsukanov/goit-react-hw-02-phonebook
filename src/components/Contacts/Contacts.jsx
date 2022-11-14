import React from "react";

class Contacts extends React.Component {
    state = {
        contacts: [],
    };
    
    formSubmitHandler = e => {
    console.log(e);
  };
    
    render() {
        return (
            <div onSubmit={this.formSubmitHandler}>
                <ul>
                    <li>
                        'this.state.contacts'
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Contacts;