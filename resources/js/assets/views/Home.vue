<template>
    <div>
        <p>this is home page</p>
    </div>


</template>
<script>
    export default {

        mounted() {
            let title_el = document.querySelector("title");
            if(title_el)
                title_el.innerHTML = 'Home';

        },
        methods: {
            handleClick: function() {
                console.log(this.name)
            }
        }
    }
</script>