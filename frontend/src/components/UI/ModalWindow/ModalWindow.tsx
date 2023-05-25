import React from 'react'
import style from "./style.module.scss";

 const ModalWindow = (props: { errorList: Object; show: boolean; }) => {
	const arr = Object.values(props.errorList);
	const result = arr.map((item,key) => {
	return <div 
	className={style.item}
		key={key} 
		>
			{item[0]}
		</div>
	})

	return (
		<div className={`${style.container} ${props.show ? style.active : style.disactive} `}>
			{result}
		</div>
	)
}
export default ModalWindow