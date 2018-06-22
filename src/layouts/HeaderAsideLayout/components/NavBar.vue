<template>
  <div class="navbar-common">
    <div class="logo">
      <span>控制台</span>
    </div>
    <div class="aside-right">
      <div class="login">
        <div class="name">
          <span class="words">管理员</span>
          <span class="icon-arrow-down"></span>
        </div>
        <ul class="template-adhere-top icon-arrow-up-line">
          <li>
            <span>退出</span>
          </li>
          <li>
            <span>退出</span>
          </li>
          <li>
            <span>退出</span>
          </li>
          <li>
            <span>退出</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout () {
      console.log('Logout')
    }
  }
}
</script>

<style lang="scss">
  .navbar-common{
    background: #373D41;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    &>div{
      display: inline-block;
      vertical-align: middle;
      padding: 10px 20px;
    }
    .logo{
      color: #317FFB;
      font-size: 20px;
    }
    .aside-right{
      float: right;
      .login{
        position: relative;
        width: 120px;
        cursor: pointer;
        height: 40px;
        .name{
          font-size: 18px;
          text-align: center;
          color: #999;
        }
        ul{
          width: 120px;
          top: 37px;
          display: none;
          li{
            line-height: 30px;
            cursor: pointer;
          }
        }
        &:hover{
          ul{
            display: block;
          }
        }
      }
    }
  }
</style>
