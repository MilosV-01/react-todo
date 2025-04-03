function Scroll (props) {
    return (
        <div 
            style={{
                overflow: 'auto',
                maxHeight: '300px'
            }}
            className="my-3 px-2 rounded-md"
        >
            {props.children}
        </div>)
}

export default Scroll