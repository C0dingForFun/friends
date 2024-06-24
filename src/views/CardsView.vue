<template lang="">
    <div>
        
    </div>
    <card-comp>
        <h1>Cars:</h1>
        <template #make>
        </template>
        <template #model>
        </template>
        <template #year>
        </template>
        <template #colour>
        </template>
        <template #carPrice>
        </template><br><br>
        <h1>Gaming Consoles</h1>
        <template #name>
        </template>
        <template #manufacturer>
        </template>
        <template #release_year>
        </template>
        <template #storage>
        </template>
        <template #gamePrice>
        </template>
        <template #best_selling_game>
        </template>
        <template #default>
        </template>
    </card-comp>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    data(){

    },
    components:{
        CardComp
    }
}
</script>
<style lang="">
    
</style>