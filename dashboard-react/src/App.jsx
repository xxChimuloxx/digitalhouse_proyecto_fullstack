import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import CategoryPanel from './components/CategoryPanel';
import LastProductPanel from './components/LastProductPanel';
import ProductListPanel from './components/ProductListPanel';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { getProductDetail, getProducts, getUsers } from './services/api';
import './styles.css';

function App() {
  const [dashboardData, setDashboardData] = useState({
    products: null,
    users: null,
    lastProduct: null
  });
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [products, users] = await Promise.all([
          getProducts(),
          getUsers()
        ]);

        let lastProduct = null;
        const firstProduct = products.products?.[0];

        if (firstProduct?.id) {
          lastProduct = await getProductDetail(firstProduct.id);
        }

        setDashboardData({ products, users, lastProduct });
        setStatus('ready');
      } catch (error) {
        setStatus('error');
      }
    };

    loadDashboard();
  }, []);

  const categoryCount = useMemo(() => {
    return Object.keys(dashboardData.products?.countByCategory || {}).length;
  }, [dashboardData.products]);

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorMessage />;

  const products = dashboardData.products?.products || [];
  const users = dashboardData.users || { count: 0 };

  return (
    <main className="dashboard">
      <Header />

      <section className="grid metrics">
        <MetricCard title="Total de productos" value={dashboardData.products.count} detail="Catálogo activo" />
        <MetricCard title="Total de usuarios" value={users.count} detail="Usuarios registrados" />
        <MetricCard title="Total de categorías" value={categoryCount} detail="Segmentos del catálogo" />
      </section>

      <section className="grid main-grid">
        <div className="grid">
          <LastProductPanel product={dashboardData.lastProduct} />
          <ProductListPanel products={products} />
        </div>
        <CategoryPanel categories={dashboardData.products.countByCategory} />
      </section>
    </main>
  );
}

export default App;
