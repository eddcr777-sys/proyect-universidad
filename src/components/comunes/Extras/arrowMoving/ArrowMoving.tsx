import React from "react";
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from "lucide-react";
import './Arrowmoving.css';

interface ArrowMovingProps {
    direction: "up" | "down" | "left" | "right";
    text: string;
    onClick?: () => void;
}

const ArrowMoving: React.FC<ArrowMovingProps> = ({ direction, text, onClick }) => {
    return (
        <div className="institucional-secundario-ue" onClick={onClick}>
            <p>{text}</p>
            {direction === "down" && <ArrowDown className={`icono-animado icono-animado--${direction}`} size={24} />}
            {direction === "up" && <ArrowUp className={`icono-animado icono-animado--${direction}`} size={24} />}
            {direction === "left" && <ArrowLeft className={`icono-animado icono-animado--${direction}`} size={24} />}
            {direction === "right" && <ArrowRight className={`icono-animado icono-animado--${direction}`} size={24} />}
        </div>
    );
};

export default ArrowMoving;