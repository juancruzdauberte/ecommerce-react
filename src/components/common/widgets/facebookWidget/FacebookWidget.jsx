import { FaFacebookSquare } from "react-icons/fa";
import "./facebookWidget.css";

export function FacebookWidget() {
  return (
    <a
      href="https://web.facebook.com/marialaura.liaudat"
      target="_blank"
      className="facebook-widget"
    >
      <FaFacebookSquare />
    </a>
  );
}
