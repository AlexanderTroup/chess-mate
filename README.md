# Chessmate

Goal: to create a website for learning the basic checkmate patterns as defined on [wikipedia](https://en.wikipedia.org/wiki/Checkmate_pattern)

MVP: a single image will appear with a particular mate, and a list of options. User selects which one is correct, and moves on.

# In Progress
 - identify whether a position is in the selected mate or not

# Milestones
1) basic quiz that asks which kind of mate a position is.
2) set up an Anastasia's mate
  - identify whether a position is in the selected mate or not
    - start with the simpler ones i.e smothered. 
    - lean on chess.js as much as possible to validate.

# ToDo
Convert to be split by feature
Introduce eslint

# Thoughts
If my focus is to be on typescript, why don't I  spend some time working on some of the logic for my MAIN product? It needs to:

Take in a position and a mating pattern enum
Check that the position conforms to that mating pattern
return true or false, and if false also return the reason it found (king is not on the edge, it's not checkmate, etc.)

