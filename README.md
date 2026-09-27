# 🎸 Carrito de Guitarras

Aplicación web de carrito de compras desarrollada con **React y TypeScript**, que permite visualizar un catálogo de guitarras y gestionar los productos seleccionados mediante un carrito de compras.

## ✨ Características

* Visualización de un catálogo de guitarras.
* Agregar guitarras al carrito.
* Aumentar y disminuir la cantidad de productos.
* Eliminar productos del carrito.
* Vaciar completamente el carrito.
* Límite de **1 a 5 unidades por producto**.
* Persistencia del carrito mediante `localStorage`.
* Gestión del estado del carrito mediante un `reducer`.
* Componentes reutilizables desarrollados con React.
* Tipado de datos mediante TypeScript.

## 🛠️ Tecnologías utilizadas

* **React** — Desarrollo de la interfaz de usuario.
* **TypeScript** — Tipado estático y definición de estructuras de datos.
* **Vite** — Herramienta de desarrollo y construcción del proyecto.
* **CSS** — Estilos y presentación de la interfaz.
* **LocalStorage** — Persistencia de los productos agregados al carrito.
* **ESLint** — Análisis y calidad del código.

## 📁 Estructura del proyecto

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Guitar.tsx
│   └── Header.tsx
│
├── data/
│   └── db.ts
│
├── reducers/
│   └── cart-reducer.ts
│
└── types/
    └── index.ts
```

### Components

Contiene los componentes principales de la interfaz:

* `Header.tsx` — Encabezado de la aplicación.
* `Guitar.tsx` — Componente encargado de mostrar la información de cada guitarra.
* `Footer.tsx` — Pie de página.

### Data

* `db.ts` — Contiene la información local utilizada para generar el catálogo de guitarras.

### Reducers

* `cart-reducer.ts` — Contiene la lógica para administrar el estado del carrito y las diferentes acciones que puede realizar el usuario.

### Types

* `index.ts` — Contiene las definiciones de tipos utilizadas en la aplicación.

## ⚙️ Funcionamiento

El catálogo de guitarras utiliza los datos almacenados en `data/db.ts`. Cada producto es representado mediante componentes de React.

La gestión del carrito se realiza mediante `cartReducer`, que permite ejecutar diferentes acciones:

* **Agregar productos:** añade una guitarra al carrito. Si el producto ya existe, aumenta su cantidad.
* **Aumentar cantidad:** incrementa la cantidad de un producto hasta un máximo de 5 unidades.
* **Disminuir cantidad:** reduce la cantidad hasta un mínimo de 1 unidad.
* **Eliminar producto:** elimina completamente una guitarra del carrito.
* **Vaciar carrito:** elimina todos los productos seleccionados.

Además, el carrito se almacena en `localStorage`, permitiendo conservar los productos seleccionados cuando el usuario recarga la página.

## 🚀 Instalación

Clona este repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresa al directorio del proyecto:

```bash
cd NOMBRE_DEL_PROYECTO
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en la URL indicada por Vite en la terminal.

## 👨‍💻 Autor

**Luis**