const app = new Vue({
    el:'#app',
    data: {
        titulo: 'Gym con vue',
        ejercicios: [],
        nuevoEjercicio: ''
    },
    methods: {
        agregarEjercicio: function(){
          this.ejercicios.push({
              nombre: this.nuevoEjercicio,
              estado: false
          });
            console.log(this.ejercicios)
            this.nuevoEjercicio = ''
            localStorage.setItem('gym-vue', JSON.stringify(this.ejercicios));
        },
        editarEjercicio: function(index){
            this.ejercicios[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.ejercicios));

        },
        eliminar: function(index){
            this.ejercicios.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.ejercicios));

        },
    },
    created:function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.ejercicios= [];
        }else{
            this.ejercicios=datosDB;
        }
    },
})