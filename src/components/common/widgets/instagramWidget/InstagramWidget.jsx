import { FaInstagram } from "react-icons/fa";
import "./instagramWidget.css";

export function InstagramWidget() {
  return (
    <a
      href="https://www.instagram.com/tierradenudos_/"
      target="_blank"
      className="instagram-widget"
    >
      <FaInstagram />
    </a>
  );
}
