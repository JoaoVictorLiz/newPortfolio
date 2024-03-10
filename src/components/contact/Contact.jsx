import React, { useRef} from 'react';
import "./contact.css"
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_regi9yk', 'template_zf3okhk', form.current, 'Y0QsGnvNKzvzclT_9')
    e.target.reset()
  };


  return (
    <section id='contact'>
        
      <h5 className='text-light'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h6>joaovictorlizsilveira@gmail.com</h6>
          <a href="mailto:joaovictorlizsilveira@gmail.com" target="_blank">Send a message</a>
         </article>
         <article className='contact__option'>
          <BsInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>João Victor</h5>
          <a href="https://www.instagram.com/joaovc_liz/" target="_blank">Send a message</a>
         </article>
         <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+55 51 99552-8628</h5>
          <a href="https://api.whatsapp.com/send?phone=5551995528628" target="_blank">Send a message</a>
         </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required/>
            <input type="email" name="email" placeholder='Your email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
   

    </section>
  )
}

export default Contact