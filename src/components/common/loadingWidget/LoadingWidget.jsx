import "./loadingWidget.css";
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingWidget = ({ text }) => {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#ff7b08" loading size={50} />
      <p>Cargando {text}...</p>
    </div>
  );
};
