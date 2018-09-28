<template>
  <div class="parent-comp">
    <h3>Parent And Child Comp</h3>
    <blog-post title="Journey with Vue!" author={fname: "John", lname: "Smith"} ></blog-post>
    <blog-post title="Angular is amazing!" author={fname: "Cindy", lname: "Smith"}></blog-post>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost'

export default {
  name: 'ParentAndChildComp',
  components: { BlogPost }
}
</script>
