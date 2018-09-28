<template>
  <div class="blog-post">
    <p>Child Comp: {{ title }}</p>
    <span>FName: {{ author }} </span>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title', 'author' ]
}
</script>
