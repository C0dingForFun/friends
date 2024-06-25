<template>
    <div class="card">
        <slot name="cars"></slot>
    </div>
    <div class="card">
        <slot name="consoles"></slot>
    </div>
    <div class="card">
        <slot name="friends"></slot>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card{
        margin:auto;
        width:400px;
        height:auto;
        display: flex;
        flex-direction: column;
        gap:1em;
        background-color: lightblue;
    }
</style>