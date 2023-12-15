import { Advisor } from '@climatempo/advisor-sdk'

const advisor = new Advisor({
  key: '9c3e6962b09f46b3436906e7b4754f43'
})

const updateWeatherConditions = conditions => {
  const weatherConditionsElement = document.getElementById('weather-conditions')
  if (weatherConditionsElement) {
    weatherConditionsElement.textContent = conditions
  } else {
    console.error(
      'Elemento HTML não encontrado para atualizar as condições meteorológicas.'
    )
  }
}

const getWeather = async () => {
  try {
    const weather = await advisor.getWeather('Ilhéus', 'BA')

    const conditions = weather.weather.description

    updateWeatherConditions(conditions)
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error)
  }
}

getWeather()
