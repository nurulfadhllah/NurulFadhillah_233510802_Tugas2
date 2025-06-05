import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Declarative from '/src/views/Declarative.vue'
import Attribute from '/src/views/Attribute.vue'
import Form from '/src/views/Form.vue'
import Conditional from '/src/views/Conditional.vue'
import List from '/src/views/List.vue'
import Computed from '/src/views/Computed.vue'
import Lifecycle from '/src/views/Lifecycle.vue'
import Watchers from '/src/views/Watchers.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/declarative-rendering', name: 'Declarative Rendering', component: Declarative },
  { path: '/attribute-bindings', name: 'Attribute Bindings', component: Attribute },
  { path: '/form-bindings', name: 'Form Bindings', component: Form },
  { path: '/conditional-rendering', name: 'Conditional Rendering', component: Conditional },
  { path: '/list-rendering', name: 'List Rendering', component: List },
  { path: '/computed-property', name: 'Computed Property', component: Computed },
  { path: '/lifecycle', name: 'Lifecycle dan Template Refs', component: Lifecycle },
  { path: '/watchers', name: 'Watchers', component: Watchers }


]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;