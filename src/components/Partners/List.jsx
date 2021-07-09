import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const PartnersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="logoSrc" />
        <TextField source="logoAlt" />
        <TextField source="link" />
        <EditButton basePath="/partners" />
        <DeleteButton basePath="/partners" />
      </Datagrid>
    </List>
  );
};

export default PartnersList;
