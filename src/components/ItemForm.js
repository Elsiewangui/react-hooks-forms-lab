import React,{useState} from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  
function handleNameChange(event) {
    setItemName(event.target.value);
}

  
function handleCategoryChange(event) {
    setItemCategory(event.target.value);
}

  
function handleSubmit(event)  {
    event.preventDefault();

   
const newItem = {
  id: uuid(),
  name: itemName,
  category: itemCategory,
};

   
onItemFormSubmit(newItem);
setItemName("");
setItemCategory("Produce");
}

return (
  <form className="NewItem" onSubmit={handleSubmit} >
  <label htmlFor="item-name" >
  Name:
  <input
  id="item-name"
    type="text"
    name="name"
    value={itemName}
    onChange={handleNameChange}
        />
 </label>

  <label htmlFor="item-category">
  Category:
  <select
  id="item-category"
  name="category"
  value={itemCategory}
  onChange={handleCategoryChange}
  
  >
  <option value="Produce">Produce</option>
  <option value="Dairy">Dairy</option>
  <option value="Dessert">Dessert</option>
   </select>
  </label>

  <button type="submit" >Add to List</button>
</form>
  );
}

export default ItemForm;