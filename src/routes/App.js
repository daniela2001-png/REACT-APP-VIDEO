import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from '../components/Layout';
import Home from "../containers/Home"
import Login from "../containers/Login";
import NotFound from '../containers/NotFound';
import Register from "../containers/Register";


/*

Dentro de nuestro proyecto vamos a crear una carpeta llamada routes
donde vamos a ir añadiendo las rutas que necesitemos en la aplicación.

Las rutas que añadamos debemos definirlas con el componente Route y estas deben estar encapsuladas
dentro del componente BrowserRouter del paquete de react-router-dom.
Para definir una ruta con el componente Route debemos pasarle las props de:

    - path => para indicar la url.
    - exact => si queremos que funcione única y exactamente con la url que le digamos.
    - component => para indicarle el componente que va a renderizar.

    Atributos para los Route Objectos:

   > path: la ruta en la que se renderizará el componente en forma de cadena de texto
   > exact: un booleano para definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente. Eg: /index !== /index/all.
   > strict: un booleano para definir si queremos que el último slash sea tomado en cuenta para renderizar un componente. Eg: /index !== /index/.
   > sensitive: un booleano para definir si queremos distinguir entre minúsculas y mayúsculas, y tomar esto en cuenta para renderizar un componente. Eg: /index !== /Index
   > component: recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza).
   > render: recibe un método que retorna un componente. A diferencia de component no remonta el componente.

El Switch componente nos permite asegurarnos de que unicamnete se renderize el componente con su respectiva ruta o url
*/

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}>
                    </Route>
                    <Route exact path="/login" component={Login}>
                    </Route>
                    <Route exact path="/register" component={Register}>
                    </Route>
                    {/* si no hace match con ninguna de las anteriores rutas previas por default retornara la page error 404 not found! esta genial esto */}
                    <Route component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
