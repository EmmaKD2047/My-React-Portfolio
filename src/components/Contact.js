import { Button } from './Button';
import { Blackbackground } from './styles/AboutMe.styled';
import { CardInfo, CardLogo, ContactCard, ContactInfo, Content, Email, EmailForm, EmailInputs, Heading, Location, NE, Phone } from './styles/Contact.styled';
import logo from './../logo.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8aj432r', 'template_14pbjg6', form.current, 'eu-6bM5owtMqAM1SE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <Blackbackground>
      <Heading>
        <h1 style={{borderBottom:'3px solid #7d01a8', width: '150px', margin: 'auto', marginBottom: '1rem'}}>Contact</h1>
      </Heading>
      <Content>
        <EmailInputs>
          <h3 style={{fontWeight: 'bold'}}>Message Me</h3>
          <div>
            <EmailForm ref={form} onSubmit={sendEmail}>
              <NE>
                <input type='text' name='user_name' placeholder='Name' maxLength='40' required />
                <input type='email' name='user_email' placeholder='Email' maxLength='40' required />
              </NE>
              <input type='text' name='subject' className='subject' placeholder='Subject' maxLength='40' required /><br></br>
              <textarea type='text' name='message' placeholder='Message' cols='30' rows='10'></textarea>
              <Button type='submit' style={{ marginTop: '20px', marginBottom: '50px' }}>Send Message</Button>
            </EmailForm>
          </div>
        </EmailInputs>
        <ContactInfo>
          <h3 style={{ fontWeight: 'bold'}}>Contact Information</h3>
          <p style={{paddingTop: '15px'}}>Open for opportunities. Let's connect and produce value together!</p>
          <ContactCard>
            <CardLogo>
              <img src={logo} alt='logo' style={{width: '60px'}} />
              <p style={{padding: '0 20px 20px 30px', fontSize: '12px'}}>EMMANUEL KADIRI</p>
            </CardLogo>
            <hr style={{height: '70%', margin: '20px 20px 0 0'}}></hr>
            <CardInfo>
              <Location>
                <p>Lagos State, NG</p>
              </Location>
              <Phone to='tel:+2348025946532'>
                <p>08025946532</p>
              </Phone>
              <Email to='mailto:kadiri2047@gmail.com'>
                <p>Kadiri2047@gmail.com</p>
              </Email>
            </CardInfo>
          </ContactCard>
        </ContactInfo>
      </Content>
    </Blackbackground>
  )
}

export default Contact