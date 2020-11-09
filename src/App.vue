<template>
  <div class="wrapper">
    <div class="container">
      <router-view></router-view>
    </div>
    <!--リンクタグを生成します。-->
    <footer>
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/skills">SKILLS</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </footer>
    <!--上記のリンクタグで設定したコンポーネントが表示される場所です。-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: "Ricty Diminished";
  src: local("Ricty Diminished");
}
* {
  margin: 0;
  box-sizing: border-box;
}

.wrapper {
  font-family: "Ricty Diminished", sans-serif;
  background-color: #fffbeb;
  color: #707070;
  min-height: 100vh;
  position: relative; /*←相対位置*/
}

footer {
  /*footerの装飾*/
  width: 100%;
  text-align: center;
  padding: 20px 0;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}

footer a {
  font-size: 2rem;
  color: #707070;
  text-decoration: none;
  text-align: center;
  padding: 30px 30px;
}
</style>
