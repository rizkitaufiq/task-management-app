type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ children, ...props }: Props) => (
    <select {...props} className="w-full border p-2 rounded text-sm">
        {children}
    </select>
);

export default Select;