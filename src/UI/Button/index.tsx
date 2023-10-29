
import "./button.css"

type Props = {
	text: string,
	className: string|null,
	fuc?: () => void,
}


const Button = ({ text, className, fuc }: Props) => {
	return (
		<button onClick={fuc} className={`btn ${className}`}>{text}</button>
	)
}

export default Button;