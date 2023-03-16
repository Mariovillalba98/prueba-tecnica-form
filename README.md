# Contact Form
Es una aplicación mobile creada en react native, que le permite al usuario cargar un formulario. El mismo es controlado, y todos sus campos son requeridos, además de que solamente se puede enviar un solo mensaje por cada dni. Esta información ingresada, es alojada en un backend ya deployado en railway, el cual nos permite realizar post y get usando esa misma URL.

[![app.png](https://i.postimg.cc/90YNNYyr/app.png)](https://postimg.cc/rRzJDWnk)

La aplicación valida que todos los datos ingresados sean correctos, y una vez que los errores desaparezcan, el botón de enviar se habilitará. Si al presionar este botón, el dni ingresado ya existe en la base de datos, el campo dni devolverá un error, y el dni ingresado deberá modificarse. Cuando todos los datos estén correctos, al darle "enviar", la app nos devolverá una alerta que indicará que el mensaje de contacto fue enviado de manera exitosa.

¿Cómo desplegar el proyecto?

Para desplegar el proyecto, primero se necesita tener instalado node, npm y expo en el ordenador, y Expo Go en tu teléfono.
Comando de instalación de expo: npm install -g expo-cli
Una vez clonado el repositorio, deberá abrir una terminal y pararse sobre la carpeta client/my-app/ y ejecutar npm install y npm start una vez que se complete la instalación. Luego, verá en la pantalla un codigo QR, el cual deberá escanear utilizando la aplicación Expo Go de su teléfono. Luego de haber realizado estos pasos, verá desplegada la interfaz en su celular, la cual ya podrá empezar a utilizar.
