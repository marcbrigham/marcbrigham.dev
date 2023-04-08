<template>
	<nav class="s-navigation flex-1">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/work">Work</router-link></li>
            <li><router-link to="/about-me">About Me</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style lang="scss">
    @import '../assets/scss/mainNavigation.scss';
</style>
