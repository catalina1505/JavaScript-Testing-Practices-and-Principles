This project is based on the course: https://frontendmasters.com/courses/testing-practices-principles/jest-testing-framework/

Lessons learnt: 

Every test should have the following flow (the AAA rule):
Arrange: This is the first step of a unit test application. Here we will arrange the test, in other words we will do the necessary setup of the test. For example, to perform the test we need to create an object of the targeted class, if necessary, then we need to create mock objects and other variable initialization, something like this.

Act: This is the middle step of a unit step application. In this step we will execute the test. In other words we will do the actual unit testing and the result will be obtained from the test application. Basically we will call the targeted function in this step using the object that we created in the previous step.

Assert: This is the last step of a unit test application. In this step we will check and verify the returned result with expected results
A test helps you to identify when there is a bug, and a good test helps you to find where the bug is.


Assertions documentation:
https://jestjs.io/docs/expect

The most popular assertions:
toBe() it’s similar with ===
There is also not.toBe(), similar with !==
toEqual() similar with loadsh isEqual: https://lodash.com/docs/4.17.4#isEqual
toMatchObject, similar to `toEqual`, but for partial equality (checking that a smaller object is equal with a part of the bigger object)


100% code coverage doesn’t correlate with a high confidence in the code. We may have a big coverage but the tests are not good enough and they don’t cover important cases.

Use skip (example: it.skip) in order to skip running a test.

Jest has a cool feature: if your test failed and you did a changed to fix it, next time it will run that test first.

We should use mocking only when it’s really necessary as it doesn’t describe the real life situation.

Concepts:
- RDD (readme-driven development): Before writing any code, write a README file that describes what your software should do.
These questions might help:
What do you need to write to show how to use this?
What features do you need to show so a user (and the implementor!) understand what you were aiming for?
How do you want your program/library to be used?
- TDD (test-driven development): Test-Driven development is a process of developing and running automated test before actual development of the application. Hence, TDD sometimes also called as Test First Development.
- DDD (documentation-driven development): The idea behind such an approach is to ensure that the documentation for every known aspect of the application is written first and then, the associated program is implemented. This guarantees that the goals of the program is well documented.
