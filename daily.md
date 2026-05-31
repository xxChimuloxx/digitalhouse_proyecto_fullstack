# Daily / Weekly - Sprint 5

Durante este sprint el foco estuvo puesto en completar el flujo de usuarios. Se priorizó primero la estructura de rutas, controladores y modelo de usuarios, luego el registro con subida de imagen y contraseña encriptada, y finalmente el login con sesiones, cookies y middlewares de acceso.

## Avances
- Se implementó registro funcional de usuarios.
- Se agregó subida de imagen de perfil con Multer.
- Se incorporó bcrypt.js para guardar contraseñas encriptadas.
- Se implementó login, logout y perfil de usuario.
- Se agregaron rutas protegidas para usuarios logueados y rutas exclusivas para huéspedes.

## Bloqueos o riesgos
- Al trabajar con JSON, la persistencia es limitada y no tiene las garantías de una base de datos real.
- La validación de formularios todavía es básica y puede mejorarse en próximos sprints.

## Próximos pasos
- Mejorar validaciones.
- Preparar la integración futura con base de datos.
- Continuar separando responsabilidades para mantener el proyecto ordenado.
