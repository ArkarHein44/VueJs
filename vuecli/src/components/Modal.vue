<template>
    <div>
        <h1 ref="headingtext">I'm Modal.</h1>
        <button @click="changeHeading">Change Heading</button>
    </div>
  
</template>

<script>
export default {
    methods:{
        changeHeading(){
            this.$refs.headingtext.textContent = "Hello, Everyone";
        }
    }
}
</script>

<style scoped>
    h1{
        color: aqua;
        font-style: normal;
    }
</style>