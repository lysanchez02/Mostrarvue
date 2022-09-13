<template>
    <div>
        <form action="">
            <p>
                <label for="">Id</label>
                <input type="text" class="form-control" name="id" id="id" v-model="post.id">
            </p>
            <p>
                <label for="">Titulo</label>
                <input type="text" class="form-control" name="titulo" id="titulo" v-model="post.titulo">
            </p>
            <p>
                <label for="">Descripcion</label>
                <input type="text" class="form-control" name="Descripcion" id="Descripcion" v-model="post.Descripcion">
            </p>
            <p>
                <label for="">Id Usuario</label>
                <input type="text" class="form-control" name="idUsuario" id="idUsuario" v-model="post.idUsuario">
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
    
export default{
    name:"EditarP",
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
    mounted:function(){
        let id=this.$route.params.id
        axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(data=>{
            this.post.id=data.data.id
            this.post.idUsuario=data.data.userId
            this.post.titulo=data.data.title
            this.post.Descripcion=data.data.body

        })
    },
}
</script>