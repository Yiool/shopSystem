<template>
    <div class="pagegation f-cb">
        <div class="prev-btn f-fl" @click="prev()">上一页</div>
        <ul class="page-number f-fl">
            <li v-bind:class="{active:nowIndex == item}" v-for="(item,index) in [1]" :key="index" @click="goto(item)">
                {{item}}
            </li>
            <li @click="showPrev()" v-if="nowIndex > 5">...</li>
            <li v-bind:class="{active:nowIndex == item}" v-for="(item,index) in pageArray" :key="index" @click="goto(item)">
                {{item}}
            </li>
            <li @click="showNext()" v-if="nowIndex < pagegationConfig.totalCount - 4">...</li>
            <li v-bind:class="{active:nowIndex == item}" v-for="(item,index) in [pagegationConfig.totalCount]" :key="index" @click="goto(item)">
                {{item}}
            </li>
        </ul>
        <div class="next-btn f-fl" @click="next()">下一页</div>
    
        <div class="total-page f-fl">总共{{pagegationConfig.totalCount}}页</div>
        <div class="jump-part f-fl" v-if="pagegationConfig.showPageGoto">
            <input type="text" v-model="gotoIndex" placeholder="">
            <button @click="jump()">go</button>
        </div>
    
    </div>
</template>

<script>
export default {
    props: {
        pagegationConfig: {
            type: Object,
        }
    },
    data() {
        return {
            nowIndex: 1,
            gotoIndex: ''
        }

    },
    methods: {
        /*点击页码跳转*/
        goto: function (index) {

            if (index === this.nowIndex) {
                return false;
            }
            this.nowIndex = index;
            this.pagegationConfig.handler(this.nowIndex);
        },
        /* 输入页码跳转 */
        jump: function () {
            if (this.gotoIndex == this.nowIndex || !this.gotoIndex || this.gotoIndex > this.pagegationConfig.totalCount) {
                return false;
            }
            this.nowIndex = this.gotoIndex * 1;
        },
        /*上一页*/
        prev: function () {
            /*如果当前页为第一页，直接返回*/
            if (this.nowIndex == 1) {
                return false;
            }
            this.nowIndex--;
            this.pagegationConfig.handler(this.nowIndex);
        },
        /*下一页*/
        next: function () {
            /* 如果当前页为最后一页，直接返回*/
            if (this.nowIndex == this.pagegationConfig.totalCount) {
                return false;
            }
            this.nowIndex++;
            this.pagegationConfig.handler(this.nowIndex);
        },

        /*点击前后省略号显示下一组页码*/
        showPrev: function () {
            this.nowIndex = this.pageArray[0] - 1;
            this.pagegationConfig.handler(this.nowIndex);
        },
        showNext: function () {
            this.nowIndex = this.pageArray[this.pageArray.length - 1] + 1;
            this.pagegationConfig.handler(this.nowIndex);
        }
    },
    computed: {
        pageArray: function () {
            var flag = this.pagegationConfig.totalCount;
            var nowIndex = this.nowIndex;
            if (nowIndex < 6) {
                return [2, 3, 4, 5];
            } else if (this.nowIndex > flag - 5) {
                return [flag - 4, flag - 3, flag - 2, flag - 1];
            } else {
                return [nowIndex - 2, nowIndex - 1, nowIndex, nowIndex + 1, nowIndex + 2];
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.pagegation {
    margin: 20px 20px;
    .prev-btn,
    .next-btn {
        cursor: pointer;
    }
    ul {
        display: inline-block;
        li {
            float: left;
            padding: 2px 5px;
        }
        .active {
            color: red;
        }
    }
    .total-page {
        margin-left: 20px;
    }
    .jump-part {
        input {
            vertical-align: middle;
            width: 40px;
            height: 20px;
            margin: 0 10px;
        }
        button {
            width: 40px;
            height: 20px;
            background-color: #038ae3;
            line-height: 20px;
            position: relative;
            top: 2px;
        }
    }
}
</style>
