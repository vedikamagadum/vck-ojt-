import React from 'react'
import Header from '../components/Header/Headers';
import Footer from "../components/Footer/Footers";
import './ContactPage.css'
import { Link } from 'react-router-dom';
const ContactPage = () => { 
    return(

  <div style={{ padding: '1rem' }} className="home-scroll-container">
     
    <h1 className='h1'>Contact Us</h1>
    <p>We'd love to hear from you! Whether you have questions about admissions ,
       programs, or campus life, our team is here to help.</p>
     <h2>General Enquiries</h2>

     <h4>Vivekanand College Main Campus</h4>
    <p>
      nagala park ,2130, E Ward, Tarabai Park, Kolhapur, Maharashtra 416003, India</p>

      <p>Phone: +91 12345 67890</p>
     <p>Email: <strong>info@vivekanandcollege.edu</strong></p> 
      <p>Office Hours: Monday – Friday, 9:00 AM – 5:00 PM IST</p>

    <h2>Admissions Office</h2>
    <p>
      For all admission-related queries regarding undergraduate or postgraduate programs:</p>
      <p>Phone: +91 9876543210</p>
    <p>Email: <strong>admissions@vivekanandcollege.edu</strong></p>  

    <h2>Student Support Services</h2>
    <p>
      For current student support,academic advising, Counseling Services or general assistance:</p>      
     <p>Phone: +91 8765432109</p> 
     <p>Email: <strong>studentsupport@vivekanandcollege.edu</strong></p> 
  

    <h2>Find Us on the Map</h2>
    <p><a href="https://maps.app.goo.gl/q96nQdNvECXDngLk9" target="_blank">View on Google Maps</a></p>

    <h2>Send Us a Message</h2>
    <form id="contactForm" className='form-container'>
      <input type="text"  name="name" placeholder="Your Name" required  />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea className='formfield' name="message" rows="3" placeholder="Your Message" required></textarea>
      <button className='my-button' type="submit">Submit</button>
    </form>

  

  </div>
)
}
export default ContactPage