import React from 'react'

export default function FooterForm() {
  return (
    <div className='form'>
      <div className='names-box'>
        <span>Имя</span>
        <span>Фамилия</span></div>
      <form>
        <input type="text" placeholder='Иван' className='inp' />
        <input type="text" placeholder='Иванов' />
        <p>Сообщение</p>
        <textarea name="" id="" cols="30" rows="10" placeholder='Ваше сообщение'></textarea>
        <input type="submit" value="Отправить сообщение" />
      </form>
    </div>
  )
}
