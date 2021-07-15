import { List, Datagrid, TextField, EditButton } from 'react-admin';
import { ColorField } from 'react-admin-color-input';

const ColorsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tagname" />
        <ColorField source="color" />
        <EditButton basePath="/colors/admin" />
      </Datagrid>
    </List>
  );
};

export default ColorsList;
