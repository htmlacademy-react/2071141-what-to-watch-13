import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <Logo />
        </a>
      </div>
      <div className="copyright">
        <p>© 2023 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
