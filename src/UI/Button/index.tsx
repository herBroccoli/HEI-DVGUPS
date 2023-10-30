import "./button.css"

type Props = {
	text: string,
	className?: string,
	fuc?: () => void,
	myStyle?: boolean,
	types?: "button" | "submit" | "reset";
}


const Button = ({ text, className, fuc, myStyle, types }: Props) => {
	return (
		<button type={types} onClick={fuc} className={myStyle ? className : `btn ${className}`}>{text}</button>
	)
}

export default Button;