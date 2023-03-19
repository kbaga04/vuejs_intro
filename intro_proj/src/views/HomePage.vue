<template>
    <div v-show="showAddTask">
      <add-task @adding-task="addTask" />
    </div>
    <add-tasks @toggle-reminder="toggleReminder" @delete-task="deletetask" :tasks="tasks" />
</template>

<script>
import AddTasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
    name: "HomePage",
    props: {
        showAddTask: Boolean,
    },
    components: {
        AddTask,
        AddTasks,
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
    async deletetask(id) {
      if(confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, 
        {
          method: 'DELETE'
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error: Task Deletion')
      }
    },
    async toggleReminder(id){
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
    },
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    async fetchTasks() {
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
  },
}

</script>