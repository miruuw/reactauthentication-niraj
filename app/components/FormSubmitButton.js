import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

const FormSubmitButton = ({
    title,
    submitting,
    onPress
}) => {
    const backgroundColor = submitting
        ? 'rgba(27,27,51,0.4)'
        : 'rgba(27,27,51,1)'
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor }]}
            onPress={!submitting ? onPress : null}
        >
            <Text style={{ fontSize: 18, color: '#fff' }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FormSubmitButton