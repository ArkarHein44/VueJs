<template>
  <div class="container">
    
    <Modal ref="info" header="" content="" theme=""/>
    <Modal header="" content="" theme=""/>
    <Modal header="" content="" theme=""/>

    <div>
      <button class="btn btn-info" @click="infoModal">Info Modal</button>
      <button class="btn btn-success">Success Modal</button>
      <button class="btn btn-danger">Danger Modal</button>
    </div>
    
  </div>
  
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  components:{
    Modal
  },
  methods:{
    infoModal(){
      this.$refs.info.style.display = "none";
    }
  }
}
</script>

<style>
  .container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn{
    padding: 10px;
    margin: 10px;

    color: white;

    outline: none;
    border-radius: 5px;
    border: none;

    cursor: pointer;
  }

  .btn-info{
    background-color: rgb(52, 99, 185);
  }

  .btn-success{
    background-color: rgb(52, 185, 81);
  }

  .btn-danger{
    background-color: rgb(185, 52, 52);
  }
</style>