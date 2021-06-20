<template>
  <div class="auth-wrapper">
    <div class="auth-content">
      <div class="card">
        <div class="row align-items-center text-center">
          <div class="col-md-12">
            <div class="card-body">
              <img src="/icons/logo-dark.svg" alt="" class="img-fluid mb-4">
              <h4 class="mb-3 f-w-400">Signin</h4>
              <form @submit.prevent="login">
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <input type="text" v-model="email" class="form-control" placeholder="Email / Username">
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="fas fa-lock"></i>
                  </span>
                  <input type="password" v-model="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group text-left mt-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                      Save credentials
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-block btn-primary mb-4">Signin</button>
              </form>
              <p class="mb-0 text-muted">Don’t have an account? <nuxt-link to="/register" class="f-w-400">Signup</nuxt-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth',

  head: {
    title: 'Login'
  },

  data () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    async login () {
      if (this.email == null || this.email == '' || this.password == null || this.password == '') return false
      try {
        const login = await this.$axios.$post('/login', { email: this.email, password: this.password })
        if (login.status) {
          this.$store.dispatch('setUser', login.message)
          this.$store.dispatch('setToken', login.token)
          window.location.replace('/')
        }
      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>