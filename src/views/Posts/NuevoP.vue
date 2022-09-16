<template>
    <div>
        <form action="">
            <p>
                <label for="">Id</label>
                <input type="text" class="form-control" name="id" id="id" v-model="id">
            </p>
            <p>
                <label for="">Titulo</label>
                <input type="text" class="form-control" name="titulo" id="titulo" v-model="titulo">
            </p>
            <p>
                <label for="">Descripcion</label>
                <input type="text" class="form-control" name="Descripcion" id="Descripcion" v-model="Descripcion">
            </p>
            <p>
                <label for="">Id Usuario</label>
                <input type="text" class="form-control" name="idUsuario" id="idUsuario" v-model="idUsuario">
            </p>
        </form>
        <div>
        <b-button @click="guardarP()" class="m-1" v-b-tooltip.hover title="guardar" variant="success" ><b-icon icon="save2" aria-hidden="true"></b-icon>Guardar
        </b-button>
        <b-button @click="salir()" class="m-1" v-b-tooltip.hover title="salir" variant="danger" ><b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>Salir
        </b-button>
</div>
    </div>
</template>
<script>
    import axios from 'axios';
        
    export default{
        name:"NuevoP",
        data(){
            return{
                post:{
                    'id':null,
                    'titulo':null,
                    'Descripcion':null,
                    'idUsuario':null,
                }
            }
        },
        methods:{
            guardarP(){
                axios.post("https://jsonplaceholder.typicode.com/posts/",this.post).then(data=>{
                this.$router.push("/ListarPosts")
            });
        
        
        },
            salir(){this.$router.push("/ListarPosts")},
        },
        mounted:function(){},
    }
    </script>