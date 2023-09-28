import { ContactItem, ContactName, ContactNumber, DeleteBtn } from "./ContactList.styled"
export const ContactList = ({ contacts, onDelete }) => {
    return <ul>
       {contacts.map(item => (
        <ContactItem key={item.id}>
        <ContactName>{item.name}:</ContactName> 
        <ContactNumber>{item.number}</ContactNumber>
        <DeleteBtn onClick={() => onDelete(item.id)}>Delete</DeleteBtn>
        </ContactItem>
    ))}</ul>
}