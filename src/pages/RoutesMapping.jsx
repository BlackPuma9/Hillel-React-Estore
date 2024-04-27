import { Route, Routes } from "react-router-dom";
import routesArray from "./routesMapping";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "../store/slices/cart";

const RoutesMapping = () => {
  const [routes, setRoutes] = useState(null);
  const localCart = localStorage.getItem("cart");
  const cartData = localCart === null ? [] : JSON.parse(localCart);

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

  return (
    <Routes>
      {routes && routes}
      {/*{routes !== null ? routes : null}*/}

      {/*<Route path="/" element={<HomePage />} />*/}

      {/*<Route path="todos" element={<TodosPage />} />*/}

      {/*<Route*/}
      {/*    path="*"*/}
      {/*    element={<PageNotFound />}*/}
      {/*/>*/}
    </Routes>
  );
};

export default RoutesMapping;
