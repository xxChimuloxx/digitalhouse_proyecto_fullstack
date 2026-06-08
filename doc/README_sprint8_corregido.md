# Cómo ejecutar el Sprint 8 corregido

## 1. Aplicación principal

Desde la raíz:

```bash
npm install
npm start
```

Servidor principal:

```txt
http://localhost:3000
```

## 2. Dashboard React separado

En otra terminal:

```bash
cd dashboard-react
npm install
npm run dev
```

Dashboard:

```txt
http://localhost:5173
```

## 3. Importante

El dashboard consume las APIs del servidor Express, por eso la aplicación principal debe estar corriendo antes de abrir el dashboard.
