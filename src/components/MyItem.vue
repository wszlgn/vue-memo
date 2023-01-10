<template>
  <div>
    <label for="">
    <div class="seciton-item" >
      <div ref="MessageItem" class="section-left">
        <input type="checkbox" :checked="todo.done" @change="handleCheckbox(todo.id)" />
        <span v-show="!todo.isEdie">{{todo.thing}}</span>
        <input
          type="text"
          v-if="todo.isEdie"
          :value="todo.thing"
          ref="inputEdit"
          @blur="handerBlur(todo, $event)"
        />
      </div>
      <div class="section-right">
        <button class="btn-delete" @click="deleItem(todo.id)">删除</button>
        <button class="btn-edit" v-show="!todo.isEdie" @click="editItem(todo)">编辑</button>
      </div>
    </div>
  </label>
  </div>
</template>


<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheckbox(id) {
      this.$bus.$emit("changeCheckbox", id);
    },
    deleItem(id) {
      if (confirm("确定要删除吗！")) this.$bus.$emit("deleteItem", id);
    },
    editItem(todo) {
      if (todo.hasOwnProperty("isEdie")) {
        todo.isEdie = true;
      } else {
        this.$set(todo, "isEdie", true);
      }
      this.$nextTick(function() {
        this.$refs.inputEdit.focus();
      });
    },
    handerBlur(todo, e) {
      todo.isEdie = false;
      if (!e.target.value.trim())
        return alert("您好，你所输入的内容为空请重新输入！");
      this.$bus.$emit("updataTodo", todo.id, e.target.value);
    }
  },

  mounted() {}
};
</script>

<style>
@import url("../assets/css/common.css");
.section {
  margin-top: 30px;
  width: 100%;
  overflow: hidden;
}

.section input {
  cursor: pointer;
}
.section label {
  display: block;
  width: auto;
  margin: 0 var(--side-margin) 0 var(--side-margin);
}
.section .seciton-item {
  width: auto;
  height: 30px;
  margin: 0px 0px -1px 0px;
  font-size: var(--text-size);
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
}
.section .seciton-item:hover {
  background: var(--hover-bgc);
}
.section .seciton-item:hover button {
  display: block;
}
.section .seciton-item:last-child {
  margin: 0;
}
.section .section-left,
.section .section-right {
  flex: 1;
}
.section input {
  cursor: pointer;
  padding: 0;
}
.section .section-right {
  display: block;
}
.section .section-right button {
  border-radius: var(--border-radius);
  color: var(--buttonText-color);
  font-size: var(--text-size);
  margin-right: var(--side-margin);
  border: none;
  float: right;
  cursor: pointer;
  display: none;
}
.section .section-right .btn-edit {
  background-color: var(--button-bgcB);
}
.section .section-right .btn-delete {
  background-color: var(--button-bgcR);
}
</style>