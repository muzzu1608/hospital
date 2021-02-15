const fs = require('fs-extra');
const { CONSTANTS } = require("../constant/constants");

export const rmvDir = (filePath) => {
    fs.access(filePath, error => {
        if (!error) {
            fs.rmdirSync(filePath, { recursive: true });
            if (filePath === CONSTANTS.REMOVE_FOLDER) {
                fs.copy(CONSTANTS.STATIC_SOURCE_FILES, CONSTANTS.STATIC_DESTINATION_FILES)
                    .then(() => console.log('Copy completed!'))
                    .catch(err => {
                        console.log('An error occured while copying the folder.')
                        return console.error(err)
                    })
            }
        }
    });
}