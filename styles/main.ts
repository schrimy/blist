import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Pressable: {
        backgroundColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 30,
    },

    Text: {
        color: '#fff',
        fontSize: 40,
    },

    textInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        borderRadius: 5,
        paddingLeft: 5,
    },

    button: {
        borderRadius: 7,
        backgroundColor: '#000',
        width: 100,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },

    buttonText: {
        color: 'white', 
    },

    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },

    dateContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },

    createNoteContainer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },

    radioContainer: {
        marginBottom: 15,
        justifyContent: 'center',
    },

    InfoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },

    InfoText: {
        fontSize: 30,
    },
});