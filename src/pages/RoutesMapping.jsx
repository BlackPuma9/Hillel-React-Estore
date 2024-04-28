import { Route, Routes } from "react-router-dom";
import routesArray from "./routesMapping";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "../store/slices/cart";
import { getProductFromLocalStorageCart } from "../utils/helpers/cartLocalStorage";

const RoutesMapping = () => {
  const [routes, setRoutes] = useState([]);
  const cartData = getProductFromLocalStorageCart();

  const productQuantity = cartData.reduce((acc, cur) => acc + cur.quantity, 0);
  const dispatch = useDispatch();
  dispatch(setInitialState(productQuantity));

  useEffect(() => {
    setRoutes(
      routesArray.map(({ path, component: Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      }),
    );
  }, []);

  return <Routes>{routes && routes}</Routes>;
};

export default RoutesMapping;
