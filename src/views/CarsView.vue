<template lang="">
     <h1>Cars</h1>
    <card-comp v-for="car in displayCars()" :key="car" >
         <template #cars >
            <div id="card">
                <h3> Make: {{car.make}}</h3> 
                <h3>Model: {{car.model}}</h3> 
                <h3>Year: {{car.year}}</h3> 
                <h3>Color: {{car.color}}</h3> 
                <h3>Price: {{car.price}}</h3> 
            </div>
        </template>
    </card-comp>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    components:{
        CardComp
    },
    methods:{
        displayCars(){
            return this.$store.state.cars
        },
    },
    computed:{
        getItems(){
            return this.$store.dispatch('getItems')
        },
    },
    mounted() {
        this.getItems
    }
}
</script>
<style scoped>
    #card{
        margin:1em;
        border:solid 2px black;
    }
</style>