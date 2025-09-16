// Joke.jsx
export default function Joke(props) {
  return (
    <>
      {props.setup && (
        <p className="setup">
          <strong>Setup:</strong> {props.setup}
        </p>
      )}


      <p className="punchline">
        <strong>Punchline:</strong>{" "}
        {props.punchline || <em className="muted">—</em>}
      </p>

      <hr />
    </>
  );
}

