import { ListGroup } from "react-bootstrap";
import { useLoaderData ,Link} from "react-router-dom";

export interface UserProps {
    id:number;
    name:string;
    username:string;
    email:string;
}
export const usersLoader =async ()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    return users;
}
function UsersPage() {
    const users =useLoaderData() as UserProps 
  return (
   <> <ListGroup>
    {users.map((user)=>(
        <ListGroup.Item key={user.id} action >
            <Link to={`/users/${user.id}`}>{user.name}  </Link>
        </ListGroup.Item>   
    ) 
)}
   </ListGroup> 
      
   </>
  )
}

export default UsersPage