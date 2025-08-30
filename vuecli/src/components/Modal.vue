<template>
    <div class="backdrop active">
        <div class="modal info">
            <div class="modal-header">
                <h4>Alert</h4>
            </div>
            
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, molestiae necessitatibus. Pariatur explicabo eum assumenda aperiam perspiciatis natus facilis, quibusdam maxime ratione nemo eaque ut quia id! Veniam, quos doloremque!</p>
            </div>
            
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
    .backdrop{
        margin: 0;
        padding-top: 30px;

        background-color: hsla(0, 0%, 0%, 0.5);
        
        width: 100vw;
        height: 100vh;

        position: fixed;

        display: none;
    }
    
    .modal{
        
        margin: auto;

        width: 400px;
        border: 2px solid rgb(117, 117, 119);
        border-radius: 5px;
    }

    .modal-header{  
        padding: 10px 0;      
        text-align: center;
        border-bottom: 1px solid rgb(153, 146, 146);
    }

    h4{
        margin: 0;
        padding: 0;

        font-size: 2rem;
    }

    .modal-body{
        margin: 0;
        padding:5px 30px;
        text-align: justify;
    }

    p{
        font-size: 1rem;
    }

    .modal-footer{
        padding: 10px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;

        border-top: 1px solid rgb(153, 146, 146);
    }

    button{
        padding: 10px;
        margin: 5px;

        width: 100px;
        
        color: white;

        outline: none;
        border-radius: 5px;
        border: none;

        cursor: pointer;
    }

    .info{
        background-color: rgb(168, 215, 247);
    }

    .info h4, .info p{
        color: rgb(27, 47, 90);
    }

    .info button{
        background-color: rgb(52, 99, 185);
    }


    .success{
        background-color: rgb(137, 253, 152);
    }

    .success h4, .success p{
        color: rgb(32, 90, 27);
    }

    .success button{
        background-color: rgb(52, 185, 81);
    }

    .danger{
        background-color: rgb(243, 168, 168);
    }

    .danger h4, .danger p{
        color: rgb(90, 27, 27);
    }

    .danger button{
        background-color: rgb(185, 52, 52);
    }

</style>