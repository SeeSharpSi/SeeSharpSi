<template>
    <div>
        <nav>
            <router-link class="route" to="/">Home</router-link>
            <router-link class="route" to="/about">About Me</router-link>
            <router-link class="route" to="/blog">Blog Posts</router-link>
            <router-link class="route" to="/links">Links</router-link>
            <router-link class="route" to="/files">Files</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    props: { },
    methods: { }
}
</script>
<style scoped>
body {
    margin: 0;
    padding: 0;
}
div {
    background-color: #3c3836;
    width: 100%;
    padding: 0;
}
nav {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    place-items: center;
    justify-content: space-around;
}
.route {
    text-decoration: none;
  text-align: center;
  width: 20vw; 
  padding-bottom: 2vh;
  padding-top: 2vh;
  /*justify-items: center; */
  color: aliceblue;
  font-weight:bolder;
}
nav > .route {
    
}
nav .route:hover {
    background-color: #3c3836; 
   transform: translate(0, 0.5vh);
   box-shadow: inset;
   color: #689d6a;
}
nav .route.router-link-active {
    background-color: #3c3836;
   color: #d79921;
}
</style>