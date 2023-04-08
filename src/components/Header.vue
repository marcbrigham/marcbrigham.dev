<template>
	<header class="s-header flex bg-dark-green">
        <div class="max-w-100 s-header__logo flex-1">
            <a href="/">Marc Brigham</a>
        </div>
        <MainNavigation />
    </header>
</template>

<script>
import { computed } from 'vue'
import MainNavigation from '@/components/MainNavigation.vue'
export default {
    components: {
        MainNavigation
    },

    setup() {
        const logoUrl = computed(() => {
            return `../src/assets/images/logo.svg`;
        })
        return{ logoUrl }
    }
}

</script>

<style lang="scss">
    @import '../assets/scss/header.scss';
</style>
