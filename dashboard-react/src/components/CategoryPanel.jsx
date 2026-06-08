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

export default CategoryPanel;
