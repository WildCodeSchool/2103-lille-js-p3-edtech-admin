import { Edit, SimpleForm, TextField } from 'react-admin';
import { ColorInput } from 'react-admin-color-input';

const ColorsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tagname" />
        <ColorInput source="color" />
      </SimpleForm>
    </Edit>
  );
};

export default ColorsEdit;
