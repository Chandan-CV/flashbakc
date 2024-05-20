

import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet';

function Photostoriessingle() {
  const htmlString = `
  <div class='nar-root' data-post-id='8fe2eb7e-466c-4293-9866-acae828efef4' style='p {text-align:center;opacity: 0.0;animation: nara 0s ease-in 2s forwards;}@keyframes nara {to {opacity: 1.0;}} ' >
    <img style="width:100%;" src="https://fetch.getnarrativeapp.com/static/8fe2eb7e-466c-4293-9866-acae828efef4/featured.png">
    <noscript><p>Your Narrative blog will appear here, click preview to see it live.<br>For any issues click <a href="https://help.narrative.so">here</a></p></noscript>
  </div>
`;
return (
  <>
    <Helmet>
      <script type="text/javascript" src="https://fetch.getnarrativeapp.com/core/embed/r/8fe2eb7e-466c-4293-9866-acae828efef4.js"></script>
    </Helmet>
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    <div>
        <div className='h-screen bg-[#1c1c1c] w-50 h-50'>
            <Header/>
            
        </div>
    </div>
  </>
);
}

export default Photostoriessingle
