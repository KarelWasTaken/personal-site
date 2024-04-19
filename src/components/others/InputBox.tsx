
import styles from "./InputBox.module.scss"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <div className={styles.parent}>
        <label>
          {labelText}
        </label>
        <input className={styles.field} {...props}></input>
      </div>
    </div>
  );
};

export default InputBox;