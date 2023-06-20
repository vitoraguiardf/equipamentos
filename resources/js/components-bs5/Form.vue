<template>
    <form>
        <slot>
        </slot>
    </form>
</template>

<script>
    export default {
        mounted() {
            console.log('Custom Form mounted.')
        }
    }
</script>