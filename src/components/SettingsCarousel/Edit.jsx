import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const SettingsCarouselEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tagname" />
        <TextInput source="value" />
      </SimpleForm>
    </Edit>
  );
};

export default SettingsCarouselEdit;
