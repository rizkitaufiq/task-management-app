"use client";

import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

import Textarea from "@/components/atoms/Textarea/Textarea";
import Button from "@/components/atoms/Button/Button";


interface Props {
    title: string;
    setTitle: (val: string) => void;
    onCreate: () => void;
    onClose: () => void;
}

const TaskForm = ({ title, setTitle, onCreate, onClose }: Props) => {
    const formRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(formRef, onClose);

    return (
        <div ref={formRef} className="relative w-full mb-4">
            <Textarea
                className="w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none p-2 rounded text-sm mb-2"
                rows={4}
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    onClick={() => {
                        onCreate();
                        onClose();
                    }}
                    className="absolute bottom-6 lg:w-[15vh] right-2 bg-blue-600 text-white px-3 py-1 text-sm rounded"
                >
                    Create
                </Button>
            </div>
        </div>
    );
};

export default TaskForm;