<template lang="">
    <h1>Gaming Consoles</h1>
    <card-comp v-for="consoles in displayConsoles()" :key="consoles">
         <template #consoles>
           <h2>{{consoles}}</h2> 
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
<style lang="">
    
</style>