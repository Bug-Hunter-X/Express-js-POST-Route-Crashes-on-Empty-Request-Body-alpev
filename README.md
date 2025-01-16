# Express.js POST Route Crash on Empty Request Body

This repository demonstrates a common error in Express.js applications where a POST route crashes if the request body is unexpectedly empty.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

The original code directly accesses properties of `req.body` without checking if it's defined or contains the expected data. If the request body is empty or doesn't have the expected structure, this will cause a runtime error.

## Solution

The solution involves adding checks to ensure `req.body` is defined and contains the necessary properties before accessing them.  This prevents the application from crashing and allows for more graceful error handling.