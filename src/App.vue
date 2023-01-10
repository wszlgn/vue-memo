<template>
    <div>
        <div id="box">
            <MyHead :recive="recive" />
            <MyList 
            :MessageList="MessageList"
             />
            <MyFloor 
            :MessageList="MessageList"
            :checkAll="checkAll"
            :deleteAll="deleteAll"
            />
        </div>
    </div>
</template>

<script>
import MyFloor from './components/MyFloor.vue';
import MyHead from './components/MyHead.vue';
import MyList from './components/MyList.vue';
export default {
    name: 'App',
    components: { 
        MyFloor,
        MyHead,
        MyList
    },
    data() {
        return {
            MessageList: [
                {
                    id: "001",
                    done: true,
                    thing: '抽烟',
                },
                {
                    id: "002",
                    done: false,
                    thing: '喝酒'
                },
                {
                    id: "003",
                    done: true,
                    thing: '跳楼',
                },
                { 
                    id: "004",
                    done: true,
                    thing: '打第五',
                },
                { 
                    id: "005",
                    done: false,
                    thing: '聊天',
                }
            ]
        }
    },
    methods: {
        recive(x) {
           this.MessageList.unshift(x);
        },
        changeCheckbox(id) {
            this.MessageList.forEach(e => {
                if (e.id === id) {
                    e.done = !e.done;
                }
            });
        },
        updataTodo(id, thing) {
            this.MessageList.forEach(e => {
                if (e.id === id) {
                    e.thing = thing;
                }
            });
        },
        deleteItem(id) {
            this.MessageList = this.MessageList.filter(e => e.id !== id);
        },
         checkAll(done) {
            this.MessageList.forEach(e => e.done = done);
        },
        deleteAll() {
            this.MessageList = this.MessageList.filter(e => e.done !== true);
        }
            
    },
    mounted() {
        this.$bus.$on('deleteItem', this.deleteItem);
        this.$bus.$on('changeCheckbox', this.changeCheckbox);
        this.$bus.$on('updataTodo', this.updataTodo);
    },
    beforeDestroy() {
        this.$bus.$off(deleteItem);
        this.$bus.$off(changeCheckbox);
        this.$bus.$off(updataTodo);
    }
}
</script>

<style>

#box {
    width: 500px;
    box-shadow: 3px 3px 15px rgba(121, 108, 175, 0.897);
    margin: 100px auto;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}

</style>