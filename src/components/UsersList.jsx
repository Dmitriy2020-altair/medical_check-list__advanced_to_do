import { useSelector } from 'react-redux';
import { usersReducerSlice } from '../redux/reducers/usersReducer';
import UserItem from './UserItem';

const UsersList = () => {
  const { users } = useSelector(usersReducerSlice);

  return (
    <div>
      {users.length ? (
        <ul className="p y">
          {users.map((user, index) => (
            <UserItem
              key={user.id}
              user={user}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <div className="typography align-x">No users</div>
      )}
    </div>
  );
};

export default UsersList;
