import Button from "../../UI/Button"
import mainImg from "../../assets/il1.png"
import main2Img from "../../assets/il2.png"

function App() {
	return (
		<>
			<div className='flex text-[#707070]'>
				<img src={mainImg} alt="main" />
				<div className="ml-[50px] w-[450px] break-all">
					<div>
						<p className='text-[18px]'>
							<span className='font-bold text-[24px]'>Электронная информационно-образовательная среда</span> - дистанционное обучение по всем направлениям
						</p>
					</div>

					<div className="mt-[35px]">
						Чтобы пройти повышение квалификации или получить дополнительное образование пройдите регистрацию, если вы у нас впервые
					</div>

					<Button className={'p-4 mt-2'} text="Стать студентом" />

					<div className="mt-6">
						Если у вас уже есть Личный кабинет
					</div>

					<Button className={'p-4 mt-2'} text="Войти в кабинет" />
				</div>
			</div>

			<div className="flex mt-[70px] flex-row-reverse justify-between text-[#707070] break-all">
				<img src={main2Img} />
				<div className="flex">
					<div className="w-[20px] h-[100hv] bg-green-700"></div>
					<div className="w-[750px] text-[17px] p-[40px] flex">
						Электронная информационно-образовательная среда представляет собой интерактивный программный
						комплекс, содержащий сборники теоретических и справочных
						материалов, тесты, задания и иную информацию согласно
						программам обучения.
					</div>
				</div>
			</div>
		</>
	)
}

export default App
