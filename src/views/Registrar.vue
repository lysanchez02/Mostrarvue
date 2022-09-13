<template>
    <div class="container d-flex justify-content-center">
        <b-form align-v="end" action="">
            <p>
            <label for="">Nombre:</label>
            <input type="text" v-model="nombre">                
            </p>
            <p>
            <label for="">DNI:</label>
            <input type="number" v-model="dni">                 
            </p>
            <p>
            <label for="">Correo:</label>
            <input type="email" v-model="correo">                
            </p>
            <p>
            <label for="">Codigo Postal:</label>
            <input type="text" v-model="codPostal">                
            </p>
            <p>
            <label for="">Genero:</label>
            <input type="text" v-model="genero">                
            </p>
            <p>
            <label for="">Telefono:</label>
            <input type="number" v-model="telefono">                 
            </p>
            <p>
            <label for="">Fecha de Nacimiento:</label>
            <input type="date" v-model="fechaNacimiento">                
            </p>
            <p>
            <label for="">Token:</label>
            <input type="text" v-model="token">                
            </p>
        </b-form>
    </div>        


</template>