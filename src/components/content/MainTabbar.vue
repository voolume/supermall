<template>
  <tabbar>
    <tabbar-item path="/home" icon="img/tabbar/home.svg" active-icon="/img/tabbar/home_active.svg" text="首页"></tabbar-item>
    <tabbar-item path="/category" icon="img/tabbar/category.svg" active-icon="/img/tabbar/category_active.svg" text="分类"></tabbar-item>
    <tabbar-item path="/cart" icon="img/tabbar/shopcart.svg" active-icon="/img/tabbar/shopcart_active.svg" text="购物车"></tabbar-item>
    <tabbar-item path="/profile" icon="img/tabbar/profile.svg" active-icon="/img/tabbar/profile_active.svg" text="我的"></tabbar-item>
  </tabbar>
</template>

<script>
import {Tabbar,TabbarItem} from 'components/common/tabbar/index'
export default {
  data() {
    return {
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>