import { useDispatch, useSelector } from 'react-redux';

import { userLogOut } from 'redux/auth/operations';
import { UserContainer, Avatar, UserName, LogOut } from './UserMenu.styled';
import { selectUserName } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <UserContainer>
      <Avatar />
      <UserName>Hello, {name}</UserName>
      <LogOut type="button" onClick={() => dispatch(userLogOut())}>
        Log Out
      </LogOut>
    </UserContainer>
  );
};

export default UserMenu;
