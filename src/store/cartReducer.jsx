const defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
]

const INCR = 'INCR'
const DECR = 'DECR'
const ADD_PRODUCT = 'ADD_PRODUCT'

export const cartReducer = (store = defaultState, action) => {
    switch (action.type) {
        case INCR:
            return store.map(item => {
                // Реализуйте проверку, которая будет ограничивать значение count от 1 до 25 (включительно):
                if (item.id === action.payload && item.count < 25) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
        case DECR:
            // Реализуйте удаление элемента корзины только в том случае, если значение count будет меньше 1 (то есть 0)
            const zeroCount = store.findIndex(el => el.id === action.payload)

            if (store[zeroCount].count === 1) {
                return store.slice(0, zeroCount).concat(store.slice(zeroCount + 1))
            }

            return store.map(item => {
                if (item.id === action.payload && item.count > 1) {
                    return { ...item, count: item.count - 1 }
                }
                return item
            })

        // Реализуйте кнопку, которая будет добавлять новый элемент в корзину, указав дефолтное значение для count - 1, для id - либо автоинкремент, либо любое уникальное значение. Имя товара можно брать с результата работы prompt():
        case ADD_PRODUCT:
            let new_product = {
                id: Date.now(),
                title: action.payload,
                count: 1
            }
            return [...store, new_product]

        default:
            return store
    }
}

export const incrAction = (payload) => ({ type: INCR, payload })
export const decrAction = (payload) => ({ type: DECR, payload })
export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload })