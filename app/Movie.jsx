'use client'

import Image from "next/image"
import Link from "next/link"

const Movie = ({id, title, release_date, ratings, poster_path}) => {
  return (
    <Link href={`/${id}`}>
    <div className="">
        <h1>{title}</h1>
        <h2 className="text-blue-500">{release_date}</h2>
        <h2 className="text-red-500">{ratings}</h2>
        <Image src={'https://image.tmdb.org/t/p/original'+poster_path} height={250} width={250}/>
    </div>
    </Link>
  )
}

export default Movie