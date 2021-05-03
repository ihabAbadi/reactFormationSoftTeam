let products = [
    {
        id : 1,
        title : 'product 1',
        price : 10
    },
    {
        id : 2,
        title : 'product 2',
        price : 100
    },
    {
        id : 3,
        title : 'product 3',
        price : 210
    },
    {
        id : 4,
        title : 'product 4',
        price : 30
    },
    {
        id : 5,
        title : 'product 5',
        price : 20
    },
]

// export const mockApi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(products)
//     }, 5000)
// })

export const mockApi = () => {
    return products
}

export const addProduct = (product) => {
    products.push({...product, id : products.length+1})
}

export const getProductById = (id) => {
    return products.find(e => e.id == id)
}

export const deleteProduct = (id) => {
    products = products.filter(p => p.id != id)
}