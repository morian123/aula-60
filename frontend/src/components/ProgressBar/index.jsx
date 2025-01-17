import formatTime from "../../utils/formatTime";

export default function ProgressBar() {
  const progressPercentage = (110 / 220) * 100;

  return (
    <div className={ 
      props.isOpen ? 
      "flex items-center justify-between flex-col w-full mt-4 relative"
      : hidden}>
      {/* Barra cinza (fundo) */}
      <div className="h-2 bg-gray-500 w-full rounded-3xl"></div>

      {/* Barra verde (progresso) */}
      <div
        className="h-2 bg-green absolute left-0 rounded-3xl"
        style={{ width: `${progressPercentage}%` }}
      ></div>

      {/* Bolinha na ponta direita */}
      <div
        className="absolute h-4 w-4 bg-green rounded-full"
        style={{
          left: `calc(${progressPercentage}% - 8px)`,
          transform: "translateY(-25%)",
        }}
      ></div>

      {/* Informações de tempo */}
      <div className="flex justify-between w-full mt-2 text-sm text-gray-300">
        <p>{formatTime(110)}</p>
        <p>{formatTime(220)}</p>
      </div>
    </div>
  );
}
