import $ from 'jquery'
const sports = [
  {
    name: 'Football',
    bg_color: '#6bb46e',
    equipments: ['Ball', 'Football Shoes', 'Goalpost']
  },
  {
    name: 'Volleyball',
    bg_color: '#c30f42',
    equipments: ['Ball', 'Nets']
  },
  {
    name: 'Badminton',
    bg_color: '#2a82be',
    equipments: ['Shuttlecock', 'Nets', 'Racket']
  }
];

export default {
  name: 'App',
  data() {
    return {
      sportList: sports,
      selectedSport: {
        equipments: []
      },
      rectangleStyle: {}
    }
  },
  computed: {
    selectedEquipment() {
      return this.selectedSport.equipments.join(', ')
    }
  },
  methods: {
    changeRectangleBackground() {
      this.rectangleStyle = {
        backgroundColor: this.selectedSport.bg_color
      }
    },
    animateMeRectangle() {
      let activeRectanglePosition = $('#rectangle-' + this.selectedSport.name).position()
      $('#rectangle-me').animate({ top: activeRectanglePosition.top, left: activeRectanglePosition.left }, 1000);
    },
    onChangeSportItem() {
      this.changeRectangleBackground()
      this.animateMeRectangle()
    }
  }
}