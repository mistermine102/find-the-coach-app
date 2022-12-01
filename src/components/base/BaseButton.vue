<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>

export default {
    props: ['mode']
}
</script>

<style scoped>

button {
    font-size: 1rem;
    border: none;
    background-color: rgb(46, 37, 178);
    padding: 0.6rem 1.4rem;
    color: white;
    border-radius: 2rem;
}

button:hover {
    background-color: rgb(0, 0, 147);
    color: white;
}

.alt {
    background: none;
    border: 1px solid rgb(46, 37, 178);
    color: rgb(46, 37, 178);
}

</style>