import { Create, SimpleForm, TextInput, ImageField } from 'react-admin';

const SliderPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <ImageField source="imgSrc" />
        <TextInput source="imgAlt" />
        <TextInput source="subtext" />
      </SimpleForm>
    </Create>
  );
};

export default SliderPost;
