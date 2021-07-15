import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  UrlField,
} from 'react-admin';

const MembersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="logoSrc" />
        <TextField source="logoAlt" />
        <UrlField source="link" />
        <EditButton basePath="/members" />
        <DeleteButton basePath="/members" />
      </Datagrid>
    </List>
  );
};

export default MembersList;
