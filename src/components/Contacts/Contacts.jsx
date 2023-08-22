import React from 'react'
import FooterText from '../FooterText/FooterText'
import FooterForm from '../FooterText/FooterForm'

import "./Contacts.css"
export default function Contacts() {
  return (
    <footer>
      <div className='container footer'>
        <FooterText />
        <FooterForm />
      </div>
    </footer>
  )
}
