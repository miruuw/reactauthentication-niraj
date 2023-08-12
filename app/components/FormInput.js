import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const FormInput = props => {

  const { placeholder, label, error } = props

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
      }}>
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} caretColor="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 40,
    borderRadius: 8,
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: 20
  }
})

export default FormInput