<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/Test">Test</router-link>
  </div>
  <router-view/>
</template>

<!--外部引入 样式包-->
<style lang="scss" >
@import "./src/styles/a1.scss";
</style>
