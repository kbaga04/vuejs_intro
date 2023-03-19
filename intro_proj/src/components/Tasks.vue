<template>
    <div :key="task.id" v-for="task in tasks">
        <one-task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>
import OneTask from './Task'

export default {
    name: 'AddTasks',
    props: {
        tasks: Array,
    },
    components: {
        OneTask,
    },
    emits: ['delete-task', 'toggle-reminder'],
}

</script>