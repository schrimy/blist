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

    listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5,
    },
});

export const notesStyles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        width: '50%',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    deleteBtn: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#000',
        marginTop: 5,
        marginRight: 5,
        padding: 1,
    },

    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    noteContent: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
    },

    noteText: {
        overflow: 'hidden',
        width: '90%',
        textAlign: 'center',
    },

    listContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
    },

    modal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    modalText: {
        marginBottom: 15,
    },

    modalContent: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
    },
});