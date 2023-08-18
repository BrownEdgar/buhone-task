import React from 'react'
import './SectionTwo.css'

export default function SectionTwo() {
  return (
    <div className='container section__two'>
      <div className='left__card'>
       <a href="/">О нас</a>
       <h1>Компания <span>ИвановПром </span></h1>
       <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
      </div>
      <div className='right__card'>
        <div className='casees'>
            <h2>90</h2>
            <p>Завершено крупных сделок</p>
            <a href="/">Все кейсы</a>
        </div>
        <div className='casees'>
            <h2>90</h2>
            <p>Завершено крупных сделок</p>
            <a href="/">Все кейсы</a>
        </div>
        <div className='casees'>
            <h2>90</h2>
            <p>Завершено крупных сделок</p>
            <a href="/">Все кейсы</a>
        </div>
        <div className='casees'>
            <h2>90</h2>
            <p>Завершено крупных сделок</p>
            <a href="/">Все кейсы</a>
        </div>
      </div>
    </div>
  )
}
