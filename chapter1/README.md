For this section's assessment, you will fill out the functions defined in
`interface.js`. These functions will query a collection of movies - the
data in the movies collection will look like what you see in the `movies.json`
file.

In order to complete this section's assessment, you will have to make the tests
in `test.js` pass. To run the tests, run `npm install` and then `npm test`.
You will notice the tests fail. In keeping with this section's emphasis on
automation, we recommend you use `npm run watch` to re-run your tests every
time you change the `interface.js` file. Once the tests succeed, `npm run watch`
will terminate and print a "secret code" consisting of a short phrase.
Copy this code into the assessment page in your browser to complete this
assessment.

================
Solution:
================

go to directory
execute
$ npm install
$ npm test

@ test /Just work/edXMean/chapter1
gulp test

[14:52:53] Using gulpfile /Just work/edXMean/chapter1/gulpfile.js
[14:52:53] Starting 'test'...
[14:52:53] Finished 'test' after 9.87 ms


  dbInterface
    1) can insert a movie
    2) can query data by director
    3) returns multiple results ordered by title


  0 passing (280ms)
  3 failing

  1) dbInterface can insert a movie:

      Uncaught AssertionError: 0 == 1
      + expected - actual

      +1
      -0
      
      at test.js:27:16
      at bound (domain.js:280:14)
      at runBound (domain.js:293:12)

  2) dbInterface can query data by director:

      AssertionError: 0 == 1
      + expected - actual

      +1
      -0
      
      at test.js:41:14
      at Object.exports.byDirector (interface.js:17:3)
      at Context.<anonymous> (test.js:38:17)

  3) dbInterface returns multiple results ordered by title:

      AssertionError: 0 == 4
      + expected - actual

      +4
      -0
      
      at test.js:57:14
      at Object.exports.byDirector (interface.js:17:3)
      at Context.<anonymous> (test.js:54:17)



Tests failed!

interface.js is updated with correct code.

final test output
chhunchha$ npm test

@ test /Just work/edXMean/chapter1
gulp test

[15:53:16] Using gulpfile /Just work/edXMean/chapter1/gulpfile.js
[15:53:16] Starting 'test'...
[15:53:16] Finished 'test' after 9.61 ms


  dbInterface
    ✓ can insert a movie
[ { _id: 564a6c6d1d3cb1482fa34c24,
    title: 'The Empire Strikes Back',
    year: 1980,
    director: 'Irvin Kershner' } ]
    ✓ can query data by director
[ { _id: 564a6c6d1d3cb1482fa34c27,
    title: 'Attack of the Clones',
    year: 2002,
    director: 'George Lucas' },
  { _id: 564a6c6d1d3cb1482fa34c28,
    title: 'Revenge of the Sith',
    year: 2005,
    director: 'George Lucas' },
  { _id: 564a6c6d1d3cb1482fa34c23,
    title: 'Star Wars',
    year: 1977,
    director: 'George Lucas' },
  { _id: 564a6c6d1d3cb1482fa34c26,
    title: 'The Phantom Menace',
    year: 1999,
    director: 'George Lucas' } ]
    ✓ returns multiple results ordered by title


  3 passing (284ms)

Tests succeeded! Enter the below code:
***********