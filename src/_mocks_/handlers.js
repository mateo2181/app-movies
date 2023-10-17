import {rest} from 'msw';

const moviesMockedResponse = {
  "dates":{
    "maximum":"2023-10-14",
    "minimum":"2023-08-27"
 },
 "page":1,
 "results":[
    {
       "adult":false,
       "backdrop_path":"/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
       "genre_ids":[
          28,
          53,
          80,
          18
       ],
       "id":1,
       "original_language":"en",
       "original_title":"The fight club",
       "overview":"The fight club",
       "popularity":3268.812,
       "poster_path":"/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
       "release_date":"2023-08-30",
       "title":"The fight club",
       "video":false,
       "vote_average":7.3,
       "vote_count":839
    },
    {
       "adult":false,
       "backdrop_path":"/hE6etzRUUrGq9bk4GkrP28Yafw.jpg",
       "genre_ids":[
          35,
          12,
          16
       ],
       "id":2,
       "original_language":"es",
       "original_title":"El secreto de sus ojos",
       "overview":"",
       "popularity":518.34,
       "poster_path":"/gmZGAbI42ecAoixyvZI0Se4Qiau.jpg",
       "release_date":"2022-03-24",
       "title":"El secreto de sus ojos",
       "video":false,
       "vote_average":7.2,
       "vote_count":28
    }
 ],
 "total_pages":118,
 "total_results":2349
};

const movieDetailMockedResponse = {
   "adult":false,
   "backdrop_path":"/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
   "belongs_to_collection":{
      "id":523855,
      "name":"The fight club",
      "poster_path":"/lq0Ledkl44xhnr1C15AiqbprAAi.jpg",
      "backdrop_path":"/wac5llYhh0lC24yNWljrcOe4sR9.jpg"
   },
   "budget":70000000,
   "genres":[
      {
         "id":28,
         "name":"Action"
      },
      {
         "id":53,
         "name":"Thriller"
      }
   ],
   "homepage":"https://www.equalizer.movie",
   "id":1,
   "imdb_id":"tt17024450",
   "original_language":"en",
   "original_title":"The fight club",
   "overview":"Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
   "popularity":2755.58,
   "poster_path":"/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
   "production_companies":[
      {
         "id":1423,
         "logo_path":"/1rbAwGQzrNvXDICD6HWEn1YqfAV.png",
         "name":"Escape Artists",
         "origin_country":"US"
      },
      {
         "id":5,
         "logo_path":"/wrweLpBqRYcAM7kCSaHDJRxKGOP.png",
         "name":"Columbia Pictures",
         "origin_country":"US"
      },
      {
         "id":10400,
         "logo_path":"/9LlB2YAwXTkUAhx0pItSo6pDlkB.png",
         "name":"Eagle Pictures",
         "origin_country":"IT"
      },
      {
         "id":44967,
         "logo_path":null,
         "name":"ZHIV Productions",
         "origin_country":""
      }
   ],
   "production_countries":[
      {
         "iso_3166_1":"US",
         "name":"United States of America"
      }
   ],
   "release_date":"2023-08-30",
   "revenue":176933602,
   "runtime":109,
   "spoken_languages":[
      {
         "english_name":"English",
         "iso_639_1":"en",
         "name":"English"
      }
   ],
   "status":"Released",
   "tagline":"The fight club",
   "title":"The fight club",
   "video":false,
   "vote_average":7.3,
   "vote_count":887
};

const indexRoute = 'https://api.themoviedb.org/3/movie/now_playing';
const detailRoute = 'https://api.themoviedb.org/3/movie/:id';

export const moviesHandlers = [
  rest.get(indexRoute, (req, res, ctx) => {
    return res(ctx.json(moviesMockedResponse), ctx.status(200));
  }),
  rest.get(detailRoute, (req, res, ctx) => {
   return res(ctx.json(movieDetailMockedResponse), ctx.status(200));
 })
]