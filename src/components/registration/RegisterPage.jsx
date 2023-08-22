import Group from '../../assets/images/Group.png'
import Mail from '../../assets/images/mail.png'
import './RegisterPage.css'

export default function RegisterPage() {
    
    const handlesubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='container  registration__page'>
     <div className='header__block'>
      <div className='information__page'>
        <h3>Связь с нами</h3>
        <p className='text__line'>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
        <p className='contact__block'>
        <a href="/" className='phone'><img src={Group} alt="" className='phone__one'/><span>+7 (111) 222-33-44</span></a>
        <a href="" className='mail'><img src={Mail} alt="" className='mail__two' /><span>order@bu-one.ru</span></a>
        </p>
      </div>
      <div className='registration__form'>
        <div className='user__information'>
            <span className='name'>Имя</span>
            <span className='firstname'>Фамилия</span>
        </div>
        <form className='form__register' onSubmit={handlesubmit}>
            <input type="text" placeholder='Иван' className='ivan' />
            <input type="text" placeholder='Иванов' className='ivanov' />
            <p className='message__block'>Сообщение</p>
            <textarea name="" id="" cols="44" rows="8"  placeholder='Ваше сообщение'></textarea>
            <input type="submit" value='Отправить сообщение' className='submit__message'/>
        </form>
      </div>
      </div>
    </div>
  )
}
