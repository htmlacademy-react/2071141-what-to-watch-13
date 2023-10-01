import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';
import UserInfo from '../user-info/user-info';

function Header() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="page-header film-card__head">
      <Logo />

      {authorizationStatus === AuthorizationStatus.Auth ? (
        <UserInfo />
      ) : (
        <SignIn />
      )}
    </header>
  );
}

export default Header;
