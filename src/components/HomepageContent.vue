<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
          <p v-html="content.header_content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getContent } from '../../api/content-api';

export default {
  name: 'MainHeader',

  data() {
    return {
      content: '',
    };
  },

  methods: {
    getContent() {
      getContent().then((content) => {
        console.log(content);
        this.content = content;
      });
    },

  },

  beforeMount() {
    this.getContent();
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
