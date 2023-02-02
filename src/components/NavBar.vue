<template>
    <div>
        <nav>
         <a href="#">Home</a>
         <a href="#">Blog</a>
         <a href="#">Contacts</a>
          <a href="#">About</a>
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
    display: flex;
    place-content: center;
}

a {
  float: left;
  display: block;
  padding: 10px;
  padding-right: 100px;
  padding-left: 100px;
  justify-items: center;
  color: aliceblue;
}
nav a:hover {
    background-color: #3c3836; 
   transform: translate(0.1vh, 0.5vh);
   color: #689d6a;
   box-shadow: inset;
}
nav a:active {
    background-color: #3c3836; 
   transform: translate(0.1vh, 0.5vh);
   color: #d79921;
}
</style>