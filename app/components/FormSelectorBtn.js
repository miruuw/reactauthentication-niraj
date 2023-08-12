import React from 'react'
import { Animated, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native'

const FormSelectorBtn = ({
    title, 
    onPress,
    style,
    backgroundColor
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={[styles.container, style, {
            backgroundColor
        }]}>
            <Text style={styles.title}>{title}</Text>
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '50%',
        backgroundColor: '#1b1b33',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 16
    }
})

export default FormSelectorBtn