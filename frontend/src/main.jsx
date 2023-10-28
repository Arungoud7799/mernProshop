import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/styles/index.css";
import App from "./App.jsx";
import PrivateRoute from "./components/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import LoginScreen from "./pages/loginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ShippingScreen from "./pages/shippingScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderScreen from "./pages/OrderScreen";
import ProfileScreen from "./pages/ProfileScreen";
import AdminRoute from "./components/AdminRoute";
import OrderListScreen from "./pages/admin/OrderListScreen";
import ProductListScreen from "./pages/admin/ProductListScreen";
import ProductEditScreen from "./pages/admin/ProductEditScreen";
import UserListScreen from "./pages/admin/UserListScreen";
import UserEditScreen from "./pages/admin/UserEditScreen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },

      {
        path: "/page/:pageNumber",
        element: <HomeScreen />,
      },
      {
        path: "/search/:keyword",
        element: <HomeScreen />,
      },
      {
        path: "/search/:keyword/page/:pageNumber",
        element: <HomeScreen />,
      },
      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
      {
        path: "/cart",
        element: <CartScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "/shipping", // You can adjust this path as needed
            element: <ShippingScreen />,
          },
          {
            path: "/payment",
            element: <PaymentScreen />,
          },
          {
            path: "/placeorder",
            element: <PlaceOrderScreen />,
          },
          {
            path: "/order/:id",
            element: <OrderScreen />,
          },
          {
            path: "/profile",
            element: <ProfileScreen />,
          },
        ],
      },
      {
        path: "",
        element: <AdminRoute />,
        children: [
          {
            path: "/admin/orderlist",
            element: <OrderListScreen />,
          },
          {
            path: "/admin/productlist",
            element: <ProductListScreen />,
          },
          {
            path: "/admin/productlist/:pageNumber",
            element: <ProductListScreen />,
          },
          {
            path: "/admin/product/:id/edit",
            element: <ProductEditScreen />,
          },
          {
            path: "/admin/userlist",
            element: <UserListScreen />,
          },
          {
            path: "/admin/user/:id/edit",
            element: <UserEditScreen />,
          },
        ],
      },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
