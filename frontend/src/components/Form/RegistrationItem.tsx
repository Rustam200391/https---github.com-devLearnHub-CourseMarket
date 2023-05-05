import style from './style.module.scss' 

const RegistrationItem = (props: { title: string; type: string; error: boolean; }) => {
 
  return (
    <div className={style.item}>
      <p className={style.title}>{props.title}</p>
      <label className={style.label}>
        <input
          type={props.type}
          className={
            style.input + " " + (props.error ? style.error : style.correct)
          }
          // "^этот колхоз я перепишу^
        />
      </label>
    </div>
  );
}

export default RegistrationItem