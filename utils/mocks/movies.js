const moviesMock = [
  {
    id: '8fdc589d-c3b8-4bf9-bd51-df119108ab7e',
    title: 'Man at Bath (Homme au bain)',
    year: 2009,
    cover: 'http://dummyimage.com/150x240.bmp/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1902,
    contentRating: 'NC-17',
    source: 'https://webeden.co.uk/proin/risus.png',
    tags: [
      'Action|Crime|Drama|Thriller',
      'Documentary',
      'Drama',
      'Comedy|Drama'
    ]
  },
  {
    id: 'c6035797-3ef5-46d6-a33a-71b184293195',
    title: 'Children of the Revolution',
    year: 2003,
    cover: 'http://dummyimage.com/200x113.jpg/ff4444/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2057,
    contentRating: 'NC-17',
    source: 'https://cloudflare.com/ipsum/primis/in.xml',
    tags: ['Comedy', 'Drama', 'Drama', 'Drama|Romance|Thriller']
  },
  {
    id: '9900e859-b110-4011-9fa8-b2687c735ead',
    title: 'Tune in Tomorrow...',
    year: 2012,
    cover: 'http://dummyimage.com/182x240.bmp/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1977,
    contentRating: 'G',
    source: 'http://shareasale.com/semper/rutrum.xml',
    tags: ['Drama', 'Horror', 'Adventure|Comedy|Drama']
  },
  {
    id: 'ded79e60-8ae1-4676-adaf-deadf083af96',
    title: 'Virgin Suicides, The',
    year: 2007,
    cover: 'http://dummyimage.com/226x138.png/dddddd/000000',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2061,
    contentRating: 'NC-17',
    source: 'https://pagesperso-orange.fr/nec/sem/duis.jsp',
    tags: [
      'Crime|Drama|Film-Noir',
      'Action|Mystery|Romance|Western',
      'Crime|Drama',
      'Comedy|Horror|Thriller',
      'Horror|Mystery'
    ]
  },
  {
    id: '5f0a67e9-0919-4c00-b784-520e5c26b237',
    title: 'Exorcist III, The',
    year: 1992,
    cover: 'http://dummyimage.com/149x195.jpg/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1888,
    contentRating: 'G',
    source: 'http://addtoany.com/nam/nulla/integer/pede/justo.js',
    tags: ['Drama', '(no genres listed)', 'Comedy', 'Comedy']
  },
  {
    id: '99c6f06c-a6a6-4a88-a3a4-b7dedfb641f3',
    title: 'Whisper of the Heart (Mimi wo sumaseba)',
    year: 2001,
    cover: 'http://dummyimage.com/221x195.jpg/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1905,
    contentRating: 'PG',
    source:
      'https://scribd.com/nascetur/ridiculus/mus/vivamus/vestibulum/sagittis.xml',
    tags: ['Drama', 'Children|Musical', 'Drama', 'Horror', 'Animation']
  },
  {
    id: '4f037fa2-deb0-4f53-ad3e-89bc18ea113b',
    title: 'We Live in Public',
    year: 2000,
    cover: 'http://dummyimage.com/121x121.jpg/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2059,
    contentRating: 'G',
    source: 'http://dot.gov/hac/habitasse/platea/dictumst/etiam/faucibus.jpg',
    tags: ['Drama|Thriller', 'Comedy|Drama|Romance']
  },
  {
    id: 'db7d2d33-8053-405a-a17b-188a2f10ca72',
    title: 'Two Weeks in Another Town',
    year: 1999,
    cover: 'http://dummyimage.com/105x192.png/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 2020,
    contentRating: 'NC-17',
    source: 'http://ftc.gov/nulla/ac/enim/in.js',
    tags: ['Drama', 'Documentary']
  },
  {
    id: '9ee9ae0e-e017-48dc-bf12-84cd66462524',
    title: 'Seventh Heaven (Septième ciel, Le)',
    year: 1999,
    cover: 'http://dummyimage.com/245x200.png/ff4444/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2035,
    contentRating: 'PG-13',
    source: 'https://tripod.com/suspendisse.html',
    tags: ['Crime|Drama', 'Drama|Mystery', 'Documentary', 'Drama']
  },
  {
    id: 'c3bbd91a-0452-4e74-bb93-f51973f5cd6e',
    title: 'Girl in the Park, The',
    year: 1990,
    cover: 'http://dummyimage.com/122x217.bmp/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1925,
    contentRating: 'R',
    source: 'http://weebly.com/nibh/ligula/nec/sem/duis.aspx',
    tags: ['Western']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};