type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => (
    <input {...props} className="w-full border p-2 rounded text-sm" />
);

export default Input;