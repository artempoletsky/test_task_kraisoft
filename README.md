Test task for kraisoft

## Requirements
Job Interview Test Task: Next.js Interactive Game Field Implementation

Objective:
To assess your proficiency in Next.js and frontend development, we would like you to implement a simple responsive website with interactive elements. The website will consist of a header, body, and footer. The main feature in the body section will be an interactive game field where users can spawn and move rectangles with images inside.

Task Description:
1. Layout Structure:
- Implement a responsive layout with a header, body, and footer.
- Use SCSS for styling the components.
- Ensure the website has multiple pages. The main page should describe the website, and other pages should share the same header and footer but contain different content.
2. Header:
- The header should be a simple bar at the top of the page with a placeholder for the website title or logo.
3. Footer:
- The footer should be a bar at the bottom of the page with a placeholder for any footer content (e.g., copyright notice).
4. Game Field (Body):
- In the body section of the game page, create a game field where rectangles can be spawned and moved around.
- The game field should occupy the remaining space between the header and footer and be responsive to window resizing.
5. Rectangle Spawning:
- Implement a mechanism to spawn new rectangles within the game field when the user clicks on any empty spot.
- Each rectangle should contain an image (you can use any placeholder image).
- Spawning of a new rectangle should include an animation from the top left corner to the click/tap coordinates.
6. Rectangle Interaction:
- Allow users to drag and move the rectangles around within the game field.
- Ensure the dragging interaction is smooth and responsive.
- The last interacted rectangle should always be on the top layer.
7. Responsiveness:
- Ensure the entire application is responsive.
- When the browser window is resized, the game field should recalculate its size, and the rectangles should adjust their positions accordingly if necessary.
8. Additional Pages:
- Implement a contact form on one of the pages. This form should include fields for the user's name, email, subject, and message, along with a submit button.
- Ensure all pages share the same header and footer for consistency.

## How to run

```sh
npm run dev
```
## Technologies overview

1. React, Next.js, SCSS
2. Mantine for the feedback form and buttons
3. Konva for the game, animation, drag and drop.
4. [Easystore](https://github.com/artempoletsky/easystore) for a global store to bind React and Konva together.
5. Zod for feedback form validation.

## Remarkable project files overview

`/app/game/effects.ts` - includes runFireworks method

`/app/game/game.ts` - the Game's main logic.

