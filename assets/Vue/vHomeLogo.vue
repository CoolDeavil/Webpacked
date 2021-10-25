<template lang="html">
  <div class="flip3D">
    <div class="back">
      <div style="text-align: center">
        <div style="padding: 10px">
          <h1>Vue Component</h1>
          <a href="https://vuejs.org/" target="__BLANCK">The Progressive
JavaScript Framework</a>
        </div>
      </div>
    </div>
    <div class="front">
      <img src="images/Vue-logo.png" class="mIcon">
    </div>
  </div>
</template>

<script>
export default {
  name: "boxflip",
  mounted() {
    console.log("Vue Component mounted.");
  },
};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
.mIcon {
  width: 240px;
  height: 200px;
}
.flip3D {
  width: 240px;
  height: 200px;
  margin: 10px;
  float: left;
}
.flip3D > .front {
  position: absolute;
  -webkit-transform: perspective(600px) rotateY(0deg);
  transform: perspective(600px) rotateY(0deg);
  background: #727272;
  width: 240px;
  height: 200px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: -webkit-transform 0.5s linear 0s;
  transition: transform 0.5s linear 0s;
}
.flip3D > .back {
  position: absolute;
  -webkit-transform: perspective(600px) rotateY(180deg);
  transform: perspective(600px) rotateY(180deg);
  background: transparent;
  width: 240px;
  height: 200px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: -webkit-transform 0.5s linear 0s;
  transition: transform 0.5s linear 0s;
}
.flip3D:hover > .front {
  -webkit-transform: perspective(600px) rotateY(-180deg);
  transform: perspective(600px) rotateY(-180deg);
}
.flip3D:hover > .back {
  -webkit-transform: perspective(600px) rotateY(0deg);
  transform: perspective(600px) rotateY(0deg);
}
h1 {
  color: #41b883;
}
</style>
