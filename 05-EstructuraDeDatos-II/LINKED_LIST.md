# LISTAS ENLAZADAS

Las listas enlazadas son estructuras de datos comunes en programación que se utilizan para almacenar y organizar datos de manera dinámica. Hay diferentes tipos de listas enlazadas, y aquí te proporcionaré una breve descripción y ejemplos en JavaScript de cada una, junto con representaciones gráficas simplificadas.

-   Lista Enlazada (Singly Linked List):
```rust
Head -> Nodo1 -> Nodo2 -> Nodo3 -> null
```

-   Lista Enlazada Doble (Doubly Linked List):
```rust
null <- Nodo1 <-> Nodo2 <-> Nodo3 -> null
```

-   Lista Enlazada Circular (Circular Linked List):
```rust
Nodo1 -> Nodo2 -> Nodo3 -+
 ^                    |
 +--------------------+
```

-   Lista Enlazada Circular Doble (Doubly Circular Linked List):
```rust
null <- Nodo1 <-> Nodo2 <-> Nodo3 -+
 ^                               |
 +-------------------------------+
```
### El "-+" en el diagrama debería representar una conexión de vuelta desde el último nodo al primer nodo, indicando que la lista es circular. Esto significa que el último nodo de la lista enlaza de nuevo al primer nodo, creando un bucle en la estructura de datos.

### El "+-------------------------------+" es una representación visual del bucle en la lista.  

Estas representaciones muestran las conexiones entre los nodos de las diferentes listas enlazadas. Cada flecha (->) representa un enlace de un nodo al siguiente, y las dobles flechas (<->) en la lista enlazada doble indican que un nodo también tiene un enlace al nodo anterior. En el caso de las listas enlazadas circulares, la flecha que regresa al primer nodo indica que la lista forma un bucle.


## Lista Enlazada (Singly Linked List):

En una lista enlazada, cada nodo contiene un valor y un enlace al siguiente nodo.
La lista comienza con un nodo llamado "cabeza" y termina con un nodo que tiene un enlace nulo. Es una estructura lineal.

Ejemplo en JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Métodos para agregar, eliminar y buscar elementos.
}
```

## Lista Enlazada Doble (Doubly Linked List):

Similar a la lista enlazada, pero cada nodo tiene enlaces tanto al siguiente nodo como al nodo anterior. Permite recorrer la lista en ambas direcciones.
Ejemplo en JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Métodos para agregar, eliminar y buscar elementos.
}
```

## Lista Enlazada Circular (Circular Linked List):

Similar a la lista enlazada, pero el último nodo enlaza con el primer nodo en lugar de tener un enlace nulo. Forma un bucle.

Ejemplo en JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Métodos para agregar, eliminar y buscar elementos.
}
```
-   head (Cabeza): El head es una referencia al primer nodo de la lista. Puede ser útil tener esta referencia para comenzar las operaciones desde el principio de la lista, ya que la lista es circular, y el último nodo se enlaza de nuevo al primer nodo. Esto permite recorrer la lista completa desde el head.

-   tail (Cola): El tail es una referencia al último nodo de la lista. Tener un tail facilita la inserción rápida de elementos al final de la lista, ya que no es necesario recorrer toda la lista desde el head para encontrar el último nodo. Además, el tail es útil para eliminar el último nodo o para realizar operaciones específicas en el último nodo de la lista.

## Lista Enlazada Circular Doble (Doubly Circular Linked List):

Combina las características de la lista enlazada doble y la lista enlazada circular. Cada nodo tiene enlaces tanto al siguiente como al nodo anterior, y el último nodo enlaza con el primer nodo.

Ejemplo en JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Métodos para agregar, eliminar y buscar elementos.
}
```


### Destacar que las listas enlazadas circulares y las listas enlazadas circulares dobles no son tipos de grafos en sí mismas, pero pueden considerarse estructuras de datos relacionadas con los grafos en ciertos contextos.