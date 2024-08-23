// import Contact from "../Contact/Contact";

// export default function ContactList({ contacts }) {
//   return (
//     <ul>
//       {contacts.map((item) => {
//         return (
//           <li key={item.id}>
//             <Contact contact={item} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
