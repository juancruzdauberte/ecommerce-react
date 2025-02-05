import { MdOutlineEmail } from "react-icons/md";
import "./emailWidget.css";

export function EmailWidget() {
  return (
    <button className="email-widget">
      <MdOutlineEmail />
    </button>
  );
}
