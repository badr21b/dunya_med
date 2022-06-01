// import arabic from '../Languages/tanslations/arabic'
import french from '../Languages/tanslations/french'
import english from '../Languages/tanslations/english'
import turkish from '../Languages/tanslations/turkish'

export function translate(fieldName, languages) {

    let translation = "";
    //console.log("current language " + currentLanguage);
    // @ts-ignore

    switch (languages) {
        case "tr":
            // @ts-ignore
            translation = turkish[fieldName];
            break;
        case "en":
            // @ts-ignore
            translation = english[fieldName];
            break;
        case "fr":
            // @ts-ignore
            translation = french[fieldName];
            break;
        default:
            // @ts-ignore
            translation = english[fieldName];
            break;
    }

    // if translation is not present
    if (translation === undefined || "" === translation) {
        translation = fieldName;
    }


    return translation;
}
