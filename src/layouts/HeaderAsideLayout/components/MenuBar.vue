<template>
  <div class="menu">
    <div class="title">
    </div>
    <div class="content">
      <div class="list" v-for="(item,i) in menu" :key="item.name">
        <div class="word" @click="showHide(i)">
          <span class="menu-arrow" :class="item.show?'icon-arrow-down':'icon-arrow-right'"></span>
         <span>
           {{item.name}}
         </span>
        </div>
        <ul class="child" v-show="item.show" v-if="0<item.children.length">
          <router-link v-for="child in item.children" :to="item.path" :key="child.name">
            <li >
              <span class="circle"></span>
              <span>
                {{child.name}}
              </span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { asideMenuConfig } from '@/menuConfig'

export default {
  name: 'MenuBar',
  data () {
    return {
      menu: asideMenuConfig
    }
  },
  methods: {
    showHide (i) {
      this.$set(this.menu[i], 'show', !this.menu[i].show)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  background-color: #00142a;
  .title {
    position: absolute;
    width: 100%;
  }
  .content{
    .list{
      .word{
        height: 45px;
        background: #42485b;
        color: #FFFFFF;
        line-height: 45px;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        padding-left: 20px;
        .menu-arrow{
          &::after{
            color: #FFFFFF;
            margin: 0 5px 2px 0;
          }
        }
      }
      .child{
        li{
          background: #333743;
          height: 45px;
          line-height: 45px;
          padding-left: 45px;
          color: #FFFFFF;
          cursor: pointer;
          .circle{
            width: 6px;
            height: 6px;
            border-radius: 50px;
            display: inline-block;
            background: #FFFFFF;
            vertical-align: 3px;
            margin-right: 3px;
          }
        }
        .active{
          background: #00c1de;
        }
      }
    }
  }
}
</style>
