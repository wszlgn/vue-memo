<template>
  <div class="section">
        <transition-group 
        appear 
       
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInRight"
        leave-active-class="animate__backOutRight"
         >
        <Myitem 
        v-for="todoObj in MessageList"
         :key="todoObj.id"
         :todo="todoObj" />
        </transition-group>
  </div>
</template>

<script>
import Myitem from "./MyItem.vue";
import "animate.css";
export default {
  name: "MyList",
  props: ["MessageList"],
  components: {
    Myitem
  }
};
</script>

<style scoped>
@import url("../assets/css/common.css");

.section {
  margin-top: 30px;
  width: 100%;
  overflow: hidden;
}
.section input {
  cursor: pointer;
}

/* .transverse-enter-active {
  animation: switchItem 1s ease;
}
.transverse-leave-active {
  animation: switchItem 1s ease reverse;
}
@keyframes switchItem {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
} */
</style>