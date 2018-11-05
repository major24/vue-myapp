<template>
  <div class="blog-post-style">
    <p>Child Comp: {{ title }}</p>
    <span>FName: {{ author }} </span>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title', 'author']
}
</script>
