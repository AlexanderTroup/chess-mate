Feature: Chessboard Navigation
  In order to get around the board
  As a user
  I want to navigate the chessboard

  Scenario: blank board
    When I load the app
    Then an empty chessboard is shown.

  Scenario: initial navigation 
    Given I have a blank chess board
    And I have not selected any squares
    When I press an arrow key
    Then A square is highlighted

  Scenario: moving selected square
    Given I have a non edge square highlighted
    When I press an arrow key
    Then The highlighted square moves

  Scenario: moving over edge squares
    Given I am at the edge of the board
    When I press an arrow to move outside the edge of the board
    Then the square at the other side of the board is highlighted

  Scenario: Screen reader selecting a square
    When I highlight a square
    Then The screan reader reads that square name out loud
