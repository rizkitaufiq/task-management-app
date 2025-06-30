type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className = '', ...props }: Props) => (
    <button
        {...props}
        className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`}
    />
);

export default Button;