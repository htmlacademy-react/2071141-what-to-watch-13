import { LOGO_FOOTER } from '../../const';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoClass={LOGO_FOOTER} />

      <div className="copyright">
        <p>© 2023 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
