/*  global window */

const domain = 'https://good-books-rdfwwrecig.now.sh';

// const getOptions = () => ({
//   method: 'POST',
//   mode: 'cores',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

export default class BooksAPI {
  static getBooks(url) {
    return window.fetch(`${domain}/${url}`)
      .then(res => res.json())
      .catch(err => err.json());
  }
}
