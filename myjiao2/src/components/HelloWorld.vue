<template>
  <div class="hello">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      @cancel='cancel()'
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
        currentDate: new Date()
    }
  },
  methods: {
    cancel(){
      console.log(3333)
    }
  },
}
</script>

</style>
