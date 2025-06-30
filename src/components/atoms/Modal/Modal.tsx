const Modal = ({ children }: { children: React.ReactNode }) => (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded w-[400px] space-y-4">
            {children}
        </div>
    </div>
);

export default Modal;