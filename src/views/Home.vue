<script setup>
import { computed, ref } from 'vue'

import Switch from '../components/Switch.vue'
import MovieCard from '../components/MovieCard.vue'
import Scroller from '../components/Scroller.vue'
import TrailerCard from '../components/TrailerCard.vue'

import { trendingOptions, latestTrailerOptions, whatsPopularOptions } from '@/data/options'

const selectedTrendingOption = ref(trendingOptions[0])
const selectedLatestTrailerOption = ref(latestTrailerOptions[0])
const selectedWhatsPopularOption = ref(whatsPopularOptions[0])

const latestTrailersBackground = ref(
  'https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/oZDRuGHhe5uY8wBqFJcJZT9kdvJ.jpg'
)
</script>

<template>
  <div class="main">
    <div class="discovery">
      <div class="content discovery-content">
        <div class="title">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div class="search">
          <input
            type="text"
            class="search__field"
            placeholder="Search for a movie, tv show, person......"
            spellcheck="false"
          />
          <button type="button" class="btn search__btn">Search</button>
        </div>
      </div>
    </div>

    <div class="trending">
      <div class="trending-content">
        <div class="header">
          <h2 class="content__title">Trending</h2>
          <Switch
            :options="trendingOptions"
            v-model:selectedOption="selectedTrendingOption"
          ></Switch>
        </div>

        <div class="scroller-wrapper">
          <Scroller fade="true">
            <MovieCard class="ml-40"></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
          </Scroller>
        </div>
      </div>
    </div>

    <div class="latest-trailers">
      <div class="bg-img" :style="{ backgroundImage: `url(${latestTrailersBackground})` }">
        <div class="latest-trailers-content">
          <div class="header">
            <h2 class="header__title">Latest Trailers</h2>
            <Switch
              :options="latestTrailerOptions"
              v-model:selectedOption="selectedLatestTrailerOption"
              type="primary"
            ></Switch>
          </div>
          <div class="scroller-wrapper">
            <Scroller>
              <TrailerCard
                class="ml-40"
                @hover="(url) => (latestTrailersBackground = url)"
              ></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
              <TrailerCard></TrailerCard>
            </Scroller>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="trending">
    <div class="trending-content">
      <div class="header">
        <h2 class="content__title">What's Popular</h2>
        <Switch
          :options="whatsPopularOptions"
          v-model:selectedOption="selectedWhatsPopularOption"
        ></Switch>
      </div>

      <div class="scroller-wrapper">
        <Scroller fade="true">
          <MovieCard class="ml-40"></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </Scroller>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles/views/home.css';
</style>
