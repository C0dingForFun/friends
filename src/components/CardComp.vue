<template>
    <div class="card">
        <slot name="cars"></slot>
    </div>
    <div class="card">
        <slot name="consoles"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card{
        margin:auto;
        width:300px;
        height:auto;
        border:solid 2px green;
    }
</style>