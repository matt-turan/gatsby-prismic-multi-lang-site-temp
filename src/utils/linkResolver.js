exports.linkResolver = (doc) => {
  console.log(doc);
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
    return '/'
}