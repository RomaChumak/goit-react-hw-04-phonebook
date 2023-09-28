import styled from 'styled-components'
export const FilterWrapper = styled.div`
    background-color: rgb(204, 204, 204);
    border: 3px solid rgb(204, 204, 204);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    height: 300px;
`;

export const FilterLabel = styled.label`
    color: indigo;
    font-size: 20px;
    font-weight: bold;
`;

export const FilterInput = styled.input`
padding: 10px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    background-color: rgb(238, 237, 240);
`