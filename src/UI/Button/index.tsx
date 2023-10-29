
import "./button.css"

type Props = {
	text: string,
	className: string|null,
}


const Button = ({ text, className }: Props) => {
	return (
		<button className={`btn ${className}`}>{text}</button>
	)
}

export default Button;