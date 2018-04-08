<template>
  <section class="real-app">
      <input    
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下去要做什么"
        @keyup.enter="addTodo"
      >
  </section>
</template>

<script>
export default {
  methods: {
      addTodo() {}
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
  padding: 4px 0 4px 12px;
  box-shadow: 1px 1px 17px #888888;
  border: 1px solid #ffffff;
  position: relative;
  font-size: 24px;
  border-radius: 3px;
}
</style>
