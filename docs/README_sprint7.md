# Sprint 7 - Validaciones back-end y front-end

## Objetivo del sprint

El objetivo del Sprint 7 fue proteger los formularios del sitio mediante validaciones tanto del lado del servidor como del lado del cliente.

## Validaciones back-end

Se implementaron validaciones con Express Validator.

```txt
src/validations/
├── productValidations.js
└── userValidations.js
```

## Validaciones front-end

Se implementaron validaciones con JavaScript del lado del cliente.

```txt
public/js/
├── productValidation.js
└── userValidation.js
```

## Registro de usuarios

- Nombre obligatorio.
- Nombre con mínimo 2 caracteres.
- Apellido obligatorio.
- Apellido con mínimo 2 caracteres.
- Email obligatorio.
- Email con formato válido.
- Email no repetido.
- Contraseña obligatoria.
- Contraseña con mínimo 8 caracteres.
- Confirmación de contraseña.
- Imagen con formato válido: JPG, JPEG, PNG o GIF.

## Login de usuarios

- Email obligatorio.
- Email válido.
- Email existente.
- Contraseña obligatoria.
- Contraseña coincidente.

## Productos

- Nombre obligatorio.
- Nombre con mínimo 5 caracteres.
- Descripción con mínimo 20 caracteres.
- Imagen válida: JPG, JPEG, PNG o GIF.
- Categoría válida.
- Marca válida.
- Colores válidos.
- Precio mayor a cero.

## Entregables del sprint

- Validaciones back-end en rutas que reciben formularios.
- Validaciones front-end en formularios principales.
- Mensajes de error visibles para el usuario.
- Protección contra carga de datos inválidos.
- Retrospectiva actualizada.
