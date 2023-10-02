import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import LoginForm from '../../components/login-form/login-form';

type TLoginProps = {
  authorizationStatus: AuthorizationStatus;
};
function Login({ authorizationStatus }: TLoginProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
