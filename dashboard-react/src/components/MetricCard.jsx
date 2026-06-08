function MetricCard({ title, value, detail }) {
  return (
    <article className="card metric-card">
      <p className="metric-title">{title}</p>
      <p className="metric-value">{value}</p>
      <p className="metric-detail">{detail}</p>
    </article>
  );
}

export default MetricCard;
