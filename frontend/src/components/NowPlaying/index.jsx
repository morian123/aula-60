import ProgressBar from "../ProgressBar";
import icarus from "../../assets/icarus-bk.jpeg";

export default function NowPlaying(props) {
  return (
    <div>
      <img
        className="w-full rounded-3xl mt-6"
        src={icarus}
        alt="Music icon"
      />
      <div>
        <h2 className="text-2xl bold mt-2">Música de amor nunca mais</h2>
        <h3>BK, Luccas Carlos, Nansy Silvvz, Gigantes</h3>
      </div>
      <ProgressBar isOpen={props.isOpen} />
    </div>
  );
}
