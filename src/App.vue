<template>
  <div id="app">
    <button @click="topPage">
      ECサイトのトップページ
      </button>
    <button @click="manufactureListPage">
      商品一覧ページ
    </button>
  </div>
</template>
<script>
  export default {
    methods: {
      topPage(){
        this.$router.push({name: 'Home'})
      },
      manufactureListPage(){
        this.$router.push({name: 'ManufactureList'});
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
