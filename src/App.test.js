import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';
test("renders App without crashing", () => {
  render(<App />);
});
describe('Tests Form', ()=>{
test('user can fill out and submit form', async () => {
  //Arrange
  render(<ContactForm/>)

  //Act
  
  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/);
  const firstNameInput = screen.getByPlaceholderText(/Edd/i);
  const lastNameInput = screen.getByPlaceholderText(/Burke/i);
//{target: {name :'age', value: '5'}}
  fireEvent.change(emailInput, {target:{ value:'clay'}});
});
});
