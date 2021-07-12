import { Edit, SimpleForm, TextInput } from 'react-admin';

const MembersEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="logoSrc" />
        <TextInput source="logoAlt" />
        <TextInput source="link" />
      </SimpleForm>
    </Edit>
  );
};

export default MembersEdit;
