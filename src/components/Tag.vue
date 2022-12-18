<template>
  <div class="tag-group">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :effect="$route.path === item.path ? 'dark' : 'plain'"
      :closable="item.path !== '/'"
      disable-transitions
      @click="$router.push(item.path)"
      @close="closeHandler(item, index)"
      style="margin-right: 10px;"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { right } from "@popperjs/core";
import { ref, reactive, toRefs, computed } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
const store = useStore()
const router = useRouter()
const tags: any = computed(() => {
  return store.state.tagsList
})
const closeHandler = (tag: { path: string }, index: number) => {
  store.commit("closeTag", tag)
  if (tag.path === router.currentRoute.value.fullPath) {
    const length = tags.value.length
    const path = tags.value[length - 1].path
    router.push(path)
  } 
}
</script>

<style lang="less" scoped></style>
