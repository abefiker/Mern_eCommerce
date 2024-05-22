import { Row, Col } from "react-bootstrap"
// import Products from '../products';
import Product from '../components/Product';
import { useGetProductsQuery } from "../slices/productApiSlice";
// import { useEffect , useState } from "react";
// import axios from "axios";

const HomeScreen = () => {
    // const [products,setProducts] = useState([]);

    // useEffect(() =>{
    //     const fetchData =  async () => {
    //         const {data} = await axios.get('/api/products')
    //         setProducts(data);
    //     };
    //     fetchData();
    // },[])
    const { data: products, isLoading, error } = useGetProductsQuery()

    return (
        <>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div>{error?.data?.message || error.error}</div>
            ) : (
                <>
                    <h1>Latest Product</h1 >
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}

        </>
    )
}

export default HomeScreen