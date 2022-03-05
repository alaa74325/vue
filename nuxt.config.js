export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'user-panel',
    script:[
      {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", crossorigin:"anonymous"},
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {rel:'stylesheet',href:'https://unicons.iconscout.com/release/v4.0.0/css/line.css'},
    {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Satisfy&display=swap'},
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,300;1,600&family=Roboto:ital,wght@0,300;0,400;0,700;1,300&display=swap' },
    { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }, 
    {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',integrity:'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',crossorigin:"anonymous"},
  ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    '~plugins/vuetify.js',
    
],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  axios: {
    baseURL: 'https://gp.maleskndrany.com/api/',
    credentials: true,
},
auth: {
    strategies: {
        local: {
            provider: 'local',
            endpoints: {
                login: {
                    url: '/login',
                },
                logout: {
                    url: '/logout',
                    method: 'get',
                },
                user: {
                    url: '/user',
                },
            },
            token: {
                property: '13|w4D8xVJw7yUOluuXQSDD7kD8nPMrBuugcvBoakWJ',
                maxAge: 365 * 24 * 60 * 60,
            },
            user: {
                property: false,
            },
        },
    },
    redirect: {
        login: '/auth',
        logout: '/auth',
        callback: '/dashboard',
        home: '/dashboard',
    },
},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },


  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vuetify']
  },
}
