# Chessmate

Goal: to create a website for learning the basic checkmate patterns as defined on [wikipedia](https://en.wikipedia.org/wiki/Checkmate_pattern)

MVP: a single image will appear with a particular mate, and a list of options. User selects which one is correct, and moves on.

# In Progress

# Milestones
Display an image of a mating pattern.

# ToDo

basic question layout:

Just display. don't worry about correct answer for now. 

Milestones: 
1) basic quiz that asks which kind of mate a position is.
2) set up an Anastasia's mate
  - One image only
  - Use CQL and chess.js to identify whether a position is in the selected mate or not
    - start with the simpler ones i.e smothered. 
    - lean on chess.js as much as possible to validate.

Short-term:
 Store questions in state. These should be of the form:
 Question {
   BoardState,
   MateType
 }