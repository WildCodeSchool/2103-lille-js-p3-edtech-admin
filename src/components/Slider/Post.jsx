import { Create, SimpleForm, TextInput } from 'react-admin';

const SliderPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="imgSrc" />
        <TextInput source="imgAlt" />
        <TextInput source="subtext" />
      </SimpleForm>
    </Create>
  );
};

export default SliderPost;
