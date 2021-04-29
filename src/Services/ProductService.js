const products = [
    {
        title : 'product 1',
        price : 10
    },
    {
        title : 'product 2',
        price : 100
    },
    {
        title : 'product 3',
        price : 210
    },
    {
        title : 'product 4',
        price : 30
    },
    {
        title : 'product 5',
        price : 20
    },
]

export const mockApi = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 5000)
})