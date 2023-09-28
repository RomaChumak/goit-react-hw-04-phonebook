import styled from 'styled-components'

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgb(204, 204, 204);
    border: 3px solid rgb(204, 204, 204);
    border-radius: 5px;
    margin-bottom: 10px;
    gap: 20px;
`;
export const ContactName = styled.p`
    color: indigo;
    font-size: 20px;
    font-weight: bold;
`;

export const ContactNumber = styled.p`
    color: rgb(102, 102, 102);
`;
export const DeleteBtn = styled.button`
    background-color: indigo;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
`