## Steps
- Render a simple list of contacts, using the data (the default export) of mockData : firstname, lastname, keywords, twitter handle
- Add filters (only an active filter at the same time, clicking on an active filter button deactivates it)
- Fetch the bio using `fetchTwitterBio`

## Tips
To keep in mind? Does this component is supposed to handle that? Is it its responsibility? A component should do only one thing. In the correction, we used 8 components. We could have used more.

Don't put logic in a component that does not belong there. The components render, and that mostly it.
