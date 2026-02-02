const city = "jakarta";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

interface weather {
  name: string,
  temp: number,
}

export const fetchWeather = async () => {
  try {
    const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  } catch (error) {
    throw new Error(error)
  }
};
