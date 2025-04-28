import { ReactNode } from "react";
import { Button } from "../ui/button";

interface DynamicButtonProps {
    buttonText: string;
    buttonType: "primary" | "secondary" | "ternary"
    buttonAction?: () => void;
    customClass?: string;
    children?: ReactNode;
}

const DynamicButton = ({
    buttonText,
    buttonType,
    buttonAction,
    customClass,
    children
}: DynamicButtonProps) => {
    return (
        <>
            
            <Button
                onClick={buttonAction}
                variant={buttonType}
                className={customClass}
            >
                {children}
                {buttonText}
            </Button>
        </>
    );
};

export default DynamicButton;


