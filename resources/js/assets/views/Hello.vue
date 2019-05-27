<template>
   <div>
       <p>{{ trans.cat }}</p>
   </div>
</template>
<script>

    let trans = require('../lang/lang');
    export default {

        mounted() {
         
            let title_el = document.querySelector("title");
            if(title_el)
                title_el.innerHTML = 'Hello';
        },
        methods: {
            handleClick: function() {
                console.log(this.name)
            }
        },
        data() {

            return {

               trans: trans('de')

            }

        }
    }
</script>