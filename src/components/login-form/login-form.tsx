import { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

const EMAIL_INVALID_MESSAGE = 'Please enter a valid email address';
const PASSWORD_INVALID_MESSAGE =
  "We can't  recognize this email and password combination. Please try again.";
function LoginForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
      navigate(AppRoute.Root);
    }
  };

  return (
    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        method="past"
        onSubmit={handleFormSubmit}
      >
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
        <div className="sign-in__fields">
          <div className="sign-in__field sign-in__field--error">
            <input
              ref={emailRef}
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>
          <div className="sign-in__field">
            <input
              ref={passwordRef}
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
