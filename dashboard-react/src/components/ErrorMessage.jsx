function ErrorMessage() {
  return (
    <main className="dashboard">
      <div className="error">
        No se pudo cargar el dashboard. Verificá que el servidor, la base de datos y los endpoints API estén funcionando.
      </div>
    </main>
  );
}

export default ErrorMessage;
