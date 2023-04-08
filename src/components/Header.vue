<template>
	<header class="s-header">
        <div class="max-w-xs s-header__logo ">
            <a href="/"><img :src="`${logoUrl}`"></a>
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
