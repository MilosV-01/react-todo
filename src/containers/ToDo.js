import InputForm from "./InputForm";
import ItemsList from "../components/ItemsList";
import itemsListInitial from "../store/itemsListInitial";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import colors from "../assets/colors";
import { HandleItemContext } from "../context/HandleItemContext";


function ToDo(){


    const [itemsList, setItemsList] = useState(() => {
        const initialItems= localStorage.getItem('itemsList');
        return initialItems ? JSON.parse(initialItems) : itemsListInitial;
    });

    useEffect(() => {
        localStorage.setItem('itemsList', JSON.stringify(itemsList));

        return () => {
            for (const key in localStorage) {
                if (!itemsList.map(item => item.id).includes(key) && 'itemsList' !== key) {
                    localStorage.removeItem(key);
                };
                }
            };
    }, [itemsList]);

    const addNewItem = (newItem) => {
        setItemsList(prev => [
            ...prev,
            { id: crypto.randomUUID(), text: newItem }
        ]);
    };
    

    const handleItemDelete = (itemID) => {
        setItemsList((prevItemsList) => prevItemsList.filter((item) => item.id !== itemID));
    }

    const deleteAllItems = () => {
        setItemsList([]);
    };

    return(
        <div className="rounded-md p-4 text-center shadow-lg" 
        style={{
            maxWidth: '380px',
            color: `${colors.black}`,
            backgroundColor: '#f6f6f6',
        }}>
            <h1 className="text-4xl ">My Tasks</h1>
            <InputForm addNewItem={addNewItem}/>
            <HandleItemContext.Provider value={{handleItemDelete}}>
            <Scroll>
                <ItemsList itemsList={itemsList}
                />
            </Scroll>
            </HandleItemContext.Provider>
            
            
            <Footer  itemsCount={itemsList.length}
            deleteAllItems={deleteAllItems}/>
        </div>
    )
}

export default ToDo;