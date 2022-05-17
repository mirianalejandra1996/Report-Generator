# Reports Generator 📄

Esta aplicación web se ha desarrollado con el [Framework de Vue](https://vuejs.org/) siguiendo un desafío técnico 🚀

El propósito es crear una interfaz que permita al usuario visualizar un listado de reportes que han sigo generados, y permita descargalos estos reportes en archivos de formato .xls (Excel) 📝

## Consideraciones

+ Desarrollar una aplicación SPA en Vue Js, la cual tenga como interfaz un botón para generar los reportes  de usuarios y una tabla que liste los reportes generados.

+ Considerar diseño responsivo y fidelidad con el diseño propuesto.

+ Cada vez  que se aprieta el botón  “generar reporte” se abrirá un formulario para crear un nuevo reporte de usuarios filtrado por fecha debiendo ingresar el “título del reporte” así como la “fecha inicio” y “fecha fin” basadas en la fecha de nacimiento (birth_date) de los usuarios.

    Considera todas las validaciones de seguridad que creas conveniente.

+ Publicarlo  como página estática en github, y simula la información  con data estática (el listado de reportes o usa localstorage, etc) para poder evaluar el acabado del diseño. (simula el back-end con data estática).

## Consideraciones para el desarrollo

Para el manejo de errores, se realizaron respectivas validaciones para que el usuario no pueda ingresar numeros en el primer campo,dejar ningún espacion vacío, ni que el valor de la fecha final sea menor que el valor de la fecha inicial. 

Se implementó un componente del paquete de [Vue 3 datepicker](https://vue3datepicker.com/) proporcionaba la funcionalidad, pero se realizaron ciertas modificaciones manipulando los estilos para que fuera lo más parecido posible al prototipo solicitado.

De igual manera, se le agregaron propiedades para que el formato fuera "DD/MM/YYYY", ya que inicialmente mostraba "MM/DD/YYYY, HH:MM"

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168896000-667051ac-ecb0-42e6-ab0c-c83bf80e8fba.png" ></div>

Por lo que finalmete se convirtió en el siguiente pickerdate

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168896457-90088c8a-a973-49ab-94e0-8ef49500a305.png" ></div>

En cuanto a los archivos de excel, estos se descargan haciendo click de "Descargar" a la fila correspondiente, y el nombre del archivo sería REPORT + Numero de id. (Ejemplo: REPORT0001)

## Final result of the project 🎯

Las vistas son las siguientes:

### Vista inicial sin registros

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168897420-84578356-8846-4f82-af55-c39756fd164d.png" ></div>

### Crear nuevo registro

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168897679-e768a418-2d69-43f5-ab88-90ca5d75ca14.png" ></div>

### Registros listados

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168898214-a27fadb5-111f-46cb-a794-32abe4a6fbd1.png" ></div>

### Reporte de Excel

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168897267-466d0ba3-c8ca-48e7-a307-9a8f266bd7f7.png" ></div>


----

This application was deployed in [Github Pages](https://github.com), in which you have access in the following [Link](https://mirianalejandra1996.github.io/Report-Generator/)

https://mirianalejandra1996.github.io/Report-Generator/

## Author 🎇

[🙋🏽‍♀️ Mirian Alejandra Arévalo](https://github.com/mirianalejandra1996).

📧 Contact me on: mirianalejandra1996@gmail.com