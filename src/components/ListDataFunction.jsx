import dataJson from "../assets/data.json"

function getAllData() {
    const productsData = dataJson.products
    let productObj = {}
    for (let i of productsData){
        if (!productObj[i.category]){
            productObj[i.category] = []
        }
        productObj[i.category].push(i)
    }
    return productObj;
}

export default getAllData;
