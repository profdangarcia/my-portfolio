import React from 'react'

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
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="100691388772153"
        theme_color="#333333"
        logged_in_greeting="Em que posso ajudar?  -  How can I help?"
        logged_out_greeting="Em que posso ajudar?  -  How can I help?"
      ></div>
    </>
  )
}

export default MessengerPlugin
