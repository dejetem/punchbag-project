new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
            } else if ( this.health <= 50 ){
                style={backgroundColor: red}
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        },
    },
    computed: {
    }
});