<template>
  <div>
    <div class="pc-mob-header pc-header">
      <div class="pcm-logo">
        <img src="/icons/logo.svg" alt="" class="logo logo-lg">
      </div>
      <div class="pcm-toolbar">
        <a href="javascript:;" class="pc-head-link" id="mobile-collapse">
          <div class="hamburger hamburger--arrowturn">
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </a>
        <!-- <a href="javascript:;" class="pc-head-link" id="headerdrp-collapse">
          <i data-feather="align-right"></i>
        </a> -->
        <a href="javascript:;" class="pc-head-link" id="header-collapse">
          <i data-feather="more-vertical"></i>
        </a>
      </div>
    </div>
    <nav class="pc-sidebar">
      <div class="navbar-wrapper">
        <div class="m-header">
          <nuxt-link to="/" class="b-brand">
            <img src="/icons/logo.svg" alt="logo" class="logo logo-lg">
            <img src="/icons/logo-sm.svg" alt="logo" class="logo logo-sm">
          </nuxt-link>
        </div>
        <div class="navbar-content">
          <ul class="pc-navbar">
            <li class="pc-item">
              <nuxt-link to="/" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">home</i>
                </span>
                <span class="pc-mtext">Dashboard</span>
              </nuxt-link>
            </li>
            <li class="pc-item pc-caption">
              <label>Karyawan</label>
            </li>
            <li class="pc-item">
              <nuxt-link to="/karyawan" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">table_rows</i>
                </span>
                <span class="pc-mtext">List Karyawan</span>
              </nuxt-link>
            </li>
            <li class="pc-item">
              <nuxt-link to="/karyawan/tambah" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">business_center</i>
                </span>
                <span class="pc-mtext">Tambah Karyawan</span>
              </nuxt-link>
            </li>
            <li class="pc-item">
              <nuxt-link to="/karyawan/bulk" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">history_edu</i>
                </span>
                <span class="pc-mtext">Bulk Karyawan</span>
              </nuxt-link>
            </li>
            <li class="pc-item pc-caption">
              <label>Manajemen Waktu</label>
            </li>
            <li class="pc-item">
              <nuxt-link to="/manajemen/istirahat" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">watch_later</i>
                </span>
                <span class="pc-mtext">Waktu Istirahat</span>
              </nuxt-link>
            </li>
            <li class="pc-item">
              <nuxt-link to="/manajemen/kehadiran" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">assignment</i>
                </span>
                <span class="pc-mtext">Kehadiran</span>
              </nuxt-link>
            </li>
            <li class="pc-item">
              <nuxt-link to="/manajemen/acara" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">fact_check</i>
                </span>
                <span class="pc-mtext">Sususan Acara</span>
              </nuxt-link>
            </li>
            <li class="pc-item pc-caption">
              <label>Keuangan</label>
            </li>
            <li class="pc-item">
              <nuxt-link to="/keuangan/pengembalian" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">autorenew</i>
                </span>
                <span class="pc-mtext">Pengembalian</span>
              </nuxt-link>
            </li>
            <li class="pc-item">
              <nuxt-link to="/keuangan/pinjaman" class="pc-link">
                <span class="pc-micon">
                  <i class="material-icons-two-tone">request_page</i>
                </span>
                <span class="pc-mtext">Pinjaman</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="pc-header">
      <div class="header-wrapper">
        <div class="ml-auto">
          <ul class="list-unstyled">
            <li class="dropdown pc-h-item">
              <a class="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="/icons/avatar-2.jpg" alt="user-image" class="user-avtar">
                <span>
                  <span class="user-name">{{ user ? user.name : '' }}</span>
                  <span class="user-desc">Administrator</span>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right pc-h-dropdown">
                <a href="javascript:;" @click="commingSoon" class="dropdown-item">
                  <i class="material-icons-two-tone">account_circle</i>
                  <span>My Account</span>
                </a>
                <a href="javascript:;" @click="commingSoon" class="dropdown-item">
                  <i class="material-icons-two-tone">settings</i>
                  <span>Settings</span>
                </a>
                <a href="javascript:;" @click="logout" class="dropdown-item">
                  <i class="material-icons-two-tone">chrome_reader_mode</i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="pc-container">
      <div class="pcoded-content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'default',

  middleware: 'auth',

  computed: {
    ...mapGetters({
      'user': 'user'
    })
  },

  methods: {
    async logout () {
      const logout = await this.$store.dispatch('logout', true)
      if (logout) {
        window.location.replace('/login')
      }
    },

    commingSoon () {
      alert('Features comming soon!')
    }
  }
}
</script>
