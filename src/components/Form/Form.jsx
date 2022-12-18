import { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { nanoid } from 'nanoid';
// import { within } from '@testing-library/react';

const nameInputId = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
const numberInputId = nanoid();

export default function Form() {
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem('name')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(window.localStorage.getItem('number')) ?? ''
  );
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem('name', JSON.stringify(name));
  }, [name]);
  useEffect(() => {
    window.localStorage.setItem('number', JSON.stringify(number));
  }, [number]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, number);
    this.props.onSubmit(name);
  };

  return (
    <section className={styles.section}>
      <form className={styles.phoneBookWindow} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name<br></br>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor={numberInputId}>
          Number<br></br>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </section>
  );
}

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//       id: nanoid(),
//     });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <section className={styles.section}>
//         <form className={styles.phoneBookWindow} onSubmit={this.handleSubmit}>
//           <label htmlFor={this.nameInputId}>
//             Name<br></br>
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//               id={this.nameInputId}
//             />
//           </label>
//           <label htmlFor={this.numberInputId}>
//             Number<br></br>
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//               id={this.numberInputId}
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//       </section>
//     );
//   }
// }

// export default Form;
