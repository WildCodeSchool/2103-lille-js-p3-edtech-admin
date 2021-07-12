import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const MembersEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="logoSrc" />
        <TextInput source="logoAlt" />
        <TextInput source="link" />
      </SimpleForm>
    </Edit>
  );
};

export default MembersEdit;
