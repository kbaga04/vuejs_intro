<template>
    <header>
        <h1> {{ title }}</h1>
        <add-button v-show="homePage" @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'red' : 'green'" />
    </header>
</template>

<script>
import AddButton from './Button'

    export default {
        name: 'PageHeader',
        props: {
            title: String,
            showAddTask: Boolean
        },
        components: {
            AddButton,
        },
        computed: {
            homePage() {
                if(this.$route.path === '/') {
                    return true
                }
                else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>