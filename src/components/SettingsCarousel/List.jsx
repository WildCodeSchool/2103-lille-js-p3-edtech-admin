import { List, Datagrid, TextField, EditButton } from 'react-admin';

const SettingsCarouselList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tagname" />
        <TextField source="value" />
        <EditButton basePath="/settings_carousel/admin" />
      </Datagrid>
    </List>
  );
};

export default SettingsCarouselList;
