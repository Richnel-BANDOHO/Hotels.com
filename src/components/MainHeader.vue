<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <h1>{{ content.company }} <span class="blurb">- {{ content.blurb }}</span></h1>
        </div>
      </div>
    </div>
  </header>
  
</template>

<script>
import { getContent } from '../../api/content-api';

export default {
  name: 'HomepageContent',

  data() {
    return {
      content: '',
    };
  },

  methods: {
    getContent() {
      getContent().then((data) => {
        console.log(data);
        this.content = data;
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
  @import '../assets/styles/variables/_includes.scss';
  
  h1 {
    .blurb {
      font-size: 1.8rem;
      color: $color-grey;
    }
  }
</style>
