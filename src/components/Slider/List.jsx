import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
} from 'react-admin';

const SliderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <ImageField source="imgSrc" />
        <TextField source="imgAlt" />
        <TextField source="subtext" />
        <EditButton basePath="/slider" />
        <DeleteButton basePath="/slider" />
      </Datagrid>
    </List>
  );
};

export default SliderList;
