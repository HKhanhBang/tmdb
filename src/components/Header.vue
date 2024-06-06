<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import Select from './Select.vue'
import Avatar from './Avatar.vue'
import SpinnerLoading from './SpinnerLoading.vue'
import AppDropdown from './AppDropdown.vue'
import Propover from './Propover.vue'
import AppIcon from './AppIcon.vue'

import languages from '../data/languages'
import { getTrend, searchMulti } from '@/services/multiServices'
import getMovieTitle from '@/utils/getMovieTitle'

// States
const isHeaderShow = ref(true)
const lastScrollTop = ref(window.scrollY)

// Lang propover
const language = ref(
  localStorage.getItem('language') ? JSON.parse(localStorage.getItem('language')) : languages[0]
)
const langShortName = language.value.shortName
const isBtnChangeLangShow = ref(false)
const isChangeLangLoading = ref(false)

// Search bar propover
const isSearchBarShow = ref(false)
const searchText = ref('')
const isTrendingHeaderShow = ref(false)
const suggests = ref([])
const isSuggestsShow = ref(true)
const isSuggestLoading = ref(false)

// Directives
const vSuggest = {
  mounted: () => handleSuggest('')
}

// Methods
function handleChangeLanguage(newLanguage) {
  if (language.value.code !== newLanguage.code) {
    language.value = newLanguage
    isBtnChangeLangShow.value = true
  }
}

function applyLanguage() {
  isChangeLangLoading.value = true
  localStorage.setItem('language', JSON.stringify(language.value))
  setTimeout(() => {
    window.location.reload()
  }, 1000)
}

async function handleSuggest() {
  isSuggestLoading.value = true

  if (searchText.value === '') {
    isTrendingHeaderShow.value = true
    suggests.value = await getTrend('day', language.value.code)
  } else {
    isTrendingHeaderShow.value = false
    suggests.value = await searchMulti(searchText.value, language.value.code)
  }

  if (isSuggestsShow.value === false) {
    isSuggestsShow.value = true
  }

  isSuggestLoading.value = false
}

function handleRemoveSearchText() {
  if (searchText.value !== '') {
    searchText.value = ''
    handleSuggest()
  }
}

function handleHideHeader() {
  const scrollTop = window.scrollY
  if (scrollTop > lastScrollTop.value && scrollTop >= 256) {
    isHeaderShow.value = false
    isSuggestsShow.value = false
  } else if (scrollTop < lastScrollTop.value) {
    isHeaderShow.value = true
  }

  lastScrollTop.value = scrollTop
}

// Hooks
onMounted(() => {
  window.addEventListener('scroll', handleHideHeader)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleHideHeader)
})
</script>

