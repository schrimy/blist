import { StyleSheet } from 'react-native';
import { ColorSchemeName } from 'react-native';

export function themeColours (theme: ColorSchemeName = 'light') {
    return theme === 'dark' ? {
        backgroundColor: '#000',
        borderColour: '#fff',
        textColor: '#fff',
        buttonBackground: '#fff',
        buttonText: '#000',
        inputBackground: '#fff',
    } : {
        backgroundColor: '#fff',
        borderColour: '#000',
        textColor: '#000',
        buttonBackground: '#000',
        buttonText: '#fff',
        inputBackground: 'rgba(0, 0, 0, 0.2)',
    };
}

export const styles = (theme : ColorSchemeName = 'light') => StyleSheet.create({
    body: {
        backgroundColor: themeColours(theme).backgroundColor,
    },

    scrollContainer: {
        alignItems: 'center',
        paddingBottom: 80,
    },

    themeButton: {
        marginRight: 15,
        padding: 5,
    },

    newNote: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 30,
        backgroundColor: themeColours(theme).buttonBackground,
        borderRadius: 100,
    },

    Text: {
        color: themeColours(theme).textColor,
        fontSize: 40,
    },

    dateText: {
        color: themeColours(theme).textColor,
        fontSize: 20,
    },

    textInput: {
        backgroundColor: themeColours(theme).inputBackground,
        width: '100%',
        minHeight: 35,
        borderRadius: 5,
        paddingLeft: 5,
        paddingTop: 0,
        paddingBottom: 0,
    },

    button: {
        borderRadius: 7,
        backgroundColor: themeColours(theme).buttonBackground,
        width: 100,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },

    buttonText: {
        color: themeColours(theme).buttonText, 
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

export const notesStyles = (theme : ColorSchemeName = 'light') => StyleSheet.create({
    container: {
        borderColor: themeColours(theme).borderColour,
        backgroundColor: themeColours(theme).backgroundColor,
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
        borderColor: themeColours(theme).borderColour,
        backgroundColor: themeColours(theme).buttonBackground,
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

    noteTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: themeColours(theme).textColor,
    },

    noteText: {
        overflow: 'hidden',
        width: '90%',
        textAlign: 'center',
        color: themeColours(theme).textColor,
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
        color: themeColours(theme).textColor,
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
        color: themeColours(theme).textColor,
        marginBottom: 15,
    },

    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themeColours(theme).backgroundColor,
        padding: 20,
        borderColor: themeColours(theme).borderColour,
        borderWidth: 1,
        borderRadius: 10,
    },
});