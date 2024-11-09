import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserPosts from '../pages/UserPosts';
import UserAlbums from '../pages/UserAlbums';
import UserTodos from '../pages/UserTodos';

interface UserTabsProps {
postLink:string;
albumLink :string;
todoLink :string;

}

function UserTabs({postLink,albumLink,todoLink}:UserTabsProps) {
  return (
    <Tabs
    defaultActiveKey={postLink}
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey={postLink} title="Post">
     <UserPosts/>
    </Tab>
    <Tab eventKey={albumLink} title="Album">
      <UserAlbums/>
      </Tab>
    <Tab eventKey={todoLink} title="Todo" >
     <UserTodos/>
    </Tab>
  </Tabs>
  )
}

export default UserTabs