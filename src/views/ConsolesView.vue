<template lang="">
    <h1>Gaming Consoles</h1>
    <card-comp v-for="consoles in displayConsoles()" :key="consoles">
         <template #consoles>
            <div id="card">
                <h3>Name: {{consoles.name}}</h3> 
                <h3>Manufacturer: {{consoles.manufacturer}}</h3> 
                <h3>Release Year: {{consoles.release_year}}</h3> 
                <h3>Storage: {{consoles.storage}}</h3> 
                <h3>Price: {{consoles.price}}</h3> 
                <h3>Best Selling Game: {{consoles.best_selling_game}}</h3> 
            </div>
        </template>
    </card-comp>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    methods:{
        displayConsoles(){
            return this.$store.state.gaming_consoles
        },
    },
    computed:{
        getItems(){
            return this.$store.dispatch('getItems')
        },
    },
    mounted() {
        this.getItems
    },
    components:{
        CardComp
    }
}
</script>
<style scoped>
    #card{
        margin:1em;
        border:solid 2px black;
    }
</style>