import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const ExternalLinksEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tagname" />
        <TextInput source="linkTo" />
      </SimpleForm>
    </Edit>
  );
};

export default ExternalLinksEdit;
