/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'

interface FBDivProps {
  attribution: string
  page_id: string
  theme_color: string
  logged_in_greeting: string
  logged_out_greeting: string
}

export const FBDiv = styled.div<FBDivProps>``

const MessengerPlugin: React.FC = () => {
  const fbScript = `window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v10.0'
    });
  };

  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));`

  return (
    <>
      <div id="fb-root"></div>
      <script dangerouslySetInnerHTML={{ __html: fbScript }} />
      <FBDiv
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="100691388772153"
        theme_color="#333333"
        logged_in_greeting="Em que posso ajudar?  -  How can I help?"
        logged_out_greeting="Em que posso ajudar?  -  How can I help?"
      ></FBDiv>
    </>
  )
}

export default MessengerPlugin
