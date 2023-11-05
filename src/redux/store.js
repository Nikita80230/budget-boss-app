import { configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { authReducer } from './auth/authSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'sid'],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

export default store
export const persistor = persistStore(store)
