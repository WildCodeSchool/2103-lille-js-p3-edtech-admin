import { Edit, SimpleForm, TextInput } from 'react-admin';

const SliderEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="imgSrc" />
        <TextInput source="imgAlt" />
        <TextInput source="subtext" />
      </SimpleForm>
    </Edit>
  );
};

export default SliderEdit;
