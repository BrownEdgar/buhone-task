
import Logo from '../../assets/images/logo.png'
import Phone from '../../assets/images/Group.svg'
import Clock from '../../assets/images/clock.svg'
import Email from '../../assets/images/Email.svg'
import Location from '../../assets/images/location.svg'

import "./Navbar.css"

export default function Navbar() {
	
	return (
		<header>
			<div className="container container__header">
					<a href="/" className='logo'>
					<img src={Logo} alt="logo" />
						<span>Buhone</span>
					</a>
				<div className="container__menu">
					<ul className='icons'>
						<li>
							<img src={Phone} alt="Phone" />
							<span>8 (111) 222-33-44</span>
						</li>
						<li>
							<img src={Clock} alt="Clock" />
							<span>
								Пн-Пт 10:00-18:00
							</span>
						</li>
						<li>
							<img src={Email} alt="Email" />
							<span>order@buhone.ru</span>
						</li>
						<li>
							<img src={Location} alt="Location" />
							<span>Невский пр. 130</span>
						</li>
					</ul>
					<nav>
						<ul className='menu'>
							<li>Главная</li>
							<li>услуги</li>
							<li>кейсы</li>
							<li>о компании</li>
							<li>контакты</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
