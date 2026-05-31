# Daily / Weekly - Sprint 8

## Qué se hizo

- Se crearon endpoints API para usuarios y productos.
- Se agregó paginado opcional en los listados de la API.
- Se ocultó información sensible de usuarios en las respuestas JSON.
- Se creó un dashboard React que consume la API.
- Se agregaron paneles de métricas, categorías, último producto y listado de productos.

## Qué falta revisar

- Probar la API con la base MySQL cargada en el entorno local.
- Verificar que las imágenes existan físicamente en las carpetas públicas correspondientes.
- Validar el dashboard desde distintos tamaños de pantalla.

## Riesgos o bloqueos

- La aplicación depende de que MySQL esté levantado y de que los scripts SQL hayan sido ejecutados.
- El dashboard consume endpoints locales, por lo que el servidor Express debe estar activo.
