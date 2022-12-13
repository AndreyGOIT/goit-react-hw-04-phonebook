import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <section className={styles.section}>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
