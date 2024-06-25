<template lang="">
    <h1>My Friends</h1>
    <card-comp>
         <template #friends>
            <div v-for="friend in displayFriends()" :key="friend" :style ="{borderColor: friend.gender === 'Male' ? 'gold' : 'green',borderWidth:'3px',borderStyle:'solid' }">
                <img :src='friend.profile'>
                <h3>Name: {{friend.firstName}}</h3> 
                <h3>Contact: {{friend.contactDetails}}</h3> 
            </div>
        </template>
    </card-comp>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    methods:{
        displayFriends(){
            return this.$store.state.friends
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
    img{
        width:300px;
        height:250px;
        border-radius:50%;
        margin-top:5px;
    }
</style>