import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const movies = await prisma.movies.findMany();
    return Response.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req, res) {  // Ensure `res` is passed into the function
  const { movieId, movie_name, cast, release_year } = req.body;

  try {
    const movieData = {
      name: req.body.movie_name,
      cast: req.body.cast,
      release_year: req.body.release_year
    };
    
    // And then in your Prisma create call, you would use movieData
    const movie = await prisma.movies.create({
      data: movieData,
    });
    res.json(movie);  // Use `res`, not `Response`
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });  // Use the `error` object to send back the message
  } finally {
    await prisma.$disconnect();
  }
}
