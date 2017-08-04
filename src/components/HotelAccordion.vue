<template>
  <div class="hotels">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="accordion" role="tablist">
            <accordion v-for="(hotel, index) in hotels" :key="hotel.index" :hotel="hotel" :index="index"></accordion>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-right">
          <a href="" class="more-hotels">See all of our destination offers</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from './Accordion';
import { getHotels } from '../../api/hotels-api';

export default {
  name: 'HotelAccordion',

  components: {
    Accordion,
  },

  data() {
    return {
      hotels: '',
    };
  },

  methods: {
    getHotels() {
      getHotels().then((hotels) => {
        this.hotels = hotels;
        console.log(this.hotels);
      });
    },
  },

  beforeMount() {
    this.getHotels();
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/styles/variables/_includes.scss';

  .more-hotels {
    margin-top: 5px;
    margin-bottom: 20px;
  }
</style>
