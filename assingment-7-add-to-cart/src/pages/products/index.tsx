import Card from '../../components/Card.tsx'
import "./products.css"
import useFetch from '../../hooks/useFetch.ts'



const Products = () => {
  const [data] = useFetch("https://dummyjson.com/products");
  console.log(data)
  return (
    <div className="product-container">
      <h2>Products List</h2>
      <div className="wrapper">
        {data?.map((items, index) => {
          return (
            <Card
              key={index}
              id={items.id}
              title={items.title}
              price={items.price}
              images={items.images}
            />
          );
        })}
      </div>

    </div>
  );
}

export default Products