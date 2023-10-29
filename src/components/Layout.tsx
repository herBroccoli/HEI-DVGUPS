
import { Link, Outlet } from "react-router-dom";

import logo from "../assets/logo.png";
import loginImg from "../assets/icon/login.png";
import supImg from "../assets/icon/supp.png";
import locImg from "../assets/icon/loc.png"
import emailImg from "../assets/icon/mail.png";

const Layout = () => {
	return (
		<>
			<div className="1 shadow p-[10px]">
				<header className="container mx-auto flex justify-between items-center">
					<nav>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</nav>

					<div>
						<button>Войти<img className="float-right ml-[10px]" src={loginImg} alt="login" /></button>
					</div>
				</header>
			</div>
			<div className="container mx-auto flex-[1_0_auto] py-[20px]">
				<Outlet />
			</div>
			<footer className="flex-[0_0_auto] py-5 shadow">
				<div className="container mx-auto flex items-center justify-between">
					<div className="flex items-center">
						<img className="mr-[10px]" src={supImg} alt="sup" />
						Тех.поддержка: ckst2@festu.khv.ru
					</div>
					<div className="flex items-center">
						<img className="mr-[10px]" src={locImg} alt="sup" />
						Адрес: г.Хабаровск, ул. Серышева, Дом 47
					</div>
					<div className="flex items-center">
						<img className="mr-[10px]" src={emailImg} alt="sup" />
						support@festu.khv.ru
					</div>
				</div>
			</footer>
		</>
	)
}

export default Layout;