import { formatCurrency, normalizeImageUrl } from '../utils/formatters';

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
        {product.image && (
          <img
            className="product-image"
            src={normalizeImageUrl(product.image)}
            alt={product.name}
            onError={event => { event.currentTarget.style.display = 'none'; }}
          />
        )}
        <div>
          <h3>{product.name}</h3>
          <p className="muted">
            {product.category?.name || 'Sin categoría'} · {product.brand?.name || 'Sin marca'}
          </p>
          <strong>{formatCurrency(product.price)}</strong>
        </div>
      </div>
    </section>
  );
}

export default LastProductPanel;
