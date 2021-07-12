import { List, Datagrid, TextField, EditButton } from 'react-admin';

const ColorsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tagname" />
        <TextField source="color" />
        <EditButton basePath="/colors/admin" />
      </Datagrid>
    </List>
  );
};

export default ColorsList;
