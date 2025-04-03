import React, { useContext, useEffect, useState } from "react";
import {HandleItemContext} from "../context/HandleItemContext";
import colors from '../assets/colors';
import '../assets/index.css';


function Item({ id, text}) {

    const{handleItemDelete} = useContext(HandleItemContext);

    const [isChecked, setIsChecked] = useState(()=>{
        const initialValue = localStorage.getItem(id);
        return initialValue ? JSON.parse(initialValue) : false;
    });

    useEffect(() => localStorage.setItem(id,JSON.stringify(isChecked)), [isChecked]);

    const handleCheck = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <div className="w-full mb-3 p-2 flex justify-between items-center rounded-md shadow-lg" style={{
            backgroundColor: colors.white,
        }}>
            <div className="flex items-center" style={{ gap: '10px' }}>
                <input
                    type="checkbox"
                    className="mr-3"
                    checked={isChecked}
                    onChange={handleCheck}
                />
                <p style={{
                    textDecoration: isChecked ? "line-through" : "none",
                    color: isChecked ? colors.gray : colors.black,
                }}>
                    {text}
                </p>
            </div>
            <button
                className="p-2 py-3 rounded-md"
                style={{
                    backgroundColor: colors.red,
                    color: "white",
                    border: "none"
                }}
                onClick={() => handleItemDelete(id)}
                checked={isChecked}
            >
                Delete
            </button>
        </div>
    );
}

export default Item;
