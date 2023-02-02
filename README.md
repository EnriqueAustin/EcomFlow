# EcomFlow

This code is a React Native application for a product store. It contains three files:

App.js: This file contains the main component for the application. It uses the 'expo-status-bar' and 'react-native' libraries to create a UI for the app. It also uses the 'useColorScheme' hook from 'nativewind' to switch between light and dark mode.

ProductCard.js: This component is used to display a single product in the store. It receives product information such as the image, title, price, and description as props and displays them in a card format. It also implements a simple quantity selector using the 'AntDesign' library.

ProductList.js: This component is used to render a list of products using the 'FlatList' component from 'react-native'. It uses the 'ProductCard' component to display each product in the list and receives the list of products as an array.

The data for the products is stored in a constant 'products' in the file where it is imported. Each product is an object with properties such as id, title, price, description, category, image, and rating. The code uses the keyExtractor property to ensure that each item in the list has a unique key.
