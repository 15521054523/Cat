<template>
    <div>
        消息页
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    mounted() {
        this.setTabBar('message');
    },
    methods: {
        ...mapMutations({
            setTabBar: 'SET_TAB_BAR'    // 映射 this.setTabBar() 为 this.$store.commit('SET_TAB_BAR')
        })
    }
}
</script>
