<template>
    <div class="form-group left">
        <h1>Editar</h1>
        <b-form align-v="end" action="">
            <p>
            <label for="">Nombre:</label>
            <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">                
            </p>
            <p>
            <label for="">DNI:</label>
            <input type="text" class="form-control" name="dni" id="dni" v-model="form.dni">                 
            </p>
            <p>
            <label for="">Correo:</label>
            <input type="text" class="form-control" name="correo" id="correo"  v-model="form.correo">                
            </p>
            <p>
            <label for="">Codigo Postal:</label>
            <input type="text" class="form-control" name="codPostal" id="codPostal"  v-model="form.codPostal">                
            </p>
            <p>
            <label for="">Genero:</label>
            <input type="text" class="form-control" name="genero" id="genero"  v-model="form.genero">                
            </p>
            <p>
            <label for="">Telefono:</label>
            <input type="text" class="form-control" name="telefono" id="telefono"  v-model="form.telefono">                 
            </p>
            <p>
            <label for="">Fecha de Nacimiento:</label>
            <input type="text" class="form-control" name="fechaNacimiento" id="fechaNacimiento" v-model="form.fechaNacimiento">                
            </p>
            <p>
            <label for="">Token:</label>
            <input type="text" class="form-control" name="token" id="token"  v-model="form.token">                
            </p>
        </b-form>
<div>
        <b-button class="m-1" v-b-tooltip.hover title="Guardar" variant="success" ><b-icon icon="save2" aria-hidden="true"></b-icon>Guardar
        </b-button>
        <b-button class="m-1" v-b-tooltip.hover title="Salir" variant="danger" ><b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>Salir
        </b-button>
</div>
    </div>        
</template>

<script>
    import axios from "axios";

    export default{
        name:"Editar",
        data(){
            return {
                form:{
                "nombre":null,
                "direccion":null,
                "dni":null,
                "genero":null,
                "token":null,
                "telefono":null,
                "codPostal":null,
                "fechaNacimiento":null,
   }
  }
 },
 components:{},
 methods:{},
 mounted:function(){
    let direccion="https://api.solodata.es/pacientes?id=454";
    axios.get(direccion).then(data =>{
        this.form.nombre = data.data[0].Nombre
        this.form.direccion = data.data[0].Direccion
        this.form.correo = data.data[0].Correo
        this.form.codPostal = data.data[0].CodigoPostal
        this.form.dni = data.data[0].DNI
        this.form.genero = data.data[0].Genero
        this.form.telefono = data.data[0].Telefono
        this.form.fechaNacimiento = data.data[0].FechaNacimiento
        this.form.token = data.data[0].token
    });
 }
}
</script>