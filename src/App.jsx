import { useState } from "react";
import Letter from "./componets/letter.jsx";
import ValentineWindow from "./componets/want.jsx";

function App() {
  const [clickedLetter, setClickedLetter] = useState(false);
  return (
    <main>
      {clickedLetter ? (
        <ValentineWindow />
      ) : (
        <Letter setClickedLetter={setClickedLetter} />
      )}
    </main>
  );
}

export default App;
