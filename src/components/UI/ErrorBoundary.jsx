import { useRouteError } from "react-router-dom";
import classes from "../../css/ErrorBoundary.module.css";
import MainNavigation from "./MainNavigation";

const ErrorBoundary = () => {
  const error = useRouteError();

  let errorMessage;
  if (error.status === 404) {
    errorMessage = (
      <div className={classes.errorContent}>
        This page does not exist.
        {/* <span>Error code: {error.status}</span> */}
      </div>
    );
  } else if (error.status === 401) {
    errorMessage = (
      <div className={classes.errorContent}>
        Not authorized to view content.
      </div>
    );
  } else if (error.status === 429) {
    errorMessage = (
      <div className={classes.errorContent}>
        Too many requests. Try again later.
      </div>
    );
  } else if (error.status === 503) {
    errorMessage = (
      <div className={classes.errorContent}>
        The server is currently down. Try again later.
      </div>
    );
  } else {
    errorMessage = (
      <div className={classes.errorContent}>Something went wrong.</div>
    );
  }
  return (
    <>
      <MainNavigation></MainNavigation>
      <div className={classes.error}>{errorMessage}</div>;
    </>
  );
};

export default ErrorBoundary;
