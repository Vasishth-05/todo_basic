function CategoryFilter({selectedCategory,setSelectedCategory}){
    return <div className = 'flex gap-4 justify-center mb-8 flex-wrap'>
        <button onClick={() => setSelectedCategory("all")} className='bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition'>All</button>
        <button onClick={() => setSelectedCategory("electronics")} className='bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition'>Electronics</button>
        <button onClick={() => setSelectedCategory("jewelery")} className='bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition'>Stationary</button>
        <button onClick={() => setSelectedCategory("men's clothing")} className='bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition'>Essentials</button>
        <button onClick={() => setSelectedCategory("women's clothing")} className='bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition'>Home Decor</button>
    </div>
}

export default CategoryFilter;