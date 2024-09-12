import Ky from 'ky'
import { useAppAuth } from './auth'

/**
 * A ky instance with some default options set.
 *
 * Basically it will be mostly used for API calls to our API Gateway backend.
 *
 * Before each request it will check if the user is authenticated and if so it will
 * add the access token to the Authorization header.
 *
 * Now we can use this instance to make API calls :
 * ```
 * ky.get('/users').json()
 * ```
 */
export const api = Ky.create({
  // Here we set the base url for our API Gateway backend.
  prefixUrl: 'https://my-backend-base-url.com',
  headers: { 'Content-Type': 'application/json' },

  hooks: {
    beforeRequest: [
      async (request) => {
        const { tokens } = useAppAuth()
        const accessToken = tokens.value?.access

        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${tokens.value.access}`)
        }
      },
    ],
  },
})
