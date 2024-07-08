import {
  Form,
  Button,
  CardGroup,
  Card,
  Image,
  CardTitle,
  CardBody,
  CardText,
} from "react-bootstrap";
import useCommerceData from "../../services";

const Products = () => {
  const { merchant, products, categories } = useCommerceData();

  return (
    <section className="d-flex flex-column align-items-center">
      <h1>Products:</h1>
      <div className="w-50 mb-3">
        <Form className="d-flex ms-auto">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <br />
      </div>
      <CardGroup>
        {products.map((product) => (
          <Card className="mb-4 shadow-sm" key={product.id}>
            <Image
              top
              src={product.image.url}
              alt={product.name}
              className="img-fluid"
            />
            <CardBody className="d-flex flex-column">
              <CardTitle tag="h5" className="text-center">
                {product.name}
              </CardTitle>
              <CardText className="text-muted text-center mb-2">
                {product.description}
              </CardText>
              <CardText className="h5 text-center text-primary mb-3">
                ${product.price.formatted}
              </CardText>
              <Button color="primary" className="mt-auto">
                Add to cart
              </Button>
            </CardBody>
          </Card>

          /*           <li key={product.id}>
            {product.name}
            <img src={product.image.url} />
            <p>{product.description}</p>
          </li> */
        ))}
      </CardGroup>
      <div className="w-50">
        <h1>Raw Data</h1>
        {/*         <pre>{JSON.stringify(merchant, null, 2)}</pre> */}
        <h5>Categories</h5>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
        <h5>Products</h5>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </section>
  );
};

export default Products;
