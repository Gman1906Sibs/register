function Popup(props) {
    return (props.trigger) ? (
        <div className=" fixed top-0 left-0 w-[100%] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.2)] ">
            <div className=" relative p-[30px] w-[100%] max-w-[60vw] bg-white rounded-lg ">
                <button onClick={() => props.setTrigger(false)} className=" absolute top-[16px] right-[16px] text-red-800 px-1 py-3 border-[1px] hover:text-white bg-gray-100 rounded-lg hover:bg-red-500 ">
                    close
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
