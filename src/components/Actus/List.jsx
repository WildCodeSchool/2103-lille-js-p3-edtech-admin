import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  UrlField,
  ImageField,
  DateField,
} from 'react-admin';

const ActusList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <ImageField source="imgSrc" />
        <TextField source="imgAlt" />
        <UrlField source="link" />
        <TextField source="content" />
        <DateField source="dateTime" />
        <TextField source="isActive" />
        <EditButton basePath="/actus" />
        <DeleteButton basePath="/actus" />
      </Datagrid>
    </List>
  );
};

export default ActusList;
