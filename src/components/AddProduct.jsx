import { useDispatch } from "react-redux"

function AddProduct({addProductAction}) {

    const dispatch = useDispatch()

    return (
        <div className="button_elem">
            <button id="add" onClick={() => dispatch(addProductAction(prompt()))}>Add product</button>
        </div>
    )
}

export default AddProduct