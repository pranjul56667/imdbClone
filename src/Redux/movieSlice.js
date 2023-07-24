import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  movies: [],
  error: '',
}


//const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=ebab107d0e771faee711646843039664&language=en-US`
 const URL = "https://api.themoviedb.org/3/movie/popular?api_key=ebab107d0e771faee711646843039664&language=en-US"

export const fetchMovies = createAsyncThunk('products/fetch', async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data.results;
});

const movieSlice = createSlice({
  name: "movie",
  initialState, 
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
      state.error = ''
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false
      state.movies = []
      state.error = action.error.message
    })
  }
})

export default movieSlice.reducer