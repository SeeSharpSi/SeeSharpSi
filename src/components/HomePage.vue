<template>
    <div class="me">
        <h1 class="desc">Silas Tompkins</h1>
        <h3 class="desc">Software Engineer</h3>
    <img class="pfp" src="../assets/pfp.png" alt="me but 90s">
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    props: { },
    methods: { }
}
</script>
<style scoped>
    .pfp {
        aspect-ratio: 1;
        width:20vw;
    }
    div {
        margin: 0;
        padding-top: 5vh;
    }
    .me > .desc {
        margin: 0;
        padding: 0;
    }
    .pfp {
        border: 5px solid #458588;
        margin: 10px;
    }
</style>