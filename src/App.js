import React, { useState } from 'react';


export default function SignupForm() {
  // states here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const display = e => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={event => setName(event.target.value)}
        id="name" 
        placeholder="Mary" />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          id="email"
          placeholder="mary.poppins@disney.fr"
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
