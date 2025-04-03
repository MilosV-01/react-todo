import React, { useState } from "react";
function InputForm({ addNewItem }) {
    const [newItem, setNewItem] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newItem.trim() !== "") {
        addNewItem(newItem);
        setNewItem(""); // reset polja nakon dodavanja
      }
    };
  
    return (
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full flex justify-center items-center">
          <input
            placeholder="New item goes here"
            type="text"
            maxLength={20}
            className="p-2 mr-3 rounded-md"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="p-2 px-3 rounded-md bg-purple-600 text-white border-none">
            Add
          </button>
        </div>
      </form>
    );
  }
  

export default InputForm;