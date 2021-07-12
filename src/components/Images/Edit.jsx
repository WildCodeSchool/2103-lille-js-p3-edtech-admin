import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const ImagesEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tagname" />
        <TextInput source="src" />
        <TextInput source="alt" />
      </SimpleForm>
    </Edit>
  );
};

export default ImagesEdit;
