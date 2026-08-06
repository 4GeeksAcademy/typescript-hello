# Gestor de Asientos de Cine

Proyecto desarrollado con TypeScript, HTML, CSS, Vite y Tailwind CSS para simular la gestion de una sala de cine de 8 filas por 10 columnas.

El repositorio contiene dos implementaciones del mismo problema:

- una version en TypeScript orientada a consola en `src/main.ts`
- una version visual e interactiva en `src/index.html`

## Tecnologias

- TypeScript
- Vite
- Tailwind CSS
- HTML y JavaScript del lado del navegador

## Como ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run start
```

Valida solamente TypeScript:

```bash
npm run typecheck
```

Ejecuta la version de consola:

```bash
npm run console
```

## Estructura principal

- `src/main.ts`: logica de la sala en TypeScript para pruebas desde consola.
- `src/index.html`: interfaz visual para reservar, cancelar y consultar asientos.
- `src/style.css`: importacion de Tailwind CSS.
- `vite.config.ts`: configuracion del servidor Vite.

## Implementaciones

### 1. Crear sala

La funcion `crearSala` genera una matriz bidimensional que representa la sala de cine. Cada posicion inicia en `0`, lo que significa que el asiento esta libre.

### 2. Mostrar sala

La funcion `mostrarSala` transforma la matriz en un texto legible para consola. Agrega numeracion de filas y columnas, usa `L` para asientos libres y `X` para asientos ocupados.

### 3. Reservar asiento

La funcion `reservarAsiento` marca un asiento como ocupado cuando estaba disponible. Si el asiento ya estaba reservado, muestra un mensaje indicandolo.

### 4. Contar asientos

La funcion `contarAsientos` recorre toda la sala y devuelve cuántos asientos estan libres y cuántos ocupados. Sirve para llevar control del estado general de la sala.

### 5. Cancelar reserva

La funcion `cancelarReserva` libera un asiento previamente ocupado, cambiando su estado nuevamente a disponible.

### 6. Buscar asientos consecutivos

La funcion `buscarAsientosConsecutivos` recorre la sala para detectar dos asientos libres uno al lado del otro. Es util cuando se necesita reservar lugares contiguos.

### 7. Interfaz visual de reservas

En `src/index.html` se implementa una version grafica del sistema. Cada asiento se dibuja como un boton y cambia de color segun su estado:

- libre
- ocupado
- seleccionado

### 8. Confirmar reserva desde la interfaz

La interfaz permite seleccionar uno o varios asientos y luego confirmarlos. Los asientos seleccionados pasan a estado ocupado y el sistema muestra un mensaje con la cantidad confirmada.

### 9. Cancelar seleccionados

Existe un control para quitar todas las selecciones actuales antes de confirmar la reserva. Esto devuelve los asientos a estado libre.

### 10. Cancelar una reserva puntual

La interfaz permite escribir fila y columna para liberar un asiento especifico. Tambien contempla el caso en que el asiento ya este libre o solo estuviera seleccionado.

### 11. Buscar dos asientos consecutivos en pantalla

Desde la interfaz se puede ejecutar una busqueda automatica de dos asientos libres consecutivos. Si se encuentran, el sistema los resalta como seleccionados.

### 12. Reiniciar la sala

La opcion de reinicio restaura toda la sala a su estado inicial, dejando todos los asientos libres.

## Resumen

Este proyecto resuelve el problema de gestion de asientos de cine en dos niveles: una logica base en TypeScript y una experiencia interactiva en navegador. Eso permite practicar estructuras de datos, recorridos de matrices, validaciones y manipulacion del DOM en un mismo ejercicio.
