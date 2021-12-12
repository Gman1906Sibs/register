function Modal() {
    return (
        <div className = " bg-black opacity-60 w-[100vw] h-[100vh] absolute top-0 z-10 ">
            <div className=" h-[100vw] flex justify-center items-center ">
                <button className= " w-[50vw] h-[5vh] bg-white z-50 rounded-lg  ">
                    <div className=" flex w-full justify-end text-xs text-red-800 font-bold pr-4 ">❌</div>
                    <div className=" text-sm flex justify-center items-center h-[30%] ">Thank You 😊</div>
                </button>
            </div>
        </div>
    )
}

export default Modal
