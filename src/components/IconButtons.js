export const IconButtons = (props) => {
    const deleteFunc = () => {
        props.onDelete()
        props.onClickSwap()
    }

    const completeFunc = () => {
        props.onComplete()
        props.onCompleteAnimation()
    }
    return(
        <span className='icons'><i className="fa-solid fa-check" onClick={completeFunc}></i> | <i className="fa-solid fa-trash" onClick={deleteFunc}></i> | <i className="fa-solid fa-pen-to-square"></i></span>
    );
}

// export default IconButtons