import { getProducts } from '../states/storeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import LoadingIndicator from './LoadingIndicator'

const ReduxTest = () => {
    const products = useSelector((state) => state.products)
    const loading = useSelector((state) => state.products.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <h1>Redux Test</h1>
            <div>
                {loading ? (
                    <LoadingIndicator />
                ) : (
                    products.fruits.fruits.map((fruit) => {
                        return <div key={fruit.name}>{fruit.name}</div>
                    })
                )}
            </div>
        </div>
    )
}

export default ReduxTest
