HOC
Error boundaries
Interview Questions
testing in react - continued
treshaking
Immutable objects
proxy objects
Virtual dom --
Virtual DOM, Reconcilation, Diffing, batch update
React creates a copy of original dom to avoid making direct changes in the original.
When a change occurs in any state, a new copy of virtual dom is created reflecting that change,
Now react will do diffing on the new and earlier virtual dom to specify the changes,
And now it will batchup changes of several virtual doms finally reflect it in the original DOM. This process is called Reconciliation.

Diffing Algorithm
1- If the root or parent element has changed, its child elements are considered to be changes as well
and will be included in the reconciliation.
2- When checking li elements, the diff algorithm checks all elements to match for any changes or removed or new element.
This takes a toll on performance and thats why keys are used when printing list items as such, to make the differentiation
easier and faster.

