-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS tienda_online;
USE tienda_online;

-- Crear la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  usuario_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla productos
CREATE TABLE IF NOT EXISTS productos (
  producto_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  imagen_url VARCHAR(255),
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla carritos
CREATE TABLE IF NOT EXISTS carritos (
  carrito_id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id) ON DELETE CASCADE
);

-- Crear la tabla carrito_items
CREATE TABLE IF NOT EXISTS carrito_items (
  item_carrito_id INT AUTO_INCREMENT PRIMARY KEY,
  carrito_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  agregado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (carrito_id) REFERENCES carritos(carrito_id) ON DELETE CASCADE,
  FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);

-- Crear la tabla pedidos
CREATE TABLE IF NOT EXISTS pedidos (
  pedido_id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  estado VARCHAR(50) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id) ON DELETE CASCADE
);

-- Crear la tabla pedido_items
CREATE TABLE IF NOT EXISTS pedido_items (
  item_pedido_id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id) ON DELETE CASCADE,
  FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);
