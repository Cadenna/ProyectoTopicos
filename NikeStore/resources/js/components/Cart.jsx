import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Table, Button, Row, Col } from 'react-bootstrap';
import Cookies from "js-cookie";

function Cart() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = () => {
    axios
      .get('http://localhost:8000/api/cart', {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        setPurchases(response.data.purchases);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeFromCart = (purchaseId) => {
    axios
      .delete(`http://localhost:8000/api/cart/${purchaseId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then(() => {
        setPurchases((prevPurchases) =>
          prevPurchases.filter((purchase) => purchase.id !== purchaseId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Cart</h2>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td>
                    <img
                      src={purchase.product.image}
                      alt={purchase.product.name}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </td>
                  <td>{purchase.product.name}</td>
                  <td>{purchase.product.description}</td>
                  <td>{purchase.price}</td>
                  <td>
                    <Button onClick={() => removeFromCart(purchase.id)} variant="danger">
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
