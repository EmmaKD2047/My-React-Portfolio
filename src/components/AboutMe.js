import { Button } from "./Button"
import { About, AboutInfo, BA, Blackbackground, EA, MyImage, NL, OtherInfo, Writeup } from "./styles/AboutMe.styled"
import { Heading } from "./styles/Contact.styled";

const AboutMe = () => {
  return (
    <Blackbackground>
        <Heading>
          <h1 style={{borderBottom:'3px solid #7d01a8', width: '150px', margin: 'auto', padding: '0', fontSize: '30px'}}>About Me</h1>
        </Heading>
        <About>
          <MyImage style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
          </MyImage>
          <AboutInfo>
            <Writeup>
              <h3 style={{paddingTop: '10px', color: '#7d01a8'}}>Frontend Developer and Affiliate Marketer with a passion for helping people!</h3>
              <p style={{paddingTop: '30px', paddingBottom: '30px'}}>Welcome to my portfolio! I am a passionate Frontend Developer and Affiliate Marketer<br></br>
              with a knack for making fully functional and responsive websites with technologies like <br></br>
              HTML 5, CSS 3 and React. With a strong fous on the Marketing Industry, I aim to deliver <br></br>
              exceptional results by combining creativity, technical prowess, and a keen eye for detail.<br></br>
              Explore my work and discover how I can bring value to your next project.</p>
            </Writeup>
            <hr style={{ width: '80%' }}></hr>
            <OtherInfo>
              <NL>
                <p><strong>Name:</strong> Emmanuel Kadiri</p>
                <p style={{paddingTop: '15px'}}><strong>Location:</strong> Lagos State, NG</p>
              </NL>
              <EA>
              <p><strong>Email:</strong> Kadiri2047@gmail.com</p>
              <p style={{paddingTop: '15px'}}><strong>Availability:</strong> Open for work</p>
              </EA>
            </OtherInfo>
            <BA>
              <a href='https://drive.google.com/file/d/18uXw-TPNacnAlV0DDYqAQvAebUtW1Rbb/view?usp=drive_link' target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
                <Button style={{padding: '10px'}}>Download Resume</Button>
              </a>
            </BA>
          </AboutInfo>
        </About>
    </Blackbackground>
  )
}

export default AboutMe