import { VueQueryPlugin } from '@tanstack/vue-query'
import type { UserModule } from '@/types'

/**
 * See https://tanstack.com/query/v4/docs/vue/overview
 */
export const install: UserModule = ({ app }) => {
  app.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: 1000 * 60, // 1 minutes
        },
      },
    },
  })
}
