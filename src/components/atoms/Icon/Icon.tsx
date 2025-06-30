import { Check, ChevronUp, Equal, ChevronDown, Trash2 } from "lucide-react";
import type { FC } from "react";

interface IconProps {
    className?: string;
}

export const IconCheck: FC<IconProps> = ({ className = "" }) => (
    <Check className={`w-4 h-4 ${className}`} />
);

export const IconUp: FC<IconProps> = ({ className = "text-red-500" }) => (
    <ChevronUp className={`w-4 h-4 ${className}`} />
);

export const IconDown: FC<IconProps> = ({ className = "text-blue-500" }) => (
    <ChevronDown className={`w-4 h-4 ${className}`} />
);

export const IconEqual: FC<IconProps> = ({ className = "text-orange-500" }) => (
    <Equal className={`w-4 h-4 ${className}`} />
);

export const IconTrash: FC<IconProps> = ({ className = "text-red-500" }) => (
    <Trash2 className={`w-4 h-4 ${className}`} />
);