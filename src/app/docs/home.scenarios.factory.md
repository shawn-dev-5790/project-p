#### [1. Factory Pattern](/patterns/factory)

The objective of this system is to produce toys of different types and allow controlling their movements, locations, prices, and actions through various patterns.

> The toy production space is a 64\*64 space.

> Each toy should have a unique (x,y) coordinate on this space.

> A-type and B-type toys should be produced in equal quantities. Up to 40 toys can be produced.

Each toy should have the following attributes:

> Name: A name can be assigned to a toy when it is initially created.

> Price: The initial price of each toy should be randomly generated in multiples of 1000.

> Coordinate: Each toy should know its own (x,y) coordinate and be able to display it.

> Arm: If a toy has an arm, it should be able to wave its hand.

> Movement: Each toy should be able to move in any direction by 1 unit per 0.1 seconds.

> Price adjustment: Each toy should be able to adjust its own price.

Each toy type has its own attributes:

A-type:

> The initial coordinate of the first A-type toy is (1,0), and the X-coordinate of each subsequent A-type toy increases by 1.

> It has an arm, allowing it to wave its hand.

B-type:

> The initial coordinate of the first B-type toy is (0,1), and the Y-coordinate of each subsequent B-type toy increases by 1.

> It does not have an arm.
