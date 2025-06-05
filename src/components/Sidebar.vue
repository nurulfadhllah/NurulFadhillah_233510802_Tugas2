<template>
  <div class="sidebar">
  <h3 class="sidebar-title"><span>Pertemuan 2 dan 3</span></h3>
    <nav class="nav">
      <router-link v-for="item in menu" :key="item.name" :to="item.route" 
      class="nav-item" active-class="active">
        <span class="icon">{{ item.icon }}</span>
        <span class="label">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: 'Home', route: '/' },
        { name: 'Declarative Rendering', route: '/declarative-rendering' },
        { name: 'Attribute Bindings', route: '/attribute-bindings' },
        { name: 'Form Bindings', route: '/form-bindings' },
        { name: 'Conditional Rendering', route: '/conditional-rendering' },
        { name: 'List Rendering', route: '/list-rendering' },
        { name: 'Computed Property', route: '/computed-property' },
        { name: 'Lifecycle dan Template Refs', route: '/lifecycle' },
        { name: 'Watchers', route: '/watchers' }

      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 290px;
  background: linear-gradient(to bottom, #652937, #652937);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  min-height: 100vh;
  padding: 1rem 0.5rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar-title {
  border-bottom: 2px solid #ffffff;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  weight: bold;
  text-align: center;
}


.nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  transition: background 0.3s, transform 0.2s;
}

.nav-item:hover {
  background-color: #32141b;
  transform: translateX(4px);
}


.icon {
  margin-right: 0;
  font-size: 1.2rem;

}

.label {
  font-weight: 500;
 
}


.active {
  background-color:#c77588;
  color: white;
  font-weight: bold;
}
</style>