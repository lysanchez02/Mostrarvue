<template>
    <div>
        <b-button class="m-1" @click="NuevoP()" v-b-tooltip.hover title="Nuevo Post" variant="primary" ><b-icon icon="plus" aria-hidden="true"></b-icon>
        </b-button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>ID_USER</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="listaP in listaP" :key="listaP.id">
                    <td>{{listaP.id}}</td>
                    <td>{{listaP.title}}</td>
                    <td>{{listaP.body}}</td>
                    <td>{{listaP.userId}}</td>
                    <td>
                    <b-button class="m-1" @click="Eliminar()" v-b-tooltip.hover title="Eliminar" variant="danger" ><b-icon icon="trash" aria-hidden="true"></b-icon>
                    </b-button>
                    <b-button class="m-1" @click="EditarP(listaP.id)" v-b-tooltip.hover title="Editar" variant="success"><b-icon icon="pen" aria-hidden="true"></b-icon>
                    </b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name:'ListarPosts',
        data(){
            return{
                listaP:null,
            } 
        },
        methods: {
            NuevoP(){       
                this.$router.push("/NuevoP")         
            },
            Eliminar(id){
                alert('eliminar');
            },
            EditarP(id){
                //alert('Editar'+id);
                this.$router.push("/EditarP/"+id)
            },
        },
        component:{

        },
        computed:{

        },
        mounted:function(){
            axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
                this.listaP=data.data;

            });
        },
    }
</script>