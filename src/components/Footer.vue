<script setup></script>

<template>
  <div class="footer">
    <nav class="content content--footer">
      <div class="left">
        <img src="../assets/images/logo2.svg" alt="tmdb logo" class="left__logo" />
        <RouterLink to="" class="link left__link">Hi bongbongdan!</RouterLink>
      </div>
      <div class="right">
        <div class="col">
          <h2 class="col__title">THE BASICS</h2>
          <ul>
            <li>
              <RouterLink to="" class="link col__link">About TMDB</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Contact Us</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Support Forums</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">API</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">System Status</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2 class="col__title">GET INVOLVED</h2>
          <ul>
            <li>
              <RouterLink to="" class="link col__link">Contribution Bible</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Add New Movie</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Add New TV Show</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2 class="col__title">COMMUNITY</h2>
          <ul>
            <li>
              <RouterLink to="" class="link col__link">Guidelines</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Discussions</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Leaderboard</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2 class="col__title">LEGAL</h2>
          <ul>
            <li>
              <RouterLink to="" class="link col__link">Term of Use</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">API Terms of Use</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">Privacy Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="link col__link">DMCA policy</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@import '../assets/styles/footer.css';
</style>
