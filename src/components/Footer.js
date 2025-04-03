import colors from "../assets/colors";

function Footer({itemsCount, deleteAllItems}) {

    return (
        <>
            {
                !itemsCount?
                <p className="text-center text-sm mt-3" style={{
                    color: colors.black
                }}>Congratulations! You have completed all your tasks</p>:
                <div className="w-full flex justify-between items-center">
                    <p className="m-0 text-base">{itemsCount} items left</p>
                    <button className="p-2 text-base rounded-md bg-purple-600"
                    style={{
                        fontFamily: 'inherit',
                        color: colors.white,
                        border: 'none',
                    }}
                    onClick={() => deleteAllItems()}
                    >Clear Completed</button>
                </div>
            }
        </>
    )

}        

export default Footer;