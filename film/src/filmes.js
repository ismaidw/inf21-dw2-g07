import {Datagrid, EditButton, List, TextField} from "react-admin";

export const FilmeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="release_year" />
            <TextField source="language" />
            <TextField source="lenght" />
            <TextField source="rating" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);