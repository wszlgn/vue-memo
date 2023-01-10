<template>
  <div class="head">
    <input type="text" placeholder="请输入你的任务目标，按回车键生成!"  @keyup.enter="addItem" />
  </div>
</template>

<script>
export default {
    name: 'MyHead',
    data() {
      return {
      
      }
    },
    props: ["recive"],
    methods: {
     addItem(e) {
        const date = Date.now();
        const todoObj = {
          id: `${date}`,
          done: false,
          thing: e.target.value,
        };
        this.recive(todoObj);
        e.target.value = '';
     },
     
    },
};
</script>

<style scoped>
@import url("../assets/css/common.css");

.head {
  width: 100%;
  height: 40px;
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
}

.head input {
  flex: 1;
  height: 30px;
  color: var(--text-color);
  margin: var(--side-margin) var(--side-margin) 0 var(--side-margin);
}
</style>