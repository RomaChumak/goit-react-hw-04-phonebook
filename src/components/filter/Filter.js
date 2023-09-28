import { FilterWrapper, FilterLabel, FilterInput } from "./Filter.styled"
export const Filter = ({filter, onSearchContact}) => (
    <FilterWrapper>
  <h2>Contacts</h2>
        <FilterLabel> Find Contacts By Name</FilterLabel>
            <FilterInput type="text" value={filter} onChange={evt => onSearchContact(evt.target.value)}/>

    </FilterWrapper>
)

