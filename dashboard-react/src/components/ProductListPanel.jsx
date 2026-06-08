import { formatCurrency } from '../utils/formatters';

function ProductListPanel({ products }) {
  return (
    <section className="card">
      <h2>Listado de productos</h2>
      <div className="product-row table-head">
        <span>Producto</span>
        <span>Categoría</span>
        <span>Precio</span>
      </div>
      {(products || []).map(product => (
        <div className="product-row" key={product.id}>
          <span>{product.name}</span>
          <span>{product.category?.name || 'Sin categoría'}</span>
          <strong>{formatCurrency(product.price)}</strong>
        </div>
      ))}
    </section>
  );
}

export default ProductListPanel;
