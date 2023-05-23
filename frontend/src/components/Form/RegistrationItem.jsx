import style from "./style.module.scss";

const RegistrationItem = (props) => {
  return (
    <div className={style.item}>
      <p className={style.title}>{props?.title}</p>
      <label
        className={`${style.label} ${
          props.error === undefined ? style.correct : style.error
        }`}
      >
        {props.children}
      </label>
    </div>
  );
};

export default RegistrationItem;
