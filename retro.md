# Retrospectiva - Sprint 6

## Comenzar a hacer

- Documentar con mayor precisión los cambios estructurales importantes, especialmente cuando se reemplaza una fuente de datos por otra.
- Probar las rutas principales después de cada cambio de modelo o relación.
- Mantener una copia clara de los scripts SQL para facilitar la instalación del proyecto en otro equipo.

## Hacer más

- Separar responsabilidades entre rutas, controladores, modelos y vistas.
- Utilizar nombres consistentes en inglés para tablas, campos y modelos, facilitando el trabajo con Sequelize.
- Revisar las relaciones antes de programar los controladores para evitar errores posteriores.

## Continuar haciendo

- Mantener una estructura ordenada de carpetas.
- Trabajar por sprint, dejando entregables claros y verificables.
- Reutilizar vistas parciales para evitar repetición de código.

## Hacer menos

- Evitar resolver cambios grandes directamente sobre las vistas sin revisar antes el impacto en rutas y controladores.
- Evitar depender de datos hardcodeados cuando ya existe una fuente de datos más robusta.

## Dejar de hacer

- Dejar de usar JSON como fuente principal de persistencia para productos y usuarios.
- Dejar de duplicar lógica de acceso a datos en distintos controladores.
