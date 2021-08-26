import React from "react";
import LoginReduxForm, { FormDataType } from "./LoginForm";
import { login } from "../../redux/auth-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/store";

const LoginPage: React.FC<Props> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    const { email, password, rememberMe, captcha } = formData;
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth.isAuth) {
    return <Redirect to={`/profile/${props.isAuth.userId}`} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state: AppStateType) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth,
});
const connector = connect(mapStateToProps, { login });

export default connector(LoginPage);

// Types
type Props = ConnectedProps<typeof connector>;
