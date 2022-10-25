import React, {useRef} from 'react'
import './Contact.css'
import SocialMedia from "../SocialMedia/SocialMedia"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.resert()

    emailjs.sendForm('service_kzobtng', 'template_b1hy1ds', form.current, '21mmw6cL4VdtOPAoe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <SocialMedia />
      <h2>Contact Me</h2>
      <div>
        <form action='' ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Name' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact