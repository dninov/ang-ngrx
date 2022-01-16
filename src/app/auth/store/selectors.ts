import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {AuthStateInterface} from '../types/authState.interface'

export const authFeatureSelector = createFeatureSelector<
  // HELPER FUNCTION
  AppStateInterface, // GIVE GLOBAL STATE
  AuthStateInterface // GIVE THE STATE THAT WE SELECT
>('auth')

export const isSubmittingSelector = createSelector(
  //GET THE SUBMITTED PROPERTY IN COMPONENTS
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
)
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
)
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)
