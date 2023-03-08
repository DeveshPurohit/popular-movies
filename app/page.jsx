import { Montserrat } from 'next/font/google'
import Movie from './Movie'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
 
  return (
    <main
     className={montserrat.className}
     >
      <h1 className='text-2xl my-3'>Popular movies</h1>
      <div className='grid gap-16 grid-cols-fluid'>
      {
        res.results.map((movie)=>(
          <Movie id={movie.id} title={movie.title} release_date={movie.release_date} poster_path = {movie.poster_path} ratings={movie.vote_average}/>
        ))
      }
        </div>
    </main>
  )
}
