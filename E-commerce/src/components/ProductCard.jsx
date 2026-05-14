function ProductCard({product}){
    return <div>
        <div class='flex pb-6 border-dashed ' >{`
            ID:${product.id},
            Product_title:${product.title},
            Product_price:${product.price},
            Product_category:${product.category}`
        }
        <button>Add to cart</button>
        </div>
    </div>
}

export default ProductCard;