<template>
  <div id="app">
    <Header></Header>

    <router-view/>

    <div class="footer">
      <p>Copyright © 2018, BNK48 Office. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  background-color: #FEE7FF;
}

h1, h2, h3, p {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* FOOTER */
  .footer {
    float: left;
    width: 100%;
    min-height: 40px;
    text-align: center;
    padding: 10px 0;
    background-color: #c58ec3;
    font-size: .9em;
    line-height: 40px;
    font-weight: 500;
  }
/* --- END FOOTER --- */
</style>
