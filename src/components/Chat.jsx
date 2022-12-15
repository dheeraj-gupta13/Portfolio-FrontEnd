import React, {useContext} from 'react'
import './Chat.css'
import {themeContext} from '../App'

function Chat() {

  const { theme } = useContext(themeContext);

  return (

    <div className='chat-parent'>
      <div className='chat-left'>

        <div>
          {
            (theme == 'DARK')?
            <div className='message-me'>Message Me</div>
            :
            <div style={{color:'white'}} className='message-me'>Message Me</div>
          }

          <div className="contact-form-container">
            <form 
              className='contact-form'
              action="https://formspree.io/f/mwkyboag"
              method="POST">
              <input
                type="email"
                placeholder='Your Email Id'
                name="email"
                className='input-box email-input'
              />

              <textarea
                type="text"
                placeholder='Your Message'
                name="message"
                className='input-box body-input'
              />

              <button type='submit' className='contact-btn'>Send Message</button>

            </form>
          </div>
        </div>

      </div>

      <div className='chat-right'>

          {
            (theme == 'DARK')?
            <div className='message-me'>Get In Touch</div>
            :
            <div style={{color:'white'}} className='message-me'>Get In Touch</div>
          }

          <div  style={{ color:(theme=="DARK") ? 'black' : 'white' }} className='message-desc'>
            If you've got a project in mind, why not get in touch! Let's work together You can send me message by filling this form.
          </div>

                    <div class="chat-right-icons">
                        <div class="row">
                        <img className='chat-right-image' src={require('../assets/browsing.png')}/>
                            <div class="info">
                                <div  style={{ color:(theme=="DARK") ? 'black' : 'white' }}  class="head">Name</div>
                                <div style={{ color:(theme=="DARK") ? 'black' : 'white' }} class="sub-title">Dheeraj Gupta</div>
                            </div>
                        </div>
                        <div class="row">
                            <img className='chat-right-image' src={require('../assets/location.png')}/>
                            <div class="info">
                                <div style={{ color:(theme=="DARK") ? 'black' : 'white' }} class="head">Address</div>
                                <div style={{ color:(theme=="DARK") ? 'black' : 'white' }} class="sub-title">Faridabad, Haryana, India</div>
                            </div>
                        </div>
                        <div class="row">
                            <img className='chat-right-image' src={require('../assets/gmail.png')}/>
                            <div class="info">
                                <div style={{ color:(theme=="DARK") ? 'black' : 'white' }} class="head">Email</div>
                                <a href="mailto:dj13042002@gmail.com">
                                  <div style={{ color:(theme=="DARK") ? 'black' : 'white' }} class="sub-title">dj13042002@gmail.com</div>
                                </a>
                            </div>
                        </div>
                    </div>
      </div>
    </div>
  )
}

export default Chat