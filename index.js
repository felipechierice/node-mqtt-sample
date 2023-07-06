const mqtt = require('mqtt');

// Configurações do servidor MQTT
const mqttServer = 'mqtt://localhost'; // Altere para o endereço do seu servidor MQTT
const mqttPort = 8080;

// Conexão com o servidor MQTT
const client = mqtt.connect(mqttServer, { port: mqttPort });

// Evento de conexão estabelecida
client.on('connect', () => {
  console.log('Conectado ao servidor MQTT');

  // Inscrição em um tópico
  client.subscribe('esp32/sensor');
});

// Evento de mensagem recebida
client.on('message', (topic, message) => {
  console.log('Mensagem recebida:', message.toString());

  // Processar a mensagem recebida do ESP32
  // Você pode adicionar o código para tratar a mensagem conforme suas necessidades
});

// Evento de desconexão
client.on('close', () => {
  console.log('Desconectado do servidor MQTT');
});

