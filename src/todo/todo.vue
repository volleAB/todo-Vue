<template>
  <section class="real-app">
      <input    
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下去要做什么"
        @keyup.enter="addTodo"
      >
      <item 
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"
        @del="deleteTodo"
      />
      <tabs
        :filter="filter" 
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearAllCompleted"
      />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs,
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
      addTodo(e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
        e.target.value = ''
      },
      deleteTodo(id){
        this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
      },
      toggleFilter(state) {
        this.filter = state
      },
      clearAllCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
  }
}
</script>

<style lang="less" scoped>
.real-app{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666666;
}
.add-input{
  width: 98%;
  height: 40px;
  padding: 4px 0 4px 10.5px;
  border: 1px solid #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  font-size: 24px;
}
</style>
