<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5>List Karyawan</h5>
        </div>
        <div class="card-body">
          <div v-if="karyawans" class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(karyawan, index) in karyawans" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ karyawan.name }}</td>
                  <td>{{ karyawan.username }}</td>
                  <td>{{ karyawan.email }}</td>
                  <td>{{ customDateFormat(karyawan.created_at) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'List Karyawan'
  },

  data () {
    return {
      karyawans: null
    }
  },

  created () {
    this.getKaryawan()
  },

  methods: {
    async getKaryawan () {
      this.$store.dispatch('setLoading', true)
      try {
        const karyawan = await this.$axios.$get('/user')
        if (karyawan) {
          this.karyawans = karyawan.message
        }
        this.$store.dispatch('setLoading', false)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>