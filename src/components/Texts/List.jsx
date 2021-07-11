import { List, Datagrid, TextField, EditButton } from 'react-admin';

const TextsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tagname" />
        <TextField source="fr" />
        <EditButton basePath="/texts/admin" />
      </Datagrid>
    </List>
  );
};

export default TextsList;
