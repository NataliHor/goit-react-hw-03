import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <ul>
        <li className={css.text}>
          <FaUser />
          {name}
        </li>
        <li className={css.text}>
          <BsFillTelephoneFill />
          {number}
        </li>
      </ul>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
