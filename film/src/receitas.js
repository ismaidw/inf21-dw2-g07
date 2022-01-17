import {Datagrid, List, TextField, NumberField, ReferenceField, EditButton} from "react-admin";

export const ReceitaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="pais" />
            <NumberField source="valor" />
            <ReferenceField source="filmeId" reference="filmes"><TextField source="title" /></ReferenceField>
            <EditButton></EditButton>
        </Datagrid>
    </List>
);