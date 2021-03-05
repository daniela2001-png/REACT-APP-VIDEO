import React from "react"


export const useInitialState = (API) => {
    // definimos nuestra variable estado videos
    const [videos, setVideos] = React.useState({ mylist: [], trends: [], originals: [] })
    const [categorias, setCategoria] = React.useState([])
    console.log("SOY EL STATE VIDEOS")
    console.log(videos)
    console.log("SOY EL STATE CATEGORIAS")
    console.log(categorias)
    // dentro d eun useEffect ya que se ejecutara solo una vez con el array [] haremos nuestros gets
    React.useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => { 
                setVideos(data)
                setCategoria(Object.keys(data))
            })

    }, [])
    // console.log((videos));
    // siempre retornamos el estado
    return [videos, categorias];
}