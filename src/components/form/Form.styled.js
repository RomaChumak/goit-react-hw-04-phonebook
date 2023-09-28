import styled from 'styled-components'
import { Field, Form, ErrorMessage } from "formik";
export const StyledForm = styled(Form)`
    padding: 10px;
    background-color: rgb(204, 204, 204);
    border: 3px solid rgb(204, 204, 204);
    border-radius: 5px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`
export const ContactLabel = styled.label`
display: flex;
flex-direction: column;
gap: 20px;
width: 300px;
color: indigo;
font-size: 20px;
font-weight: bold;
`
export const StyledInput = styled(Field)`
padding: 10px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    background-color: rgb(238, 237, 240);
`

export const ContactBtn = styled.button`
background-color: indigo;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
`
export const ErrorForm = styled(ErrorMessage)`
    color: red;
    font-size: 14px;
    margin-top: 4px;
    font-weight: normal;
`