import React from "react";
import { Route, Switch } from "react-router";
import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";
import NavbarContainer from "./navbar/NavbarContainer";
import HomeContainer from "./home/HomeContainer";
import LoginContainer from "./login/LoginContainer";
import RegisterContainer from "./register/RegisterContainer";
import CarritoContainer from "./carrito/CarritoContainer";
import CategoriesContainer from "./categories/CategoriesContainer"
import CheckoutContainer from "./checkout/CheckoutContainer"
import HomeAdminContainer from "./admin/HomeAdminContainer"
import AdminProductosContainer from "./admin/productos/AdminProductosContainer"
import AdminCategoriasContainer from "./admin/categorias/AdminCategoriasContainer"
import AdminClientesContainer from "./admin/clientes/AdminClientesContainer"
import AdminOrdenesContainer from "./admin/ordenes/AdminOrdenesContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { persistSession } from "../redux/actions/logUser";
import MisDatosContainer from "./misDatos/MisDatosContainer"
import HistorialComprasContainer from './historialCompra/HistorialCompraContainer'
import CrearProductosContainer from "./admin/crearProductos/CrearProductosContainer"
import EditarProductosContainer from "./admin/editarProductos/EditarProductosContainer"
import CrearCategoriaContainer from "./admin/crearCategoria/CrearCategoriaContainer"
import EditarCategoriaContainer from "./admin/editarCategoria/EditarCategoriaContainer"
import ReviewListContainer from "./reviewList/ReviewListContainer";
import ReviewContainer from "./review/ReviewContainer";
import FormUserContainer from "./formUser/FormUserContainer"

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.persistSession();
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/productos" component={AllProductsContainer} />
          <Route exact path="/categoria" component={AllProductsContainer} />
          <Route exact path="/categoria/:id" component={CategoriesContainer} />
          <Route exact path="/carrito" component={CarritoContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/historial" component={HistorialComprasContainer}/>
          <Route exact path="/checkout" component={CheckoutContainer}/>
          <Route exact path="/admin" component={HomeAdminContainer}/>
          <Route exact path="/admin/productos" component={AdminProductosContainer}/>
          <Route exact path="/admin/categorias" component={AdminCategoriasContainer}/>
          <Route exact path="/admin/clientes" component={AdminClientesContainer}/>
          <Route exact path="/admin/ordenes" component={AdminOrdenesContainer}/>
          <Route exact path="/misdatos" component={MisDatosContainer}/>
          <Route exact path="/reviews" component={ReviewListContainer}/>
          <Route exact path="/reviews/:id" component={ReviewContainer}/>
          <Route exact path="/admin/productos/crear" component={CrearProductosContainer}/>
          <Route exact path="/admin/productos/editar/:id" component={EditarProductosContainer}/>
          <Route exact path="/admin/categorias/crear" component={CrearCategoriaContainer}/>
          <Route exact path="/admin/categorias/editar/:id" component={EditarCategoriaContainer}/>
          <Route exact path="/misdatos/editar" component={FormUserContainer}/>
          <Route
            exact
            path="/productos/:id"
            component={SingleProductContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    persistSession: () => dispatch(persistSession()),
  };
};

export default connect(null, mapDispatchToProps)(Main);
