const { useEffect, useMemo, useState } = React;

const formatCurrency = value => new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0
}).format(value || 0);

function MetricCard({ title, value, detail }) {
  return (
    <article className="card">
      <p className="metric-title">{title}</p>
      <p className="metric-value">{value}</p>
      <p className="metric-detail">{detail}</p>
    </article>
  );
}

function CategoryPanel({ categories }) {
  const entries = Object.entries(categories || {});

  return (
    <section className="card">
      <h2>Productos por categoría</h2>
      {entries.length === 0 && <p className="muted">No hay categorías para mostrar.</p>}
      {entries.map(([category, total]) => (
        <div className="category-row" key={category}>
          <span>{category}</span>
          <strong>{total}</strong>
        </div>
      ))}
    </section>
  );
}

function LastProductPanel({ product }) {
  if (!product) {
    return (
      <section className="card">
        <h2>Último producto</h2>
        <p className="muted">No hay productos cargados.</p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>Último producto creado</h2>
      <div className="last-product">
        <img className="product-image" src={product.image} alt={product.name} onError={event => { event.currentTarget.style.display = 'none'; }} />
        <div>
          <h3>{product.name}</h3>
          <p className="muted">{product.category?.name || 'Sin categoría'} · {product.brand?.name || 'Sin marca'}</p>
          <strong>{formatCurrency(product.price)}</strong>
        </div>
      </div>
    </section>
  );
}

function ProductListPanel({ products }) {
  return (
    <section className="card">
      <h2>Listado de productos</h2>
      <div className="product-row table-head">
        <span>Producto</span>
        <span>Precio</span>
      </div>
      {products.map(product => (
        <div className="product-row" key={product.id}>
          <span>{product.name}</span>
          <strong>{formatCurrency(product.price)}</strong>
        </div>
      ))}
    </section>
  );
}

function App() {
  const [data, setData] = useState({ products: null, users: null, lastProduct: null });
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [productsResponse, usersResponse] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/users')
        ]);

        if (!productsResponse.ok || !usersResponse.ok) throw new Error('API no disponible');

        const [products, users] = await Promise.all([
          productsResponse.json(),
          usersResponse.json()
        ]);

        let lastProduct = null;
        if (products.products?.[0]?.detail) {
          const detailResponse = await fetch(products.products[0].detail);
          if (detailResponse.ok) lastProduct = await detailResponse.json();
        }

        setData({ products, users, lastProduct });
        setStatus('ready');
      } catch (error) {
        setStatus('error');
      }
    };

    loadDashboard();
  }, []);

  const categoryCount = useMemo(() => Object.keys(data.products?.countByCategory || {}).length, [data.products]);

  if (status === 'loading') return <div className="loading">Cargando dashboard...</div>;

  if (status === 'error') {
    return (
      <main className="dashboard">
        <div className="error">
          No se pudo cargar el dashboard. Verificá que el servidor, la base de datos y los endpoints API estén funcionando.
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-title">
          <h1>PixelForge Dashboard</h1>
          <p>Resumen ejecutivo del marketplace gamer.</p>
        </div>
        <a className="badge" href="/">Volver al sitio</a>
      </header>

      <section className="grid metrics">
        <MetricCard title="Total de productos" value={data.products.count} detail="Catálogo activo" />
        <MetricCard title="Total de usuarios" value={data.users.count} detail="Usuarios registrados" />
        <MetricCard title="Total de categorías" value={categoryCount} detail="Segmentos del catálogo" />
      </section>

      <section className="grid main-grid">
        <div className="grid">
          <LastProductPanel product={data.lastProduct} />
          <ProductListPanel products={data.products.products || []} />
        </div>
        <CategoryPanel categories={data.products.countByCategory} />
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
