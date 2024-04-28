import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import CheckoutPage from "./CheckoutPage";
import ProductPage from "./ProductPage";
import CategoryPage from "./CategoryPage/CategoryPage";
import LoginPage from "./LoginPage";
import MyProfilePage from "./MyProfilePage";

export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "category/:category",
    component: CategoryPage,
  },
  {
    path: "category/:category/product/:id",
    component: ProductPage,
  },
  {
    path: "product/:id",
    component: ProductPage,
  },
  {
    path: "checkout",
    component: CheckoutPage,
  },
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "login",
    component: LoginPage,
  },
  {
    path: "profile",
    component: MyProfilePage,
  },
];
