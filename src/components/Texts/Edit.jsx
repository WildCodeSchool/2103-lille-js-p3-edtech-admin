import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const TextsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tagname" />
        <TextInput source="fr" />
      </SimpleForm>
    </Edit>
  );
};

export default TextsEdit;
