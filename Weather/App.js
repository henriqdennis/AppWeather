import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageBackground, Keyboard, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const API_KEY = '8ff1969a6c1ded22cc533f1d492aa0b9';
const weatherIconBaseUrl = 'http://openweathermap.org/img/wn/';
const backgroundImage = require('./assets/background.jpg');

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (weatherData) {
      console.log(weatherData.weather[0].icon);
    }
  }, [weatherData]);

  const fetchWeatherData = async () => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`);
      if (!response.ok) {
        throw new Error('Erro ao obter dados meteorológicos. Certifique-se de que a cidade foi digitada corretamente e tente novamente.');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      if (err.message === 'Network request failed') {
        setError('Erro de conexão. Verifique sua conexão com a internet e tente novamente.');
      } else {
        setError(err.message);
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const openLinkedIn = () => {
    const linkedInProfileUrl = 'https://www.linkedin.com/in/henriqdennis';
    Linking.openURL(linkedInProfileUrl);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Previsão Do Tempo</Text>
        </View>
        <Text style={styles.title}></Text>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0,0,0,0.5)"
              placeholder="Digite sua cidade"
              value={city}
              onChangeText={setCity}
              onSubmitEditing={fetchWeatherData}
            />
            <Icon name="search" size={20} color="#000" style={styles.searchIcon} onPress={fetchWeatherData} />
          </View>
          {loading && <ActivityIndicator size="small" color="#0000ff" />}
          {error && <Text style={styles.error}>{error}</Text>}
          {weatherData && (
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherLabel}><Text style={styles.boldText}>Cidade:</Text> {weatherData.name}</Text>
              <Text style={styles.weatherLabel}><Text style={styles.boldText}>Temperatura:</Text> {weatherData.main.temp}°C</Text>
              <Text style={styles.weatherLabel}><Text style={styles.boldText}>Condição:</Text> {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</Text>
              <Image
                style={styles.weatherIcon}
                source={{ uri: `${weatherIconBaseUrl}${weatherData.weather[0].icon}@2x.png` }}
              />
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={openLinkedIn}>
            <Text style={styles.footerText}>Desenvolvido por <Text style={styles.footerBold}>Dennis Souza</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  topBar: {
    backgroundColor: '#000',
    height: 100,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    width: '80%',
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#000',
  },
  searchIcon: {
    marginLeft: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  weatherLabel: {
    fontSize: 18,
  },
  weatherIcon: {
    width: 120,
    height: 120,
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#000',
    width: '100%',
    padding: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#fff',
    paddingBottom: 2,
  },
  footerBold: {
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default App;
