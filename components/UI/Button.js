import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Styles } from '../../constants/styles';

function Button({children, onPress, mode, style}) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={[styles.btn, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.btnText, mode === 'flat' && styles.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    btn: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: Styles.colors.primaryDark
    },
    flat: {
        backgroundColor: 'transparent',
        borderColor: Styles.colors.primaryDark,
        borderWidth: 1
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    flatText: {
        color: Styles.colors.primaryDark
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Styles.colors.primary,
        borderRadius: 4
    }
})