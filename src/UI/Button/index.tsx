import "./button.css"

type Props = {
	text: string,
	className?: string,
	fuc?: () => void,
	myStyle?: boolean
}


const Button = ({ text, className, fuc, myStyle }: Props) => {
	return (
		<button onClick={fuc} className={myStyle ? className : `btn ${className}`}>{text}</button>
	)
}

export default Button;