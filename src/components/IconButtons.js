export const IconButtons = ({onDelete, onClickSwap, onComplete, onCompleteAnimation, onEdit, completed}) => {
    
// * --------------------- CALLS deleteTodo() in App.js and summons Animation -------------------

    const deleteFunc = () => {
        onDelete()
        onClickSwap()
    }

// * --------------------- CALLS completeTodo() in App.js and summons Animation -------------------

    const completeFunc = () => {
        onComplete()
        onCompleteAnimation()
    }
    
// * --------------------- Icons -------------------


    return(
        <span className='icons'>
            {!completed && (
                <>
                    <i className="fa-solid fa-check" onClick={completeFunc}></i> | <i className="fa-solid fa-pen-to-square" onClick={onEdit}></i> | 
                </>
            )}
            <i className="fa-solid fa-trash" onClick={deleteFunc}></i>
        </span>
    );
}

// export default IconButtons