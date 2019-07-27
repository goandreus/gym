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
        }
    },
})