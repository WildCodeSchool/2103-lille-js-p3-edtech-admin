import { List, Datagrid, TextField, EditButton, UrlField } from 'react-admin';

const ExternalLinksList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tagname" />
        <UrlField source="linkTo" />
        <EditButton basePath="/external_Links/admin" />
      </Datagrid>
    </List>
  );
};

export default ExternalLinksList;
