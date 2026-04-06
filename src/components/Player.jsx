import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>

      <form onSubmit={handleSubmit}>
        <p>
          <input ref={playerName} type="text" />
          <button type="submit">Set Name</button>
        </p>
      </form>
    </section>
  );
}
