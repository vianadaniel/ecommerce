import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Card as="div" className="my-3 p3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          style={{ height: "261px" }}
          variant="top"
        />
      </Link>
      <Card.Body as="div">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">R${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
