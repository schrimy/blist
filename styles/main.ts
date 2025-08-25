import { StyleSheet } from 'react-native';
import { ColorSchemeName } from 'react-native';

function themeColours (theme: ColorSchemeName = 'light') {
    return theme === 'dark' ? {
        backgroundColor: '#000',
        textColor: '#fff',
        buttonBackground: '#000',
        buttonText: '#000',
        inputBackground: 'rgba(255, 255, 255, 0.2)',
    } : {
        backgroundColor: '#fff',
        textColor: '#000',
        buttonBackground: '#fff',
        buttonText: '#fff',
        inputBackground: 'rgba(0, 0, 0, 0.2)',
    };
}

export const styles = (theme : ColorSchemeName = 'light') => StyleSheet.create({
    body: {
        backgroundColor: '#000',
    },

    newNote: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 30,
        backgroundColor: themeColours(theme).buttonBackground,
        borderColor: '#2c3e50',
        borderRadius: 100,
        borderWidth: 5,
    },

    Text: {
        color: themeColours().textColor,
        fontSize: 40,
    },

    textInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        minHeight: 35,
        borderRadius: 5,
        paddingLeft: 5,
        paddingTop: 0,
        paddingBottom: 0,
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
        marginBottom: 30,
    },

    dateContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },

    createNoteContainer: {
        flex: 1,
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
        borderColor: '#2c3e50',
        backgroundColor: '#fffefe',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    deleteBtn: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#000',
        backgroundColor: '#000',
        marginTop: 5,
        marginRight: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        display: 'flex',
        justifyContent: 'center',
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
        padding: 10,
    },

    noteText: {
        overflow: 'hidden',
        width: '90%',
        textAlign: 'center',
    },

    listContent: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
    },
    
    listText: {
        flex: 2,
        textAlign: 'center',
    },

    checkboxContainer: {
        height: 20,
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