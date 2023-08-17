import "./Services.css"
export default function Services() {
  return (
    <section className='service-section'>
      <div className='container'>
        <div className='services'>
          <div className='text'>
            <p>Наши услуги</p>
            <h2>Мы специализируемся</h2>
          </div>
          <div className='cards'>
            {
              new Array(6).fill().map((_, index) => {
                return (
                  <div key={index} className='card'>
                    <p>Бухгалтерское
                      <span>обслуживание</span>
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
