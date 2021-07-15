import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
} from 'react-admin';

const ActusPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default ActusPost;
