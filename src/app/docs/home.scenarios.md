### Scenarios

#### [Factory Pattern](/patterns/factory)

The objective of this system is to produce toys of different types and allow controlling their movements, locations, prices, and actions through various patterns.

1. The toy production space is a 64\*64 space.
2. Each toy should have a unique (x,y) coordinate on this space.
3. A-type and B-type toys should be produced in equal quantities. Up to 40 toys can be produced.

Each toy should have the following attributes:

1. Name: A name can be assigned to a toy when it is initially created.
2. Price: The initial price of each toy should be randomly generated in multiples of 1000.
3. Coordinate: Each toy should know its own (x,y) coordinate and be able to display it.
4. Arm: If a toy has an arm, it should be able to wave its hand.
5. Movement: Each toy should be able to move in any direction by 1 unit per 0.1 seconds.
6. Price adjustment: Each toy should be able to adjust its own price.

Each toy type has its own attributes:

A-type:

1. The initial coordinate of the first A-type toy is (1,0), and the X-coordinate of each subsequent A-type toy increases by 1.
2. It has an arm, allowing it to wave its hand.

B-type:

1. The initial coordinate of the first B-type toy is (0,1), and the Y-coordinate of each subsequent B-type toy increases by 1.
2. It does not have an arm.

#### [Mediator Pattern](/patterns/mediator)

The system should allow controlling the toys using three commands

1. Wave: This command should be used to make toys with arms wave their hands.
2. X-axis sort: This command should be used to sort the toys in an A-B-A-B pattern on the nth X-axis.
3. Y-axis sort: This command should be used to sort the toys in an A-B-A-B pattern on the nth Y-axis.

#### [Observer pattern](/patterns/observer)

Each toy should be able to subscribe to a store manager to receive notifications about specific events.

The store manager should be able to broadcast the following notifications

1. Discount event: When a discount event is triggered by the store manager, all toys with a price greater than or equal to 1000
