import messages from './messages';

export const initReactIntl = () => {

    let locale = (navigator.languages && navigator.languages[0]) ||
        navigator.language || navigator.userLanguage || 'en';
    const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0];
    const localeMessages = messages[locale] ||
        messages[localeWithoutRegionCode] || messages['en'];

    locale = localeMessages === messages['en'] ? 'en' : locale;

    return {locale, messages: localeMessages};

}

