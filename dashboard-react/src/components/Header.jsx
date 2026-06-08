import { MonitorCog } from 'lucide-react';
import { getApiBaseUrl } from '../utils/formatters';

function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-title">
        <div className="dashboard-icon"><MonitorCog size={30} /></div>
        <div>
          <h1>PixelForge Dashboard</h1>
          <p>Resumen ejecutivo del marketplace gamer.</p>
        </div>
      </div>
      <a className="badge" href={getApiBaseUrl()}>Volver al sitio</a>
    </header>
  );
}

export default Header;
