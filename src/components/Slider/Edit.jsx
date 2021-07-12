import { Edit, SimpleForm, TextInput, ImageField } from 'react-admin';

const SliderEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <ImageField source="imgSrc" />
        <TextInput source="imgAlt" />
        <TextInput source="subtext" />
      </SimpleForm>
    </Edit>
  );
};

export default SliderEdit;
