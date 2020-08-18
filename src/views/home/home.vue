<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './children/home-swiper'
  import homeApi from 'network/home' 
  import RecommendView from './children/recommend-view'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    methods: {
      getHomeMultidata() {
        homeApi.getHomeMultidata().then(res=>{
          console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      }
    },
    created() {
      this.getHomeMultidata()
      console.log(this.banners)
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
