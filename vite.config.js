import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const userComponents = [
            'User.vue',
            'UserHeader.vue',
            'UserProfile.vue',
            'UserOrder.vue',
            'UserOrderFooter.vue',
            'UserWishlist.vue',
            'UserWishlistFooter.vue'
          ];
          if (userComponents.some(name => id.includes(`/src/components/${name}`))) {
            return 'users';
          }
        }
      }
    }
  }
})