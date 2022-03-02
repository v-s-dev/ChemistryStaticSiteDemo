//// Makes changes to initial state of page - Start

// Make all the content to not display by adding class 'hide_content'
function hideAllContent(){
    let languageContentClassList = ['eng_lang_content', 'hin_lang_content']
    languageContentClassList.forEach(className => {
        document.querySelectorAll('.' + className).forEach(element => {
            element.classList.add('hide_content')
            element.classList.remove('show_content')
        })
    })
}

hideAllContent()

// English language content is displayed by default
let eng_lang_element_list = document.querySelectorAll('.eng_lang_content')
eng_lang_element_list.forEach((element) => {
    element.classList.toggle('show_content')
    element.classList.toggle('hide_content')
})

//// Makes changes to initial state of page - End



// display or hide content based on change in radio button
let englishLanguageContentRadio = document.querySelector('#eng_lang_content_radio')
englishLanguageContentRadio.addEventListener('change', (event) => {
    hideAllContent()
    let englishContentElementList = document.querySelectorAll('.eng_lang_content')
    englishContentElementList.forEach((element) => {
        element.classList.toggle('show_content')
        element.classList.toggle('hide_content')
    })
})

// display or hide content based on change in radio button
let hindiLanguageContentRadio = document.querySelector('#hin_lang_content_radio')
hindiLanguageContentRadio.addEventListener('change', (event) => {
    hideAllContent()
    let hindiContentElementList = document.querySelectorAll('.hin_lang_content')
    hindiContentElementList.forEach((element) => {
        element.classList.toggle('show_content')
        element.classList.toggle('hide_content')
    })
})
