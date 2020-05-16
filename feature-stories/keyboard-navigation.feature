Feature: Piece Placement

   Anything to do with placing a piece

Feature: Piece Modification

   Aspects relating to altering a placed piece
  (This could be a lot more complex as there's selecting, hovering, and placing again!)
Feature: Piece removal

   Behaviour relating to removing pieces

   Scenario: Removing a piece
    Given I have a piece selected
    When I press R
    Then The piece is removed from the board
