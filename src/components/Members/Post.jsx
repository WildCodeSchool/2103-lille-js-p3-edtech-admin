import { Create, SimpleForm, TextInput } from 'react-admin';

const MembersPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="logoSrc" />
        <TextInput source="logoAlt" />
        <TextInput source="link" />
      </SimpleForm>
    </Create>
  );
};

export default MembersPost;
