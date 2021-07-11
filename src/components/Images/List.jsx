import { List, Datagrid, TextField, EditButton } from 'react-admin';

const ImagesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tagname" />
        <TextField source="src" />
        <TextField source="alt" />
        <EditButton basePath="/images/admin" />
      </Datagrid>
    </List>
  );
};

export default ImagesList;