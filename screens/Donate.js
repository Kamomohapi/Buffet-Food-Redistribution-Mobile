import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DonateForm = () => {
  // State variables for each form field
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [timeCooked, setTimeCooked] = useState('');

  // Handle form submission
  const handleDonate = () => {
    if (foodType && quantity && address && timeCooked) {
      // Handle the donation logic (e.g., send to backend or alert)
      Alert.alert('Donation Submitted', `Thank you for donating ${quantity} of ${foodType} to the following address: ${address}.`);
    } else {
      Alert.alert('Error', 'Please fill in all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donate Food</Text>

      {/* Food Type Input */}
      <TextInput
        style={styles.input}
        placeholder="Food Type"
        value={foodType}
        onChangeText={(text) => setFoodType(text)}
      />

      {/* Quantity Input */}
      <TextInput
        style={styles.input}
        placeholder="Quantity (e.g., 2 kg, 5 items)"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        keyboardType="numeric"
      />

      {/* Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        keyboardType="default"
      />

      {/* Time Cooked Input */}
      <TextInput
        style={styles.input}
        placeholder="Time Cooked (e.g., 3 hours ago)"
        value={timeCooked}
        onChangeText={(text) => setTimeCooked(text)}
      />

      {/* Donate Button */}
      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DonateForm;