<template>
  <div :class="['header', { 'header--hide': !isHeaderShow }]">
    <nav class="content content--header">
      <ul class="nav nav--left">
        <li>
          <RouterLink to="/" class="logo">
            <img src="../assets/images/logo1.svg" alt="tmdb logo" />
          </RouterLink>
        </li>
        <li>
          <AppDropdown modifier="navigation">
            <template #dropdown-title>
              <span>Movies</span>
            </template>
            <template #dropdown-content>
              <ul>
                <li>
                  <RouterLink to="/movies" class="link link--navigation-dropdown"
                    >Popular</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/movies/now-playing" class="link link--navigation-dropdown"
                    >Now Playing</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/movies/upcoming" class="link link--navigation-dropdown"
                    >Upcoming</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/movies/top-rated" class="link link--navigation-dropdown"
                    >Top Rated</RouterLink
                  >
                </li>
              </ul>
            </template>
          </AppDropdown>
        </li>
        <li>
          <AppDropdown modifier="navigation">
            <template #dropdown-title>
              <span>TV Shows</span>
            </template>
            <template #dropdown-content>
              <ul>
                <li>
                  <RouterLink to="/tv-shows" class="link link--navigation-dropdown"
                    >Popular</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/tv-shows/airing-today" class="link link--navigation-dropdown"
                    >Airing Today</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/tv-shows/on-the-air" class="link link--navigation-dropdown"
                    >On TV</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/tv-shows/top-rated" class="link link--navigation-dropdown"
                    >Top Rated</RouterLink
                  >
                </li>
              </ul>
            </template>
          </AppDropdown>
        </li>
        <li>
          <AppDropdown modifier="navigation">
            <template #dropdown-title>
              <span>People</span>
            </template>
            <template #dropdown-content>
              <ul>
                <li>
                  <RouterLink to="/movies/people" class="link link--navigation-dropdown"
                    >Popular People</RouterLink
                  >
                </li>
              </ul>
            </template>
          </AppDropdown>
        </li>
      </ul>
      <ul class="nav nav--right">
        <li>
          <Propover class="propover--language">
            <template #header>
              <button type="button" class="btn btn-open-language-propover">
                {{ langShortName }}
              </button>
            </template>
            <template #content>
              <h2 class="language-propover-title">Language Preferences</h2>
              <label for="language" class="language-propover-label">Language</label>
              <Select
                :options="languages"
                :selected="language"
                @change="handleChangeLanguage"
              ></Select>
              <button
                type="button"
                :class="[
                  'btn',
                  'btn-change-language',
                  { 'btn-change-language--loading': isChangeLangLoading }
                ]"
                @click="applyLanguage"
                v-show="isBtnChangeLangShow"
                :disabled="isChangeLangLoading"
              >
                <AppIcon
                  name="reload"
                  :width="14"
                  :height="14"
                  :margin-right="6"
                  color="#fff"
                  :loading="isChangeLangLoading"
                ></AppIcon>
                RELOAD PAGE
              </button>
            </template>
          </Propover>
        </li>
        <li>
          <!-- <RouterLink to="/login" class="link"></RouterLink> -->
          <Propover class="propover--account">
            <template #header>
              <Avatar
                src="https://secure.gravatar.com/avatar/8b54b5d7e3628bd7d9e3c35983bb0b81.jpg?s=32"
                @click="isAccountPropoverContentShow = true"
              ></Avatar>
            </template>
            <template #content>
              <div class="account-propover-header">
                <span class="account-propover-header__title">bongbongdan</span>
              </div>
              <div class="account-propover-body">
                <div class="account-propover-body-group">
                  <ul>
                    <li>
                      <RouterLink class="link link--account-propover" to="/">Lists</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="link link--account-propover" to="/">Ratings</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="link link--account-propover" to="/">Watchlist</RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="account-propover-body-group">
                  <RouterLink class="link link--account-propover" to="/">Logout</RouterLink>
                </div>
              </div>
            </template>
          </Propover>
        </li>
        <li>
          <button type="button" @click="isSearchBarShow = !isSearchBarShow" class="btn">
            <AppIcon
              name="search"
              color="#01B4E4"
              :width="30"
              :height="30"
              v-show="!isSearchBarShow"
            ></AppIcon>
            <AppIcon
              name="close"
              color="#fff"
              :width="30"
              :height="30"
              v-show="isSearchBarShow"
            ></AppIcon>
          </button>
        </li>
      </ul>
    </nav>
    <div class="search" v-if="isSearchBarShow">
      <div class="search-bar">
        <AppIcon name="search" color="#000" :width="20" :height="20"></AppIcon>
        <input
          type="text"
          class="search-bar__input"
          placeholder="Search for a movie, tv show, person..."
          v-model="searchText"
          @input="handleSuggest"
          spellcheck="false"
          v-focus
          v-suggest
        />
        <button
          type="button"
          @click="handleRemoveSearchText"
          v-show="!isSuggestLoading"
          class="btn btn-remove-search-text"
        >
          <AppIcon name="close" color="#495057" :width="16" :height="16"></AppIcon>
        </button>
        <SpinnerLoading
          v-show="isSuggestLoading"
          :width="16"
          :height="16"
          color="#8A8F94"
          :border-width="2"
        ></SpinnerLoading>
      </div>
      <div class="suggests" v-show="isSuggestsShow">
        <div class="top" v-show="isTrendingHeaderShow && isSuggestLoading !== true">
          <div class="top-content">
            <h2 class="top-content__title">
              <AppIcon name="trending" :width="22" :height="22" color="#000"></AppIcon>
              Trending
            </h2>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li class="item" v-for="suggest in suggests" :key="suggest.id">
              <RouterLink to="/" class="suggest link">
                <span class="suggest-content">
                  <AppIcon name="search" :width="16" :height="16" color="#000"></AppIcon>
                  {{ getMovieTitle(suggest) }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="no-results" v-show="suggests.length === 0 && isSuggestLoading !== true">
        <span class="no-results__title">NO RESULTS</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles/header.css';
</style>
