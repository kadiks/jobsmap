//@ts-check

const keywords = [
    'c--',
    'f*',
    'javascript',
    'php',
    'ruby',
    'c#',
    'python',
    'java',
]

function splitWords(string){
    return string
    .split(/[\p{General_Category=Separator}.,;}]/giu)
    .filter(x=>x)
}

function mergeObjects(o1, o2){
    return Object.assign(o1, o2)
}

function nameToCount(name){
    return { [name] : 0 }
}

/**
 * @param {Array<string>} keywords
 * @param {string} string 
 * @returns 
 */
function countKeywords(keywords, string){
    const words = splitWords(string.toLowerCase())
    const kw = keywords.map( nameToCount ).reduce( mergeObjects, {} )
    console.log(words)
    console.log(kw)
    words.forEach( word => {
        if(word in kw){
            kw[word] = 1
        }
    })
    console.log(kw)
}

countKeywords(keywords, 'miaou   f*; ruby. la la  ruby  C-- and c# and other things like C#')

module.exports = {
    countKeywords
}