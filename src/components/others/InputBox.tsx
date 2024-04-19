interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label>
        {labelText}
      </label>
      <input {...props}></input>
    </div>
  );
};

export default InputBox;