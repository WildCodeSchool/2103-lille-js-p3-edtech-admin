import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
} from 'react-admin';

const SectionsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <NumberField source="place" />
        <EditButton basePath="/sections" />
      </Datagrid>
    </List>
  );
};

export default SectionsList;
