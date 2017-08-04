<template>
  <article class="accordion__article" :class="{ active : isActive }" >
    <header class="accordion__article__header">
      <a href="#" v-bind:aria-expanded="isActive ? 'true' : 'false'" :aria-controls="'tab-' + index" @click="isActive = !isActive">
        <h3>{{ hotel.city }}, {{ hotel.country }}</h3>
        <span class="blurb">over {{ hotel.hotels.length }} hotels</span>
      </a>  
    </header>
    <section class="accordion__article__content" :aria-labelledby="'tab-' + index" :aria-hidden="isActive ? 'false' : 'true'" role="tabpanel">
      <ul class="list-group">
        <li class="list-group-item" v-for="h in limitBy(hotel.hotels, 5)">
          <a href="">
            <div class="row">
              <div class="col-xs-7">
                {{ h.name }}
                <span class="star-rating visible-xs" v-if="h.stars">
                  <span v-for="n in h.stars" class="star"></span>
                </span>
              </div>
              <div class="col-xs-5 details">
                <span class="star-rating hidden-xs" v-if="h.stars">
                  {{ h.stars }}
                </span>
                <span class="price" v-for="price in h.prices">
                  <span class="from">From</span>
                  <span class="was hidden-xs" v-if="price.was">
                    {{ price.was | currency('£', 0) }}
                  </span>
                  <span class="now">
                    {{ price.now | currency('£', 0) }}
                  </span>
                  <span class="was visible-xs" v-if="price.was">
                    {{ price.was | currency('£', 0) }}
                  </span>
                </span>
              </div>
            </div>
          </a>
        </li>
        <li class="list-group-item">
          <a href="" class="more-hotels">See all {{ hotel.hotels.length }} hotels in {{ hotel.city }}</a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Accordion',

  props: [
    'hotel',
    'index',
  ],

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    setDefaultPanel() {
      this.isActive = this.index === 0; // Sets first panel to be open
    },
  },

  mounted() {
    this.setDefaultPanel();
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/styles/variables/_includes.scss';

  .accordion__article {
    .accordion__article__header {
      background: $color-light-blue;
      display: inline-block;
      margin-top: 1px;
      width: 100%;
        
      a {
        display: block;
        padding: 1rem 1.5rem;

        &:hover, &:focus {
          text-decoration: none;
        }

        h3 {
          padding-left: 1.3rem;
          
          position: relative;
          margin: 0;

          &:before {
            content: '';
            background-image: url('../assets/spritesheet.png');
            width: 10px;
            height: 10px;
            background-position: -25px -5px;
            display: block;
            position: absolute;
            left: 0;
            top: 6px;
          }
        }

        .blurb {
          font-size: 1.5rem;
          font-weight: 900;
          color: $color-grey;
          line-height: 1;
          padding-left: 1.3rem;
          display: block;
        }
      }
    }
    .accordion__article__content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 300ms ease-in;

      .list-group {
        .list-group-item {
            border: 0;
            border-bottom: 1px solid $color-light-blue;
            width: 100%;
            display: inline-block;

            &:last-child {
              border-bottom: 0;
            }
        }
      }

      .star {
        background-image: url('../assets/spritesheet.png');
        width: 10px;
        height: 10px;
        background-position: -45px -5px;
        display: inline-block;
      }

      .details {
        color: $color-grey;
        text-align: right;

        .star-rating {
          position: relative;
          padding-right: 1.5rem;
          display: inline-block;
          margin: 0 0.1rem;

          &:after {
            content: '';
            background-image: url('../assets/spritesheet.png');
            width: 10px;
            height: 10px;
            background-position: -45px -5px;
            display: block;
            position: absolute;
            right: 0;
            top: 3px;
          }
        }

        .from {
          margin: 0 0.1rem;
        }

        .price {
          .was {
            margin: 0 0.1rem;
            text-decoration: line-through;
            font-weight: 700;
          }

          .now {
            color: $color-green;
            font-weight: 900;
            margin: 0 0 0 0.2rem;
          }
        }
      }
    }

    // Active state
    &.active {
      .accordion__article__content {
        height: 100%;
        max-height: 600px;
      }
    }
  }
</style>
