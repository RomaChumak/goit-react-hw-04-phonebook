import { Formik} from "formik";
import { StyledForm, StyledInput, ContactLabel, ErrorForm, ContactBtn } from "./Form.styled";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
   name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
     .required('Required'),
   number: Yup.string()
     .min(9, '9 digits required!')
     .max(19, 'Less than 16 symbols!')
      .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
     .required('Required'),

 });


export const ContactForm = ({ onAddContact }) => {
  return ( <Formik
     initialValues={{ name: '', number: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
      >
      <StyledForm>
          <h1>Phonebook</h1>
          <ContactLabel>
              Name
        <StyledInput name="name" type="text" />
        <ErrorForm name="name" component='span'></ErrorForm>
          </ContactLabel>
          <ContactLabel>
              Number
        <StyledInput name="number" type="tel" />
        <ErrorForm name="number" component='span'></ErrorForm>
          </ContactLabel>
          <ContactBtn type="submit">Add Contact</ContactBtn>
        </StyledForm>
      </Formik>)
}