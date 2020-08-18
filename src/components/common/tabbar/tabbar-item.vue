<template>
  <div class="tabbar-item" @click="itemClick()">
    <div v-if="!isActive">
      <img :src="icon" alt="">
      <div :style="textStyle" :class="textClass">{{text}}</div>
    </div>
    <div v-else>
      <img :src="activeIcon" alt="">
      <div :style="activeTextStyle" :class="activeTextClass">{{activeText}}</div>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  data(){
    return {
      // show_src: this.src,
      // show_text: this.text,
    }
  },
  methods: {
    itemClick() {
      // if(this.isActive) {
      //   this.show_src = this.activeSrc
      //   this.show_text = this.activeText
      // }
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  props: {
    path: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    activeIcon: {
      type: String,
      default() {
        return this.icon
      }
    },
    text: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default() {
        return this.text
      }
    },
    textStyle: {
      type: String,
      default: ''
    },
    textClass: {
      type: String,
      default: ''
    },
    activeTextStyle: {
      type: String,
      default: 'color:red;'
    },
    activeTextClass: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    activeIconStyle: {
      type: String,
      default: ''
    },
    activeIconClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>