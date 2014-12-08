var  ContactosRouter = Backbone.Router.extend({

    initialize: function(opts) {
      this.agendaVista = opts.view
    },
    routes: {
        'orden/primero' : 'ir_primero',
        'orden/ultimo' : 'ir_ultimo',
        'orden/:num' : 'ir_n_esimo'
    },
    ir_primero: function() {
        console.log("ir primero")
        this.agendaVista.pos_actual = 0
    },
    ir_ultimo: function() {
        console.log("ir ultimo")
        this.agendaVista.pos_actual = -1
    },
    ir_n_esimo: function(num) {
        console.log("ir n-esimo: " + num)
        this.agendaVista.pos_actual = num
    }



})

