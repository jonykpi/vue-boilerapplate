<template>
   <div>
       <p>Hello World! </p>
   </div>
</template>
<script>
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
        }
    }
</script>