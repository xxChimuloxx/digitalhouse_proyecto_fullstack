# Retrospectiva - Sprint 7

## Comenzar a hacer

- Validar cada formulario desde el back-end antes de guardar información en la base de datos.
- Agregar validaciones de front-end para mejorar la experiencia del usuario.
- Mantener los mensajes de error cerca de cada campo para que sean fáciles de entender.

## Hacer más

- Reutilizar middlewares y archivos de validación para evitar repetir lógica en los controladores.
- Probar casos incorrectos, no solo el camino feliz.
- Revisar que los datos enviados desde los formularios coincidan con las restricciones de la base.

## Continuar haciendo

- Mantener la estructura separada por rutas, controladores, vistas, modelos y middlewares.
- Utilizar Sequelize como capa de acceso a datos.
- Documentar los cambios principales del sprint en el README.

## Hacer menos

- Evitar cargar validaciones directamente dentro de las vistas.
- Evitar confiar únicamente en los atributos HTML como `required`, porque pueden ser deshabilitados desde el navegador.

## Dejar de hacer

- Dejar de guardar datos sin verificar formato, longitud mínima o existencia en base.
- Dejar de mostrar errores genéricos cuando se puede informar claramente qué campo debe corregirse.
