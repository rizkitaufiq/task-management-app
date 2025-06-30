type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = (props: Props) => (
    <textarea {...props} className="w-full border p-2 rounded text-sm" />
);

export default Textarea;