import { Edit, SimpleForm, TextField, NumberInput } from 'react-admin';

const SectionsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="name" />
        <NumberInput source="place" />
      </SimpleForm>
    </Edit>
  );
};

export default SectionsEdit;
