<template lang="">
     <h1>Cars</h1>
    <card-comp v-for="car in displayCars()" :key="car">
         <template #cars>
            {{car}}
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
        displayConsoles(){
            return this.$store.state.gaming_consoles
        }
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
<style lang="">
    
</style>