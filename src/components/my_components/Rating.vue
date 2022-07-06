<script>
</script>

<template>
<div v-for="heroe in favorites">
    <p>{{ heroe.name }}</p>
  </div>
  <div class="rating">
    <input type="radio" name="rating" id="r1" />
    <label for="r1"></label>

    <input type="radio" name="rating" id="r2" />
    <label for="r2"></label>

    <input type="radio" name="rating" id="r3" />
    <label for="r3"></label>

    <input type="radio" name="rating" id="r4" />
    <label for="r4"></label>

    <input type="radio" name="rating" id="r5" />
    <label for="r5"></label>
  </div>
</template>


<style lang="scss" scoped>
h1 {
  color: hsl(0, 0%, 100%);
}
@mixin star-rating(
  $filled-color: #f9bf3b,
  $empty-color: #f9bf3b,
  $size: 80px,
  $width: 400px
) {
  $star--filled: ★;
  $star--empty: ☆;
  width: $width;
  > * {
    float: right;
  }
  // optional initial pulse of stars
  @at-root {
    @keyframes pulse {
      50% {
        color: lighten($empty-color, 10%);
        text-shadow: 0 0 15px lighten($empty-color, 20%);
      }
    }
  }
  label {
    height: 40px;
    width: 20%;
    display: block;
    position: relative;
    cursor: pointer;
    @for $i from 5 through 1 {
      &:nth-of-type(#{$i}):after {
        $animation-delay: $i * 0.05s;
        animation-delay: $animation-delay;
      }
    }
    &:after {
      transition: all 0.4s ease-out;
      -webkit-font-smoothing: antialiased;
      position: absolute;
      content: '#{$star--empty}';
      color: $empty-color;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: $size;
      animation: 1s pulse ease;
    }
    &:hover:after {
      color: lighten($empty-color, 10%);
      text-shadow: 0 0 15px lighten($empty-color, 10%);
    }
  }
  input {
    display: none;
    &:checked {
      + label:after,
      ~ label:after {
        content: '#{$star--filled}';
        color: $filled-color;
        text-shadow: 0 0 20px $filled-color;
      }
    }
  }
}

.rating {
  margin: 50px auto;
  @include star-rating();
}

body {
  background-color: #111;
}
</style>