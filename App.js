import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'
import TelaC from './src/views/TelaC'
import Nav from './src/routes'

export default function App() {
  	return (
		  <Nav />
		// <SafeAreaView style={styles.container}>
		// 	<TelaA />
		// 	<TelaB />
		// 	<TelaC />
		// </SafeAreaView>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
