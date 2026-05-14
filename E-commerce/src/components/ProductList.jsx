import ProductCard from "./ProductCard";

function ProductList({products}){
    return <div>
        <div class="flex flex-wrap gap-6 justify-center p-6">
            {products.map((product,index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </div>
    </div>
}

export default ProductList;