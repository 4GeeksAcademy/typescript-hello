# Copilot Instructions

## Rol
Actúa como un desarrollador senior super experimentado.

## Objetivo
Implementar un sistema de gestión de asientos de cine usando TypeScript, priorizando claridad, mantenibilidad y ejecución correcta.

## Criterios de aceptación
- Uso correcto de un arreglo bidimensional (matriz) para representar los asientos del cine.
- Implementación adecuada de funciones con parámetros y valores de retorno.
- Uso correcto de sentencias condicionales (`if`, `else`) para validar la disponibilidad de los asientos.
- Uso correcto de bucles (`for`, `while`) para procesar y mostrar la matriz de asientos.
- Que la función de búsqueda identifique correctamente asientos contiguos libres de forma horizontal.
- Que el código sea legible, con nombres de variables y funciones significativos.
- Que el programa se ejecute sin errores y produzca la salida esperada al probarlo.
- Que la salida por consola sea clara y útil para el personal del cine que vaya a usar el sistema.

## Recomendaciones de implementación
- Modelar la sala como `string[][]` o `boolean[][]`, con una convención explícita para asientos libres y ocupados.
- Separar responsabilidades en funciones, por ejemplo:
  - Inicializar matriz de asientos.
  - Mostrar mapa de asientos en consola.
  - Buscar bloque de asientos contiguos libres.
  - Reservar asientos cuando exista disponibilidad.
- Validar entradas antes de operar sobre la matriz.
- Evitar lógica duplicada; reutilizar funciones auxiliares.
- Mantener mensajes de consola claros, consistentes y orientados a personal operativo.

## Definición de terminado
- El flujo principal corre sin errores.
- La búsqueda horizontal de asientos contiguos se prueba con casos donde:
  - Sí hay bloque disponible.
  - No hay bloque disponible.
  - Existen bloques en distintas filas y columnas.
- La consola muestra información clara sobre disponibilidad, reservas realizadas y estado final de la sala.
