# Typescript - SocketIO

Pequeña implementación de un chat utilizando Typescript y sockets.

## Inicio rápido

Simplemente clone este repositorio en su propia carpeta de proyecto. Y empieza a trabajar.

```bash
git clone https://github.com/NeftXx/typescript-socketio.git <MyProjectName>
cd <MyProjectName>
npm install
npm run dev
```

Si desea desconectarse de este repositorio en su propio repositorio, haga lo siguiente:

```bash
git remote remove origin
git remote add origin YOUR_REPO_URL
git push -u origin master
```

## Directorios

```bash
.
├── /node_modules/                    # Bibliotecas y utilidades de terceros
├── /dist/                            # Todos los archivos generados irán aquí y se ejecutarán desde esta carpeta
├── /src/                             # El código fuente de la aplicación
│   ├── /public/                      # Archivos estáticos de la aplicación
│   ├── /routes/                      # Rutas de la aplicación
│   ├── /views/                       # Vistas y plantillas de toda la aplicación
│   ├── app.ts                        # Clase donde se configura el servidor
│   ├── connector.ts                  # Conector de sockets
│   ├── index.ts                      # Archivo principal que inicia la aplicación
├── .gitignore                        # Archivos y carpetas ignorados por git
├── nodemon.json                      # Configuración de la biblioteca nodemon
├── package.json                      # La lista de bibliotecas y utilidades de terceros
├── README.md                         # Este archivo
└── tsconfig.json                     # Configuración de TypeScript
```

## Comandos importantes

- **npm run dev:** la aplicación inicia en modo de developer, abre http://localhost:3000
- **npm run build:** pone la compilación de los archivos TypeScript en **dist**. La carpeta incluirá todos los archivos necesarios.
- **npm start:** ejecuta el archivo dist/index.js.
