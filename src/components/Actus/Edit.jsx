import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  DateInput,
  SelectInput,
} from 'react-admin';

const ActusEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="title" />
        <TextInput source="imgSrc" />
        <TextInput source="imgAlt" />
        <TextInput source="link" />
        <TextInput source="content" />
        <DateInput source="dateTime" />
        <SelectInput
          source="isActive"
          choices={[
            { id: 'true', name: 'true' },
            { id: 'false', name: 'false' },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default ActusEdit;
