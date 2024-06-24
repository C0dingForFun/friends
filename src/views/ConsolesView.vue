<template lang="">
    <h1>Gaming Consoles</h1>
    <card-comp v-for="consoles in displayConsoles()" :key="consoles">
         <template #cars>
            {{consoles}}
        </template>
    </card-comp>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
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
    },
    components:{
        CardComp
    }
}
</script>
<style lang="">
    
</style>