<template>
	<div>
		<Header />
	</div>
    <router-view name="home" />
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name:'HomeView',
    components: {
        Header
    },

    setup() {

    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Montserrat:wght@400;800;900&display=swap');
    @import '@/assets/scss/style.scss';
</style>
