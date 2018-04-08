<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
      <input 
        type="checkbox"
        class="toggle"
        v-model="todo.completed"
      >
      <label>{{todo.content}}</label>
      <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
      todo: {
          type: Object,
          required: true,
      }
  },
  methods: {
      deleteTOdo() {}
  }
}
</script>

<style lang="less" scoped>
    .todo-item{
        position: relative;
        background-color: #ffffff;
        font-size: 24px;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        &:hover{
            .destory:after{
                content: 'x';
            }
        }
    }
    .des
    {
        height: 40px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none;
        outline: none;
        &:after{
            content: url('../../assets/images/round.svg');
        }
        &:checked:after{
            content: url('../../assets/images/done.svg');
        }
    }
    .destory{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 40px;

    }
</style>
