# Blog-geek-firebase-functions
Firebase functions for sending messages after a creation on firestore

## 1. Crear una carpeta para alojar el código de las funciones
> mkdir [nombre_carpeta]
>
> cd [nombre_carpeta]


## 2. Instalar firebase-tools (En caso que ya se tenga instalado omitir esta parte)

En primer lugar se debe instalar firebase-tools 

>   npm install -g firebase-tools

Luego logearse con la cuenta en donde tienen el proyecto al cual van a implementar las funciones

>   firebase login

## 3. Iniciar el proyecto

>   firebase init

1. Seleccionan la opción de **Cloud Functions** o **Functions**
2. Seleccionan el proyecto
3. Seleccionen el lenguaje en el cual quieren escribir las funciones: **Typescript** o **Javascript**, en este caso seleccioné Javascript.
4. Si quieren validar su código con lint pueden hacerlo por buenas prácticas.
5. Instalar las dependecias


## 4. Crear las funciones.

Código en la carpeta functions/index.js


## 5. Despelgar las funciones 

> firebase deploy --only functions
