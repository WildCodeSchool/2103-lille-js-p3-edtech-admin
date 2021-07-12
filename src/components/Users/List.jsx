import { List, Datagrid, TextField, DeleteButton } from 'react-admin';

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="lastname" />
        <TextField source="firstname" />
        <TextField source="email" />
        <DeleteButton basePath="/auth/signup" />
      </Datagrid>
    </List>
  );
};

export default UsersList;
