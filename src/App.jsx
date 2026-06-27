import './App.css'


const text = "SHΔDØW•965"
const image = "https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg"
const object = {
  url: "https://animelib.org/ru/characters/97140--jin-woo-sung?seed=508d610631d838ab097262045f2291ff"
}


const colors = ["Червоний", "Синій", "Зелений"]




function App() {
  return (
    <>
   <h1>{text}</h1>
   <p>Ласкаво просимо до нашого сайту</p>
    <img src={image} alt="Sung-Jin-Woo"  width={200}/>
   <a href={object.url}>{object.url}</a>
    <p>{964+1}</p>

    <ul>{colors.map((color) => {
      return (
        <li>{color}</li>
      )
    })}</ul>
    </>
  )
}




export default App