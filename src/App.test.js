import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { WeatherContextProvider, WeatherContext } from './context';

describe('WeatherContextProvider', () => {
  it('fetches weather data and provides it through context', async () => {
    // Mock fetch function
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        base: 'stations',
        clouds: { all: 20 },
        cod: 200,
        coord: { lon: 36.82, lat: -1.29 },
        dt: 1619635195,
        id: 184745,
        main: {
          feels_like: 299.27,
          humidity: 88,
          pressure: 1014,
          temp: 297.99,
          temp_max: 298.71,
          temp_min: 297.59,
        },
        name: 'Nairobi',
        sys: {
          country: 'KE',
          id: 2032206,
          sunrise: 1619577413,
          sunset: 1619620868,
          type: 2,
        },
        timezone: 10800,
        visibility: 10000,
        weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
        wind: { speed: 3.6, deg: 160 },
      }),
    });
    
  // Define a TestComponent that consumes WeatherContextProvider and displays loading state and weather data
    const TestComponent = () => (
      <WeatherContextProvider>
        <WeatherContext.Consumer>
          {({ data, isLoading }) => (
            <div>
              <span data-testid="loading">{isLoading ? 'Loading...' : 'Not Loading'}</span>
              <span data-testid="weather">{data ? data.name : 'No Data'}</span>
            </div>
          )}
        </WeatherContext.Consumer>
      </WeatherContextProvider>
    );

  // Render the TestComponent
    const { getByTestId } = render(<TestComponent />);

  // Check if loading state is initially displayed
    expect(getByTestId('loading').textContent).toBe('Loading...');

  // Wait for loading to complete and assert that loading state is not displayed and weather data is rendered
    await waitFor(() => {
      expect(getByTestId('loading').textContent).toBe('Not Loading');
      expect(getByTestId('weather').textContent).toBe('Nairobi');
    });
  });
});




