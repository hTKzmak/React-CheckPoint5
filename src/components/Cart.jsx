import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrAction, incrAction } from "../store/cartReducer"

function Cart() {

    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch()

    // Подключите к проекту механизмы localStorage таким образом, чтобы каждое изменение стейта сохранялось в хранилище и при перезагрузке данные сохранялись:
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div className="product-list">
            {cart.map(elem =>
                <div className="product-item" key={elem.id}>
                    <h2>{elem.title}</h2>
                    <div className="navigation">
                        <button onClick={() => dispatch(incrAction(elem.id))}>+</button>
                        <p>{elem.count}</p>
                        <button onClick={() => dispatch(decrAction(elem.id))}>-</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
