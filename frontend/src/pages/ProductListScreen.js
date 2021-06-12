import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../material-styles/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import {
  deleteProductById,
  listProducts,
  createProduct,
} from "../actions/productActions";
import Loader from "../components/Home/Loader";
import { PRODUCT_CREATE_RESET } from "../reducer-const/productConst";
import Paginate from "../components/Paginate";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const classes = useStyles();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDeleteProduct } = productDelete;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    successDeleteProduct,
    userInfo,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    dispatch(deleteProductById(id));
  };
  const createProductHandler = () => {
    dispatch(createProduct());
  };
  return (
    <>
      <Container>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <h1>Products</h1>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              m={3}
              onClick={createProductHandler}
            >
              Create Product
            </Button>
          </Grid>
        </Grid>

        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Alert severity="warning"></Alert>
        ) : (
          <>
            <TableContainer fullWidth>
              <Table className={classes.tableWidth}>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>PRICE</TableCell>
                    <TableCell>CATEGORY</TableCell>
                    <TableCell>BRAND</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.length !== 0 &&
                    products.map((product) => {
                      return (
                        <TableRow key={product._id}>
                          <TableCell>{product._id}</TableCell>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>${product.price}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.brand}</TableCell>
                          <TableCell>
                            <Link to={`/admin/product/${product._id}/edit`}>
                              <Button variant="contained" color="primary">
                                <i className="fas fa-edit"></i>
                              </Button>
                            </Link>
                            <Button
                              variant="contained"
                              onClick={() => deleteHandler(product._id)}
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        <Paginate pages={pages} page={page} isAdmin={true}></Paginate>
      </Container>
    </>
  );
};

export default ProductListScreen;
