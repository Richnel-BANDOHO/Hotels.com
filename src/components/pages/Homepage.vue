<template>
    <div class="homepage">
        <main-header></main-header>

        <homepage-content></homepage-content>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="top-destinations">
                        <span>Top Destinations</span>
                    </h2>
                </div>
            </div>
        </div>
        
        <hotel-accordion></hotel-accordion>
    </div>
</template>

<script>
import MainHeader from '../MainHeader';
import HomepageContent from '../HomepageContent';
import HotelAccordion from '../HotelAccordion';

export default {
  name: 'homepage',

  components: {
    MainHeader,
    HomepageContent,
    HotelAccordion,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top-destinations {
    display: inline-block;
    font-weight: 900;
    margin-bottom: 2px;

    span {
        display: table-cell;
        white-space: nowrap;
        padding-right: 5px;
    }

    &:after {
        content: '';
        border-bottom: 2px solid red;
        display: table-cell;
        width: 100%;
        position: relative;
        top: -5px;
    }
  }
</style>
