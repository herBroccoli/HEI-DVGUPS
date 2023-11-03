import { useState, useEffect, ChangeEvent } from "react"
import Button from "../../UI/Button"
import Eye from "../../UI/icon/Eye"
import axios from "axios"
import { Link } from "react-router-dom"
/* import Cookies from "js-cookie"
import { CookieOptions } from "../../features/cookieTypes"
 */
const LoginNext = () => {



	/* type LoginType = {
		username: string,
		password: string
	} */

	interface LoginType {
		login?: string,
		password?: string
	}

	const [data, setData] = useState<LoginType>({})
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [login, setLogin] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [file, setFile] = useState<File | null>(null)

	const Login = (): void => {
		setShowPassword(!showPassword)
	}

	useEffect(() => {
		document.title = "ЛК | Авторизация"
	}, [])

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const selectedFile = e.target.files[0];
			setFile(selectedFile);
		}
	};

	const auth = (): void => {

		const datas = new FormData();
		datas.append("login", login);
		datas.append("password", password);
		if (file) {
			datas.append("file", file);
		}

		if (login.trim() !== "") {
			if (password.trim() !== "") {
				axios.post('http://localhost:3000/posts/post',
					datas,
					{
						headers: {
							'accept': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					}
				)
					.then(res => {
						setData(res.data)
						console.log(res.data)
					})
			}
		}
		/* const option : CookieOptions = {expires: 7}
		Cookies.set('user', "broccoli", option) */


	}

	return (
		<>
			<h1 className="text-[2rem]">Личный кабинет</h1>
			<h2 className="text-[1.5rem]">Абитуриента, Студента и Работника ДВГУПС</h2>
			{`${data.login}...${data.password}`}
			<div className="w-full flex justify-center mt-[40px]">
				<form action="$" className="1 shadow w-[550px] p-6 rounded-xl flex flex-col space-y-4">
					<div className="space-y-4 flex flex-col">
						<input type="text" name="login" id="login" value={login} onChange={event => setLogin(event.target.value)} className="border rounded text-[17px] p-1" placeholder="Логин" />
						<div className="flex">
							<input type={showPassword ? "text" : "password"} name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} className="border rounded w-full text-[17px] p-1" placeholder="Пароль" />
							<button className="ml-[5px]" type="button" onClick={Login}>
								<Eye />
							</button>
							<Link to="http://localhost:3000/posts/download?filename=Screenshot 2023-10-06 160320.png" download={true}>Скачать</Link>
						</div>
						<input type="file" onChange={handleFileChange} />
					</div>
					<Button types={"button"} text="Войти" fuc={auth} className="bg-[#4caf50] rounded text-white p-2" myStyle={true} />
				</form>
			</div>
		</>
	)
}

export default LoginNext;