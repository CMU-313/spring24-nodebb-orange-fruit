'use strict';


const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    const response = await fetch(`https://translator-service-j33qxoov7a-uc.a.run.app/?content=${postData.content}`);
    const data = await response.json();
    return [data.is_english, data.translated_content];
};
