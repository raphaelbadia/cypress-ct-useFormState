import React from 'react'
import { MyForm } from './MyForm'

describe('<MyForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyForm />)
  })
})