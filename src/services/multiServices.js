import axios from '../axios.js'

async function getTrend(time_window, language) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/${time_window}?language=${language}`
    )
    return Promise.resolve(data.results.slice(0, 10))
  } catch (error) {
    return Promise.reject(error)
  }
}

async function searchMulti(query, language) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${query.trim()}&include_adult=false&language=${language}&page=1`
    )
    return Promise.resolve(data.results.slice(0, 10))
  } catch (error) {
    return Promise.reject(error)
  }
}

export { getTrend, searchMulti }
