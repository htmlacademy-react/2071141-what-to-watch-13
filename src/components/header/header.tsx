import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Logo from '../logo/logo';
import UserHeaderAuth from '../user-header/user-header-auth';
import UserHeaderNotAuth from '../user-header/user-header-not-auth';

function Header() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="page-header film-card__head">
      <Logo />

      {authorizationStatus === AuthorizationStatus.Auth ? (
        <UserHeaderNotAuth />
      ) : (
        <UserHeaderAuth />
      )}
    </header>
  );
}

export default Header;
