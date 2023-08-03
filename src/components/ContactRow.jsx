import React from "react";

const ContactRow = ({contact, setSelectedContactId}) => {
    return (
        <tr onClick={() => setSelectedContactID(contact.id)}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow