# Chessmate

Chessmate is website and Progressive Web App for learning the basic checkmate patterns as defined on [wikipedia](https://en.wikipedia.org/wiki/Checkmate_pattern).

At the moment it's very much a work in progress.

Current milestone: a single board will appear and ask the user to replicate a Damiano's mate. If it exactly matches the position we have stored for a Damiano's mate then it will say correct. otherwise it will say 'wrong!'

PWA progress
There's a manifest setup, but in terms of the actual service worker it's just the react scripts deaults for now. An intention in the future is to update the site in the background, but for now core functionality is more important.

Accessibility
Ultimately I want this page to be AA/AAA compliant with guidelines as defined on [The App Business Guidelines](https://theappbusiness.github.io/accessibility-guidelines/), and usable with just the keyboard, and even without a board. For now I'm using a strict a11y linter, but more thought needs to go into overall approach. Probably need to swap out chessboard.jsx to make one more accessible.

## In Progress

- identify whether a position is in the selected mate or not

## Milestones

1) set up an Anastasia's mate

- identify whether a position is in the selected mate or not
- start with the simpler ones i.e smothered.
- lean on chess.js as much as possible to validate.

## ToDo

Hook up validate to display 'wrong' when position does not match Damiano's mate.
Hook up validate button to display 'correct' when position perfectly matches Damiano.

## Thoughts

If my focus is to be on typescript, why don't I  spend some time working on some of the logic for my MAIN product? It needs to:

Take in a position and a mating pattern enum
Check that the position conforms to that mating pattern
return true or false, and if false also return the reason it found (king is not on the edge, it's not checkmate, etc.)

This could be a great bit of kit. Chess Players need to be able to recognise Checkmate patterns, and if we can teach the specific patterns by name, we can reinforce better learning of checkmates overall. Someone can see a mate and go: Oh! It's Boden's Mate! And when the pieces are setup as such that a mate like that could be in the air, they'll better be able to sense it.

Instead of programming behaviour to switch between quiz, replicate challenge and examples etc I should just use react-router so that it can all be shown in the browser as well!

Small change: Justify Center the board so it doesn't look disasterous on mobile! Maybe start lookig at flexbox?

## Challenges

Dragging seems to be not possible on mobile for the chessboard lib we're using. That suggests that we may need to re-implement the whole thing. It also doesn't pass any of the accessibility checks.
