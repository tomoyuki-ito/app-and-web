import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Switch, Picker } from 'react-native'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      switchOn: false,
      language: 'sw',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Button
              title='Alert'
              color='blue'
              onPress={()=>{
                alert('Hello World!')
              }}
            />
        </View>
        <View style={styles.body1}>
          <Text>Open up App.js to start working on your app!</Text>
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color="#0000ff"
          />
          <Switch
            value={this.state.switchOn}
            onValueChange={(itemValue, itemIndex) => this.setState({switchOn: itemValue})}
          />
        </View>
        <View style={styles.body2}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
          >
            <Picker.Item key={0} label="Swift" value="sw" />
            <Picker.Item key={1} label="Kotlin" value="kt" />
            <Picker.Item key={2} label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 64,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  body1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  body2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  indicator: {
    margin: 16,
  },
  picker: {
    margin: 16,
  },
})
