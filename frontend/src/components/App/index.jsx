import { useState } from "react";
import Header from "../Header";
import NowPlaying from "../NowPlaying";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);


  function handleShowPlayer() {
    setIsOpen(!isOpen);
    alert(isOpen)
  }
  return (
    <>
      <Header title="Tocando Agora" onClick={handleShowPlayer} />
      <NowPlaying isOpen={isOpen} />
    </>
  );
}
