import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import { useInitialState } from "../MYHOOKS/useInitialState.js";


/*

En resumen useState nos devuelve un array con dos elementos, el primero es el valor de nuesro estado, la segunda es una funcion que nos permite actualizar ese valor.
El argumento que le enviamos es por defecto el valor del estado(initial state).

El hook useEffect es una funcion que nos permite ejecutar codigo cuando se monta, desmonta o actualiza un componente.
El primer argumento que recibe es una funcion que se ejecutará cuando React monte o actualice el componente,
esta funcion puede devolver otra funcion que se ejecuta cuando el componente se desmonte.
El segundo argumento es una array donde podemos especificar que propiedades deben cambiar
para que Reacr vuelva a llamar nuestro código. Por defecto, cuando no enviamos un segundo argumento,
React ejecutara useEffect cada vez que el componente o componente padre se actualice,
sin enviamos un array vacio la funcion solo se ejecuta al montar o desmontar el componente.

*/
const API = "http://127.0.0.2:3000/initalState"
const Home = () => {
  // aqui categorias sera una lista con los nombre de las categorias que tenemos dentro de nuestro json
  // aqui videos
  const [videos, categorias] = useInitialState(API)

  console.log(videos, categorias);
  return videos.length === 0 ? <h1>LOADING ...</h1> : (
    <div className="App" >
      <Search />
      {
        categorias.map(categoria => (
          // videos[categoria] corresponde a cada objeto con su respectiva categoria dentro del json
          videos[categoria].length > 0 && (
            <Categories key={Math.floor(Math.random() * 10000)} title={categoria}>
              <Carousel>
                {
                  // renderizamos cada objeto (video con sus descripciones) dentro del componente item
                  videos[categoria].map((video) => (
                    <CarouselItem key={video.id} {...video}>
                    </CarouselItem>
                  )
                  )
                }
              </Carousel>
            </Categories>
          )
        ))
      }
    </div >
  )
};

export default Home;
