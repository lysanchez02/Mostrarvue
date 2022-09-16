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
        <div>
        <b-button @click="guardar()" class="m-1" v-b-tooltip.hover title="guardar" variant="success" ><b-icon icon="save2" aria-hidden="true"></b-icon>Guardar
        </b-button>
        <b-button @click="salir()" class="m-1" v-b-tooltip.hover title="salir" variant="danger" ><b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>Salir
        </b-button>
</div>
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
    methods:{
        guardar(){
            let variable=this.$route.params.id
            axios.put("https://jsonplaceholder.typicode.com/posts/1"+variable,this.post).then(data=>{
            this.$router.push("/ListarPosts")
        });
    
    
    },
        salir(){this.$router.push("/ListarPosts")},
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