import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import publicRoutes from "./routes/publicRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import sellerRoutes from "./routes/sellerRoutes";
import adminRoutes from "./routes/adminRoutes";
import notFoundRoute from "./routes/notFoundRoute";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import SellerRoute from "./components/auth/SellerRoute";
import AdminRoute from "./components/auth/AdminRoute";
// import Products from "./components/product/ProductDetails";

const renderRoutes = (routesArray) =>
  routesArray.map((route, index) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {route.children.map((child, childIndex) => (
            <Route key={childIndex} path={child.path} element={child.element} />
          ))}
        </Route>
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Routes>
          {/* 🔓 Public Routes */}
          {renderRoutes(publicRoutes)}

          {/* 🔐 Protected Routes */}
          <Route element={<ProtectedRoute />}>
            {renderRoutes(protectedRoutes)}
          </Route>

          {/* 🧑‍💼 Seller Routes */}
          <Route element={<SellerRoute />}>{renderRoutes(sellerRoutes)}</Route>

          {/* 🛠️ Admin Routes */}
          <Route element={<AdminRoute />}>{renderRoutes(adminRoutes)}</Route>

          {/* ❌ 404 */}
          {renderRoutes(notFoundRoute)}
        </Routes>
        {/* <Products /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
