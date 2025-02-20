import { MdOutlineEmail } from "react-icons/md";
import "./emailWidget.css";

export function EmailWidget() {
  return (
    <div className="email-widget">
      <MdOutlineEmail />
      <a href="mailto:tierradenudos@gmail.com">tierradenudos@gmail.com</a>
    </div>
  );
}
