import { useRouteError } from "react-router-dom";

function NoMatch() {
  const error = useRouteError();

  let [title, dataMessage] = [
    "404: Page Not Found",
    "Lorem ipsum dolor sit amet, consectetur adip.",
  ];
  if (error.status === 500) {
    const { message } = error.data;
    title = "A server error occurred!!!";
    dataMessage = message;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <p>{dataMessage}</p>
    </div>
  );
}

export default NoMatch;
