# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recall for merge sort, the time complexity is $T(n) =  1 if n \le 1, 2T(n/2) + n \; if n > 1$. 

1. For the divide-and-conquer sum algorithm if the array has 0 or 1elements, it will add them up so the time complexity is 1. $T(1) = 1$.
2. Split the array into 3 approximately equal sized thirds. $1$
3. Sum each halve recursively using mergesum. $3 T(n/3)$
4. Merge the sums $n$
Thus, our recurrence relation is:

$$
T(n) = \begin{cases}
1 & \text{if} & n \leq 1 \\
3\mathrm{T}(\frac{n}{3}) + n & \text{if} & n > 1
\end{cases}
$$

Now to solve the recurrence relation by substitution:

$$
T(n) = 3T(n/3) + n
$$

$$
= 3(3T(n/9) + n) + n
$$

$$
\vdots
$$

$$
= 3^i T(n/3^i) + i \cdot n
$$

For $i = \log n$:

$$
T(n) = 3^{\log n} \cdot T(1) + n \cdot \log n
$$

$$
T(n) = n + n \cdot \log n
$$

Thus, the time complexity is:

$$
T(n) \in \Theta(n \log n)
$$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I completed this independently.
