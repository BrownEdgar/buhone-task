import React from 'react'

export default function FooterText() {
  return (
    <div className='footer-text'>
          <h2>Связь с нами</h2>
          <p className='text'>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
          <div className='footer-contacts'>
            <img src="./public/images/Vector.png" alt="Phone" className='phone'/>
            <p>+7 (111) 222-33-44</p>
            <img src="./public/images/Group.png" alt="Message" className='message'/>
            <p>order@bu-one.ru</p>
          </div>
        </div>
  )
}
