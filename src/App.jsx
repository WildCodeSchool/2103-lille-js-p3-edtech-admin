import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import ColorsList from './components/Colors/List';
import ColorsEdit from './components/Colors/Edit';
import MembersList from './components/Members/List';
import MembersEdit from './components/Members/Edit';
import MembersPost from './components/Members/Post';
import PartnersList from './components/Partners/List';
import PartnersEdit from './components/Partners/Edit';
import PartnersPost from './components/Partners/Post';
import TextsList from './components/Texts/List';
import TextsEdit from './components/Texts/Edit';
import ImagesList from './components/Images/List';
import ImagesEdit from './components/Images/Edit';
import UsersList from './components/Users/List';
import UsersPost from './components/Users/Post';

function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="colors/admin" list={ColorsList} edit={ColorsEdit} />
        <Resource name="texts/admin" list={TextsList} edit={TextsEdit} />
        <Resource name="images/admin" list={ImagesList} edit={ImagesEdit} />
        <Resource
          name="members"
          list={MembersList}
          edit={MembersEdit}
          create={MembersPost}
        />
        <Resource
          name="partners"
          list={PartnersList}
          edit={PartnersEdit}
          create={PartnersPost}
        />
        <Resource name="auth/signup" list={UsersList} create={UsersPost} />
      </Admin>
    </div>
  );
}

export default App;
