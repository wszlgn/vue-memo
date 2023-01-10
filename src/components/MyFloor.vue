<template>
  <div class="floor" v-show="All">
            <div class="floor-box">
                <div class="floor-left">
                    <label for="">
                        <input type="checkbox" v-model="isAll"><span>已完成 {{finishItem}} / 全部 {{All}}</span>
                    </label>
                </div>
                <div class="floor-right clearfloat">
                    <button @click="delteSelected">清除已完成任务</button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'MyFloor',
    props: ["MessageList", "checkAll", "deleteAll"],
    computed: {
        isAll: {
            get () {
                return this.finishItem === this.All && this.All > 0
            },
            set (value) {
                this.checkAll(value);
            }
        },
        All () { return this.MessageList.length },
        finishItem() {
            return this.MessageList.reduce((pre, current) => pre + (current.done ? 1 : 0) , 0);
        }
    },
    methods: {
        delteSelected() {
            if (confirm("你确定要删除所选！")) this.deleteAll();
        }
    },
   

}
</script>

<style scoped>
@import url("../assets/css/common.css");

.floor {
    width: 100%;
    height: 80px;
}
.floor .floor-box {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: var(--side-margin);            
    margin-right: var(--side-margin);            
}

.floor .floor-right  button {
    color: var(--buttonText-color);
    font-size: var(--text-size);
    border-radius: var(--border-radius);
    background-color: var(--button-bgcR);
    border: none;
    cursor: pointer;
    float: right;
}
.floor input {
    cursor: pointer;
}
.floor .floor-right {
    flex: 1;
}

.floor .floor-left {
    flex: 1;
}
</style>