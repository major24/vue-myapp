<template>
  <div class="parent-comp">
    <h3>Parent And Child Comp</h3>
    <blog-post title="Journey with Vue!" author="John" ></blog-post>
    <blog-post title="Angular is amazing!" author="Cindy"></blog-post>
  </div>
</template>

<script>
import BlogPost from '@/components/parent-child/BlogPost'

export default {
  name: 'BlogPage',
  components: { BlogPost }
}
</script>
