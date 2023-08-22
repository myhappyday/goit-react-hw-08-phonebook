import { useDispatch, useSelector } from 'react-redux';

import { userLogOut } from 'redux/auth/operations';
import { UserContainer, Avatar, UserName, LogOut } from './UserMenu.styled';
import { selectUserEmail } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <UserContainer>
      <Avatar />
      <UserName>{email}</UserName>
      <LogOut type="button" onClick={() => dispatch(userLogOut())}>
        Log Out
      </LogOut>
    </UserContainer>
  );
};

export default UserMenu;
