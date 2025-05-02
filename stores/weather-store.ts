import { getForecast, getWeather, getAirQuality } from '@/lib/api'
import { create } from 'zustand';
import { WeatherStoreType } from '@/lib/types';

const WeatherStore = create<WeatherStoreType>((set) => (
    {
        weatherData: null,
        forecastData: null,
        airData: null,
        isLoading: true,
        error: null,
        unit: 'metric',
        currentlat: null,
        currentlon: null,
        currentCoordinate: (currentlat, currentlon) => set({ currentlat, currentlon }),
        setUnit: (unit) => set({ unit }),
        fetchWeatherData: async ({ lat, lon, unit }: { lat: number, lon: number, unit: string }) => {
            try {
                set({ isLoading: true });
                const weather = await getWeather(lat, lon, unit);
                const forecast = await getForecast(lat, lon, unit);
                const airQuality = await getAirQuality(lat, lon);
                set({ weatherData: weather, forecastData: forecast, airData: airQuality, isLoading: false });
            } catch (error) {
                set({ error: error instanceof Error ? error.message : String(error), isLoading: false });
            } finally {
                set({ isLoading: false });
            }
        }
    })
);
export default WeatherStore; 