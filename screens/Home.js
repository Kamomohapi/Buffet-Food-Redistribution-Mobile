import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

// Import a sample image (You can replace this with your own images)
const sampleFoodImage = 'https://www.example.com/sample-food-image.jpg'; // Replace with an actual URL or local asset

const HomeScreen = ({ navigation }) => {
  const handleDonatePress = () => {
    // Navigate to the donate screen
    navigation.navigate('Donate');
  };

  const handleBrowsePress = () => {
    // Navigate to the browse donations screen
    navigation.navigate('BrowseDonations');
  };

  const handleLoginPress = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {

    navigation.navigate('SignUp');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Food Share Network</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome to the Food Share Network</Text>
        <Text style={styles.description}>
          Join us in making a difference by donating food to those in need. Your contributions can help fight hunger in your community.
        </Text>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: sampleFoodImage }} style={styles.foodImage} />
      </View>

      {/* Donation and Browse Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDonatePress}>
          <Text style={styles.buttonText}>Donate Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBrowsePress}>
          <Text style={styles.buttonText}>Browse Donations</Text>
        </TouchableOpacity>
      </View>

      {/* Login and Signup Buttons */}
      <View style={styles.authButtonContainer}>
        <TouchableOpacity style={styles.authButton} onPress={handleLoginPress}>
          <Text style={styles.authButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButton} onPress={handleSignupPress}>
          <Text style={styles.authButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>

      {/* Categories Section
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Popular Food Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {['Vegetables', 'Fruits', 'Canned Goods', 'Grains', 'Meats'].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Together, we can make a difference!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  header: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  buttonContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    width: '80%',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  authButtonContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    width: '80%',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  authButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoriesSection: {
    marginBottom: 20,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: '#FFDDC1',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
  },
});

export default HomeScreen;