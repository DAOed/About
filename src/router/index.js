import Vue from "vue"
import VueRouter from "vue-router"
import Landing from "../views/Landing/Index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
    meta: {
      title: "The Decentralized, Autonomous and Decentralized Internet - Daoed",
      metaTags: [
        {
          name: "description",
          content: "The decentralized Internet is here, join Daoed to make history!"
        },
        {
          property: "og:description",
          content: "The decentralized Internet is here, join Daoed to make history!"
        }
      ]
    }
  },
  {
    path: "/donate",
    name: "donate",
    component: () => import(/* webpackChunkName: "donate" */ "../views/Donate.vue"),
    meta: {
      title: "Donate - Daoed",
      metaTags: [
        {
          name: "description",
          content: "Support our work, we accept Bitcoins, Bitcoin Cash and Ethereum!"
        },
        {
          property: "og:description",
          content: "Support our work, we accept Bitcoins, Bitcoin Cash and Ethereum!"
        }
      ]
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {
      title: "Contact - Daoed",
      metaTags: [
        {
          name: "description",
          content: "Its a large yet empty world, we'd like to hear from you."
        },
        {
          property: "og:description",
          content: "Its a large yet empty world, we'd like to hear from you."
        }
      ]
    }
  },
  {
    path: "/media",
    name: "media",
    component: () => import(/* webpackChunkName: "media" */ "../views/Media.vue"),
    meta: {
      title: "Media assets - Daoed",
      metaTags: [
        {
          name: "description",
          content: "Daoed brand assets."
        },
        {
          property: "og:description",
          content: "Daoed brand assets."
        }
      ]
    }
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import(/* webpackChunkName: "terms" */ "../views/Terms.vue"),
    meta: {
      title: "Terms of Service - Daoed",
      metaTags: [
        {
          name: "description",
          content: "We serve with good intent."
        },
        {
          property: "og:description",
          content: "We serve with good intent."
        }
      ]
    }
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import(/* webpackChunkName: "privacy" */ "../views/Privacy.vue"),
    meta: {
      title: "Privacy policy - Daoed",
      metaTags: [
        {
          name: "description",
          content: "The privacy policy for the decentralized Internet."
        },
        {
          property: "og:description",
          content: "The privacy policy for the decentralized Internet."
        }
      ]
    }
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
