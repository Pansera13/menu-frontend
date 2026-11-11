import { Routes, Route, Navigate } from "react-router-dom"
import { ProductPage } from "./pages/products/product-page"
import { AppLayout } from "./components/layout/app-layout"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="products" />} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App