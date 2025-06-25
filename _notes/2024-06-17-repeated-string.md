---
layout: post
date: 2024-06-17 10:55:46
time: 10:46pm
location: Lisbon, Portugal
inline: false
related_posts: false
title: repeated string
giscus_comments: true
---

$$ O(n) $$ solution in Python to the [repeated string](https://www.hackerrank.com/challenges/repeated-string/problem) problem from HackerRank:

{% custom_highlight python linenos start_line=1 %}
def repeatedString(s, n):
    c = 0
    for i in range(len(s)):
        if s[i] == 'a':
            c += 1

    c = c * (n // len(s))
    for i in range(n % len(s)):
        if s[i] == 'a':
            c += 1
    
    return c

if __name__ == "__main__":
    print(repeatedString('abcac', 10))
{% endcustom_highlight %}
