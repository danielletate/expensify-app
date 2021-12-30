// Higher Order Component (HOC) - A componenet (HOC) that renders another component (regular component)
// Goal is to reuse code
// Render hijaking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

// ** AdminInfo renders the warning with the wrapped component(Info)

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="here is my info prop" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="here is my info prop" />,
  document.getElementById("app")
);
