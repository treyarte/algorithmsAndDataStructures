Given a time in [\-hour AM/PM format](https://en.wikipedia.org/wiki/12-hour_clock), convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.  
\- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

**Example**

- Return '12:01:00'.
- Return '00:01:00'.

**Function Description**

Complete the _timeConversion_ function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

- _string s_: a time in hour format

**Returns**

- _string_: the time in hour format

**Input Format**

A single string that represents a time in \-hour clock format (i.e.: or ).

**Constraints**

- All input times are valid

**Sample Input**

    07:05:45PM

**Sample Output**

    19:05:45
