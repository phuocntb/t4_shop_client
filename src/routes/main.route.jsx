import {Routes, Route} from 'react-router-dom';
import LazyFn from '../utils/lazy_folder/lazy.util'
import Home from '../pages/homes/Home'
import ProductManager from '../pages/admin/product-manager/ProductManager';
import CategoryManager from '../pages/admin/category-manager/CategoryManager';
export default <Routes>
    {/* element={LazyFn(() => import('../pages/homes/Home.jsx'))()} */}
    <Route path='' element={<Home/>}>
        {/* Se co navbar + footer */}
        <Route path='about' element={<>About</>} />
    </Route>
    {/* khong co navbar + footer */}
    <Route path='/admin' element={LazyFn(() => import('../pages/admin/admin.main'))()} >
        <Route path='product-manager' element={<ProductManager/>}></Route>
        <Route path='category-manager' element={<CategoryManager/>}></Route>
    </Route>
</Routes>