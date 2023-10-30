import { useState } from "react"
import Button from "../../UI/Button"
import Eye from "../../UI/icon/Eye"
import axios from "axios"
import Cookies from "js-cookie"
import { Cookie, CookieOptions } from "../../features/cookieTypes"

const LoginNext = () => {


	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [login, setLogin] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const Login = (): void => {
		setShowPassword(!showPassword)
	}

	const auth = (): void => {
		/* if (login.trim() !== "") {
			if (password.trim() !== "") {
				axios.post("http://localhost:3000/api/login", 
				{
					userq: login,
					password: password	
				}
				)
			}
		} */
		const option : CookieOptions = {expires: 7}
		Cookies.set('user', "broccoli", option)


	}

	return (
		<>
			<h1 className="text-[2rem]">Личный кабинет</h1>
			<h2 className="text-[1.5rem]">Абитуриента, Студента и Работника ДВГУПС</h2>

			<div className="w-full flex justify-center mt-[40px]">
				<form action="$" className="1 shadow w-[550px] p-6 rounded-xl flex flex-col space-y-4">
					<div className="space-y-4 flex flex-col">
						<input type="text" name="login" id="login" className="border rounded text-[17px] p-1" placeholder="Логин" />
						<div className="flex">
							<input type={showPassword ? "text" : "password"} name="password" id="password" className="border rounded w-full text-[17px] p-1" placeholder="Пароль" />
							<button className="ml-[5px]"  type="button" onClick={Login}>
								<Eye />
							</button>
						</div>
					</div>
					<Button types={"button"} text="Войти" fuc={auth} className="bg-[#4caf50] rounded text-white p-2" myStyle={true} />
				</form>
			</div>
		</>
	)
}

export default LoginNext;