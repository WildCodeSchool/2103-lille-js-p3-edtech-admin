import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const ColorsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tagname" />
        <TextInput source="color" />
      </SimpleForm>
    </Edit>
  );
};

export default ColorsEdit;
