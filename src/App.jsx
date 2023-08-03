import React, {useState, useEffect} from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(null);
    console.log("Contacts:", contacts);

    useEffect(() => {
        const fetchContacts = async (); {
            try {
                const response = fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const result = response.json();
                setContacts(result);
            } catch (error) {
                console.error("There was an error fetching contacts", error);
            }
        };
        fetchContacts();
    }, []);
    return (
        <>
    {selectedContactId ? (
        <selectedContactId
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
        />
) :(
    <ContactList 
    contacts={contacts} 
    setSelectedContactId={selectedContactId} 
    />
    )}
    </>
    );
};

export default App;
