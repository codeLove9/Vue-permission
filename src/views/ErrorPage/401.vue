<template>
  <section class="page_401">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">401</h1>
            </div>

            <div class="contant_box_401">
              <h3 class="h2">Look like you're lost</h3>

              <p>你没有权限浏览此页面</p>

              <a href="" class="link_401">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
</script>

<style lang="less" scoped>
.page_401 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
  text-align: center;
}

.page_401 img {
  width: 100%;
}

.four_zero_four_bg {
  background: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif) no-repeat;
  background-size: 90%;
  height: 90vh;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_401 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_401 {
  margin-top: -50px;
}
</style>
