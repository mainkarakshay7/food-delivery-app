import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorInfo = useRouteError();

  return (
    <div>
      <h1>OOPS!</h1>
      <h2>Something went wrong!</h2>
      <h3>
        {errorInfo.status} : {errorInfo.error?.message}
      </h3>
    </div>
  );
};

export default Error;
