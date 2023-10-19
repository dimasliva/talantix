<script>
  export default{
    data(){
      return {
        values: [
          {val:'null', text: '', hide: false}, 
          {val:'first', text: 'Первый', hide: false}, 
          {val:'second', text: 'Второй', hide: false}, 
          {val:'third', text: 'Третий', hide: false}, 
          {val:'four', text: 'Четвёртый' , hide: false}
        ],
        cities: [
          {val:'null', text: '', hide: false}, 
          {val:'first', text: 'Первый', hide: false}, 
          {val:'second', text: 'Второй', hide: false}, 
          {val:'third', text: 'Третий', hide: false}, 
          {val:'four', text: 'Четвёртый' , hide: false}
        ],
        shops: [
          {val:'null', text: '', hide: false}, 
          {val:'first', text: 'Первый', hide: false}, 
          {val:'second', text: 'Второй', hide: false}, 
          {val:'third', text: 'Третий', hide: false}, 
          {val:'four', text: 'Четвёртый' , hide: false}
        ],
        employes: [
          {val:'null', text: '', hide: false}, 
          {val:'first', text: 'Первый', hide: false}, 
          {val:'second', text: 'Второй', hide: false}, 
          {val:'third', text: 'Третий', hide: false}, 
          {val:'four', text: 'Четвёртый' , hide: false}
        ],
        brigades: [
          {val:'null', text: '', hide: false}, 
          {val:'first', text: 'Первая', hide: false}, 
          {val:'second', text: 'Вторая', hide: false}, 
        ],
        city: "",
        shop: "",
        employee: "",
        brigade: "",

      }
    },
    methods: {
      setCookie(name,value,days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days*24*60*60*1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      },
      getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
              var c = ca[i];
              while (c.charAt(0)==' ') c = c.substring(1,c.length);
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
          }
          return null;
      },
      setBrigade() {
        let hour = new Date().getHours()
        if(hour >= 8 && hour < 20) {
          this.setCookie('brigade', 'first')
          this.brigades[2].hide =true
        } else {
          this.setCookie('brigade', 'second')
          this.brigades[1].hide =true
        }
        if(this.getCookie('brigade') === 'first') {
          this.brigade=this.getCookie('brigade')
        } else {
          this.brigade=this.getCookie('brigade')
        }
      },
      hideCity(value) {
        if(value!== 'null') {
          this.shops[1].hide=true
          this.shops[2].hide=true
        } else {
          this.shops[1].hide=false
          this.shops[2].hide=false
        }
        this.setCookie('city', value)
        console.log('value', value)
        this.city=value
      },
      hideShop(value) {
        if(value !== 'null') {
          this.employes[1].hide=true
          this.employes[2].hide=true
        } else {
          this.employes[1].hide=false
          this.employes[2].hide=false
        }
        this.setCookie('shop', value)
        this.shop=value
      },
      hideEmployee(value) {
        if(value !== 'null') {
          this.cities[1].hide=true
          this.cities[2].hide=true
        } else {
          this.cities[1].hide=false
          this.cities[2].hide=false
        }
        this.setCookie('employee', value)
        this.employee=value
      }
    },
    mounted() {
      this.setBrigade()
      this.hideCity(this.getCookie('city'))
      this.hideShop(this.getCookie('shop'))
      this.hideEmployee(this.getCookie('employee'))
      console.log(this.getCookie('shop'))
      
    },
    watch: {
      city() {
        this.hideCity(this.city)
      },
      shop() {
        this.hideShop(this.shop)
      },
      employee() {
        this.hideEmployee(this.employee)
      }
    },
  }
</script>

<template>
  <div>
    <label for="city">Города:</label>

    <select v-model="city">
      <option v-for="val in cities" :value="val.val" :class="{'hide': val.hide}">{{ val.text }}</option>
    </select> 
  </div>

  <div style="margin:10px 0px;">
    <label for="shop">Цех:</label>

    <select v-model="shop" id="shop">
      <option v-for="val in shops" :value="val.val" :class="{'hide': val.hide}">{{ val.text }}</option>

    </select> 
  </div>

  <div style="margin:10px 0px;">
    <label for="employee">Сотрудник:</label>

    <select v-model="employee" id="employee">
      <option v-for="val in employes" :value="val.val" :class="{'hide': val.hide}">{{ val.text }}</option>

    </select> 
  </div>

  <div style="margin:10px 0px;">
    <label for="brigade">Бригада:</label>

    <select id="brigade" v-model="brigade">
      <option v-for="val in brigades" :value="val.val" :class="{'hide': val.hide}">{{ val.text }}</option>
    </select> 
  </div>
</template>

<style scoped>
  .hide {
    display: none;
  }
</style>
