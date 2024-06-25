<script setup>
import { ref } from 'vue'

import Select from '@/components/Select.vue'
import DropDownBtn from '../components/DropDownBtn.vue'
import AppCheckbox from '../components/AppCheckbox.vue'
import Genre from '../components/Genre.vue'
import RangeSlider from '../components/RangeSlider.vue'

import { SortByOptions, showMeOptions, releaseTypeOptions, genreOptions } from '@/data/options'
import AppRadio from '../components/AppRadio.vue'

const sortByOptionSelected = ref(SortByOptions[0])
const showMeOptionSelected = ref(showMeOptions[0].value)
const releaseTypeOptionsSelected = ref(releaseTypeOptions.map((e) => e.value))
const genreOptionsSelected = ref(genreOptions.map((e) => e.value))
</script>

<template>
  <div class="movies">
    <div class="content movies-content">
      <div class="header">
        <h2 class="header__title">Popular Movies</h2>
      </div>
      <div class="body">
        <div class="left-col">
          <DropDownBtn :open="false">
            <div class="group">
              <div class="group-header">
                <span class="group-header__title">Sort Results By</span>
              </div>
              <div class="group-body">
                <Select
                  :options="SortByOptions"
                  :selected="sortByOptionSelected"
                  type="small"
                  @change="(selected) => (sortByOptionSelected = selected)"
                ></Select>
              </div>
            </div>
          </DropDownBtn>

          <DropDownBtn :open="true">
            <div class="group">
              <div class="group-header">
                <span class="group-header__title">Show Me</span>
              </div>
              <div class="group-body">
                <AppRadio
                  v-for="{ id, name, value } in showMeOptions"
                  :key="id"
                  v-model="showMeOptionSelected"
                  :name="name"
                  :value="value"
                ></AppRadio>
              </div>
            </div>

            <div class="group">
              <div class="group-header">
                <span>Release Dates</span>
              </div>
              <div class="group-body">
                <div class="checkboxs">
                  <AppCheckbox
                    v-for="{ id, name, value } in releaseTypeOptions"
                    :key="id"
                    v-model="releaseTypeOptionsSelected"
                    :name="name"
                    :value="value"
                  ></AppCheckbox>
                </div>

                <div class="datepickers">
                  <label for="from">from</label>
                  <input type="date" name="" id="from" />
                  <label for="to">to</label>
                  <input type="date" name="" id="to" />
                </div>
              </div>
            </div>

            <div class="group">
              <div class="group-header">
                <span>Genres</span>
              </div>
              <div class="group-body">
                <Genre
                  v-for="{ id, name, value } in genreOptions"
                  :key="id"
                  :name="name"
                  :value="value"
                  v-model="genreOptionsSelected"
                ></Genre>
              </div>
            </div>

            <div class="group">
              <div class="group-header">
                <span>Language</span>
              </div>
              <div class="group-body">
                <!-- <Select></Select> -->
              </div>
            </div>

            <div class="group">
              <div class="group-header">User Score</div>
              <div class="group-body">
                <RangeSlider></RangeSlider>
              </div>
            </div>

            <div class="group">
              <div class="group-header">Minimum User Votes</div>
              <div class="group-body">
                <RangeSlider></RangeSlider>
              </div>
            </div>

            <div class="group">
              <div class="group-header">Runtime</div>
              <div class="group-body">
                <RangeSlider></RangeSlider>
              </div>
            </div>

            <div class="group">
              <div class="group-header">Keywords</div>
              <div class="group-body">
                <input type="text" placeholder="Filter by keywords..." />
              </div>
            </div>
          </DropDownBtn>

          <button type="button">Search</button>
        </div>

        <div class="right-col"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles/views/movies.css';
</style>
