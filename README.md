# Carwow test

(Note: Please read further for the assumptions I made while completing this test.)

## Setup

Get the code by either cloning this repository

```
git clone 
```

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

Run the project with: 

```
npm run build
npm start
```

## Testing

There are a few very basic tests for some of the components.  These tests are mostly just snapshot tests, as there is not a huge amount of functionality and they are not comprehensive.  It was not clear whether or not tests were required, and so I wrote one or two in case.

Run tests with:

```
npm run tests
```

## Assumptions

 I made the following assumptions when completing the test:
- For the responsive images, I have assumed that resizing using CSS is all that is required.  In a production environment I would use a CDN to provide different optimised image sizes as this would provide better performance.
- I have added color names using a npm packed to approximate names.  In real life I would not use this approach.  I realise the lack of color names are possibly to test whether someone shows things without enough information provided, but the design is quite colourless without the colours, and there there is not a huge amount of extra information for each individual car in comparison with the list of cars.
- I did not list colors without names as this is not particularly accessible.  I realise that Carwow may not have the same accessibility criteria as many sites due to the fact that people need to have good vision in order to be able to drive; however people who have other disabilities such as dyslexia may use screenreaders.  Many accessibility principles also provide benefits to able bodied people, for example it may be difficult to work out what a color is just from a picture, and the code is more structured if it's built with accessibility in mind.
- For the CSS I have used the 'Styled JSX' provided with Next.JS.  I have used a naming convention close to BEM, but BEM itself is not easily supported by 'Styled JSX', and I have not pursued this further in the interests of time.
- If this application grew it would benefit from a state management framework, but adding redux for example at this stage seemed like overkill.
- Many of the components could be broken into smaller components and refactored, but again I have left these as relatively large components in the interests of time.
