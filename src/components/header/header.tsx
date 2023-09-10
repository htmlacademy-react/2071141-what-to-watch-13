import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';

function Header() {
  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserInfo />
    </header>
  );
}

export default Header;
