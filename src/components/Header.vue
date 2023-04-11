<template>
	<header class="s-header flex bg-white">
        <div class="container mx-auto">
            <div class="s-header__logo">
                <a href="/">Marc Brigham</a>
            </div>
            <MainNavigation />
        </div>
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
