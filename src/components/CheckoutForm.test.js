import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('renders without errors', () => {
	render(<CheckoutForm />);
});

test('shows success message on submit with form details', async () => {
	render(<CheckoutForm />);

	const firstName = screen.getByLabelText(/first name:/i);
	const lastName = screen.getByLabelText(/last name:/i);
	const address = screen.getByLabelText(/address:/i);
	const city = screen.getByLabelText(/city:/i);
	const state = screen.getByLabelText(/state:/i);
	const zip = screen.getByLabelText(/zip:/i);

	userEvent.type(firstName, 'aaron');
	userEvent.type(lastName, 'mendez');
	userEvent.type(address, 'home at 176');
	userEvent.type(city, 'new jersey');
	userEvent.type(state, 'union');
	userEvent.type(zip, '92398');

	waitFor(() => {
		const firstNameDisplay = screen.queryByText(/aaron/i);
		const lastNameDisplay = screen.queryByText(/aaron/i);
		const addressDisplay = screen.queryByText(/aaron/i);
		const cityDisplay = screen.queryByText(/aaron/i);
		const stateDisplay = screen.queryByText(/aaron/i);
		const zipDisplay = screen.queryByText(/aaron/i);

		expect(firstNameDisplay).toBeInTheDocument();
		expect(lastNameDisplay).toBeInTheDocument();
		expect(addressDisplay).toBeInTheDocument();
		expect(cityDisplay).toBeInTheDocument();
		expect(stateDisplay).toBeInTheDocument();
		expect(zipDisplay).toBeInTheDocument();
	});
});
