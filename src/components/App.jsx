
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
// import Filter from "./Filter/Filter";


export const App = () => {
 
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <h1>Phonebook</h1>
      <Phonebook/>
      <h2>Contacts</h2>
      
      <Contacts/>
    </div>
  );
};
