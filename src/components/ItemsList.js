import Item from "../containers/Item"

function ItemsList({itemsList}) {

    return(
        <div className="w-full mt-3 mb-1 flex flex-col justify-center items-center rounded-md">
            {
                itemsList.map((item, index) => 
                <Item 
                key={index} 
                text={item.text} 
                id={item.id}/>)
            }
        </div>
    )
}

export default ItemsList;