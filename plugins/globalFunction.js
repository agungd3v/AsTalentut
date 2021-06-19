import Vue from 'vue'

Vue.mixin({
	methods: {
    customDateFormat (params) {
      const parseDate = new Date(params)
      let day = parseDate.getDate()
      let month = parseDate.getMonth() + 1
      const year = parseDate.getFullYear()
      const hour = parseDate.getHours()
      const minute = parseDate.getMinutes()
      return `
        ${day.toString().length <= 1 ? '0' + day : day}/${month.toString().length <= 1 ? '0' + month : month}/${year}
        \n${hour}:${minute}
      `
    }
	}
})