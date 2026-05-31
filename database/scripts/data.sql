USE pixelforge_store;

INSERT INTO categories (id, name) VALUES
(1, 'Periféricos'),
(2, 'Audio'),
(3, 'Monitores'),
(4, 'PC y componentes'),
(5, 'Sillas'),
(6, 'Streaming');

INSERT INTO brands (id, name) VALUES
(1, 'HyperCore'),
(2, 'NovaTech'),
(3, 'PixelGear'),
(4, 'ForgeLab'),
(5, 'Astra Gaming');

INSERT INTO colors (id, name) VALUES
(1, 'Negro'),
(2, 'Blanco'),
(3, 'Azul'),
(4, 'Violeta'),
(5, 'Rojo'),
(6, 'RGB');

INSERT INTO users (id, first_name, last_name, email, password, category, image) VALUES
(1, 'Lucía', 'Gómez', 'lucia.gomez@example.com', '$2a$10$cmIZtNr8SvMO398tBA1bZuS1VCvq1KdIrf87UHguPyHxrtGQa88wu', 'customer', 'default-user.png'),
(2, 'Martín', 'Pérez', 'martin.perez@example.com', '$2a$10$cmIZtNr8SvMO398tBA1bZuS1VCvq1KdIrf87UHguPyHxrtGQa88wu', 'customer', 'default-user.png'),
(3, 'Admin', 'PixelForge', 'admin@pixelforge.com', '$2a$10$xdZuKZs8W.xgLiA6hVh.p.31541YYbyIpv60.lA9com.alyRsMtvy', 'admin', 'default-user.png');

INSERT INTO products (id, name, description, image, category_id, brand_id, price, featured) VALUES
(1, 'Teclado Mecánico RGB', 'Teclado compacto con switches mecánicos, retroiluminación RGB y estructura reforzada para sesiones de juego intensas.', 'product-default.png', 1, 1, 89999.00, 1),
(2, 'Mouse Gamer Pro', 'Mouse ergonómico con sensor óptico de alta precisión, botones programables y diseño liviano.', 'product-default.png', 1, 2, 45999.00, 1),
(3, 'Auriculares 7.1', 'Auriculares gamer con sonido envolvente, micrófono desmontable y almohadillas confortables.', 'product-default.png', 2, 3, 72500.00, 1),
(4, 'Monitor 144Hz', 'Monitor de 24 pulgadas con tasa de refresco de 144Hz, bajo tiempo de respuesta y panel ideal para gaming competitivo.', 'product-default.png', 3, 4, 310000.00, 1),
(5, 'Silla Gamer Ergonómica', 'Silla reclinable con soporte lumbar, apoyabrazos regulables y diseño pensado para largas jornadas.', 'product-default.png', 5, 5, 245000.00, 0),
(6, 'Webcam Full HD Streaming', 'Cámara Full HD con micrófono integrado, ideal para streaming, clases virtuales y videollamadas.', 'product-default.png', 6, 2, 68000.00, 0),
(7, 'Placa de Video RTX Starter', 'Placa gráfica orientada a jugadores que buscan buen rendimiento en 1080p y tareas creativas.', 'product-default.png', 4, 4, 520000.00, 0),
(8, 'Mousepad XL RGB', 'Mousepad extendido con superficie microtexturada y borde iluminado RGB.', 'product-default.png', 1, 3, 28999.00, 0);

INSERT INTO product_colors (product_id, color_id) VALUES
(1, 1), (1, 6),
(2, 1), (2, 4),
(3, 1), (3, 3),
(4, 1),
(5, 1), (5, 5),
(6, 1),
(7, 1),
(8, 1), (8, 6);

INSERT INTO carts (id, user_id, status, total) VALUES
(1, 1, 'open', 135998.00);

INSERT INTO cart_items (cart_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 89999.00),
(1, 2, 1, 45999.00);
