import Image from "next/image"

const MovieDetails = async ({params}) => {
    const {movie} = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return (
    <div>
        <h1 className="text-2xl m-2">{res.title}</h1>
        <h3 className="m-2" >{res.runtime} min</h3>
        <h3 className="text-blue-500 m-2">{res.release_date}</h3>
        <h3 className="bg-green-500 inline-block rounded p-1 m-2">{res.status}</h3>
        <Image className="m-2" src={'https://image.tmdb.org/t/p/original'+res.poster_path} height={250} width={300}/>
        <p className="m-2">{res.overview}</p>
    </div>
  )
}

export default MovieDetails