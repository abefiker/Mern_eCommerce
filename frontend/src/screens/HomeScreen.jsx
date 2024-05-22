import { Row, Col } from "react-bootstrap"
// import Products from '../products';
import Product from '../components/Product';
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
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
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
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